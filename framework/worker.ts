'use strict';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import {koaRouter} from '../app/router';
import {Controller} from './controller';

const controllers = require('require-all')({
	dirname     :  __dirname+'/../app/controller',
	filter      :  /\.ts/,
	excludeDirs :  /^\.(git|svn)$/,
	recursive   : false
})['.ts'];


interface InewControllers {
	[key: string]: any;
}
const newControllers: InewControllers = {};
Object.keys(controllers).forEach((key: string) => {
	const newKey: string = key.replace('Controller', '').replace(/./, (letter: string) => {
		return letter.toLowerCase();
	});
	newControllers[newKey] = new controllers[key];
});


const Router = new KoaRouter();
const App = new Koa();


App.use(async (ctx, next) => {
	Controller.newCtx = ctx;
	next();
});

const oldGet = Router.get;
Router.get = (path: string, instance: any) => {
	return oldGet.call(Router, path, instance.action.bind(instance));
};


koaRouter(Router, newControllers);
App.use(Router.routes()).use(Router.allowedMethods());
const server = App.listen();

process.on('message', (name, tcp) => {
	if (name === 'server') {
		tcp.on('connection', (socket: any) => {
			server.emit('connection', socket);
		});
	}
});

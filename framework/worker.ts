'use strict';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import {koaRouter} from '../app/router';
import {Controller} from './controller';
import {NewsController} from '@/app/controller/news';

const Router = new KoaRouter();
const App = new Koa();
const controllers: any = {};

controllers.news = new NewsController();

App.use(async (ctx, next) => {
	Controller.newCtx = ctx;
	next();
});

const oldGet = Router.get;
Router.get = (path: string, instance: any) => {
	return oldGet.call(Router, path, instance.action.bind(instance));
};


koaRouter(Router, controllers);
App.use(Router.routes()).use(Router.allowedMethods());
const server = App.listen();

process.on('message', (name, tcp) => {
	if (name === 'server') {
		tcp.on('connection', (socket: any) => {
			server.emit('connection', socket);
		});
	}
});

import * as Koa from 'koa';
import * as http from 'http';
import * as KoaRouter from 'koa-router';
import {DoRouter} from '../app/router';
import {app} from './app';
import {Controller} from './controller';


const Router = new KoaRouter();
const App = new Koa();


Router.use(async (ctx, next) => {
	app.ctx = ctx;
	Controller.app = app;
	await next();
});


interface IgetRouters {
	get(path: string, instance: any): any;
}

const getRouters: IgetRouters = {
	get: (path: string, instance: any) => {
		Router.get(path, instance.action.bind(instance));
	}
};
DoRouter(getRouters, app.controller);

App.use(Router.routes()).use(Router.allowedMethods());
const server = App.listen();

let worker: http.Server;
process.on('message', (name, tcp: http.Server) => {
	worker = tcp;
	if (name === 'server') {
		tcp.on('connection', (socket: any) => {
			server.emit('connection', socket);
		});
	}
});
process.on('uncaughtException', () => {
	// 停止接收新的连接
	worker.close(() => {
		// 所有已有的连接断开后，退出进程
		process.exit(1);
	});
});

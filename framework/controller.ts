import * as Koa from 'koa';
import {config, Iconfig} from '@/config/default.config.ts';


class Controller {
	public static newCtx: Koa.BaseContext;
	[key: string]: any;
	public config: Iconfig = config;

	public get ctx(): Koa.BaseContext {
		return Controller.newCtx;
	}

	public action() {
		const ac = this.ctx.query.ac;
		if (this[ac]) {
			this[ac]();
		}
	}
}


export {
	Controller
};

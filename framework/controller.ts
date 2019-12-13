import {Iapp} from './app.interface';


class Controller {
	public static app: Iapp;

	[key: string]: any;

	public get app(): Iapp {
		return Controller.app;
	}

	public async action() {
		const ac = this.app.ctx.query.ac;
		if (this[ac]) {
			await this[ac]();
		}
	}
}


export {
	Controller
};

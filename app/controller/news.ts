import {Controller} from '@/framework/controller';

export class NewsController extends Controller {
	public async test() {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		});
		this.app.ctx.body = 22212;
	}

	public async aa() {
		this.app.logger.error('sdfssss');
		this.app.ctx.body = this.app.config.port;
	}

}

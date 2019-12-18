import {Controller} from '@/framework/controller';

export class NewsController extends Controller {
	public async test() {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 0);
		});

		this.app.logger.info('info----');

		this.app.ctx.body = 22212;
	}

	public async aa() {
		const {model,logger} = this.app;
		model.news.create({
			name:'ssdname',
			type:'ssstype',
			author:'sssauthor'
		});

		logger.error('ssssf1');

		this.app.ctx.body = this.app.config.port+'1';
	}
}

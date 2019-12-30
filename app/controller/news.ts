import {Controller} from '@/framework/controller';

export class NewsController extends Controller {
	public async test() {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 0);
		});

		this.app.logger.info('inf11----');

		this.app.ctx.body = 2221112;
	}

	public async aa() {
		const {model,logger} = this.app;
		model.news.create({
			name:'ssdname',
			type:'ssstype',
			author:'sssauthor'
		});

		logger.error('ssssf123332');

		this.app.ctx.body = this.app.config.port+'1';
	}
}

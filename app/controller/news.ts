import {Controller} from '@/framework/controller';
import * as OS from 'os';

export class NewsController extends Controller {
	public async test() {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 0);
		});

		this.app.logger.info('inf11----');
		this.app.ctx.body = process.memoryUsage().heapTotal+'/'+OS.totalmem();
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

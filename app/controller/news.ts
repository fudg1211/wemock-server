import {Controller} from '@/framework/controller';

export class NewsController extends Controller {
	public test() {
		this.ctx.body = 22212;
	}

	public aa() {
		this.ctx.body = this.config.port;
	}

}

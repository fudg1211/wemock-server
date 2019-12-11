import {Controller} from '../../framework/controller';

export class NewsController extends Controller {
	public test(ctx: any) {
		this.ctx.body = 111;
	}

}

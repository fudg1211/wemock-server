class Controller {
	public static newCtx: any;
	[key: string]: any;

	public get ctx() {
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

export const koaRouter = (router: any, controller: any) => {
	console.log('router');
	router.get('/news', controller.news);
};


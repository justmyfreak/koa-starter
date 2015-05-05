module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
		.get('/link/:id', function *(next) {
			console.log('/link/'+this.params.id);
			this.body = "Get value from params : "+ this.params.id;
		})
		.get('/render/view', indexCtrl.view)
		.get('/view/:id', indexCtrl.test);

	app.use(router.middleware());
};
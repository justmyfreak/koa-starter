module.exports = {
	index: function *index(next) {
		this.body = "Welcome to koajs-starter";
	},
	
	view: function *index(next) {
		yield this.render('index.ect', {
			title: 'Render view template'
		});
		yield next;
	},
	
	test: function *(next, id) {
		this.body = "Get param from controller : "+this.params.id;
	}
};
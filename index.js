var koa = require('koa'),
    path = require('path'),
    views = require('koa-views'),
    config = require('config'),
    serve = require('koa-static');

var app = module.exports = koa();

// initialize render helper
app.use(views(config.template.path, {map: { ect: 'ect' }} ));

if (!module.parent) app.listen(3000);
const homeRouter = require('./home');

function route(app) {
    app.use('/api', homeRouter);
}

module.exports = route;

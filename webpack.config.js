/**
 * Created by hamidbehnam on 7/8/17.
 */

switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = require('./webpack-associates/webpack.config.dev')();
        break;
    case 'rc':
        module.exports = require('./webpack-associates/webpack.config.prod')();
        break;
    case 'prod':
        module.exports = require('./webpack-associates/webpack.config.prod')();
        break;
    default:
        module.exports = require('./webpack-associates/webpack.config.dev')();
        break;
}
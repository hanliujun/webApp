const pathUtil = require('path') //引入node的path模块
const webpackConfig = require('./webpack-config')
const config = {
    path: {
        src: pathUtil.join(__dirname, '../src'),
        static: pathUtil.join(__dirname, '../src/static'),
        dist: pathUtil.join(__dirname, '../dist')
    },
    webpackConfig
}

module.exports = config
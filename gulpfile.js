//引入资源
const gulp = require('gulp')  //引入gulp
const connect = require('gulp-connect') //引入server
const proxy = require('http-proxy-middleware') //引入跨域
const {path, webpackConfig} = require('./config')  //引入config配置（路径等）
const pathUtil = require('path') //引入node模块的path
const sass = require('gulp-sass') //引入sass编译
const del = require('del') //引入删除文件
const watch = require('gulp-watch')  //引入gulp-watch
const webpack  = require('webpack-stream') //引入webpack


// 迁移HTML文件
gulp.task('copy-html', () => {
    let { src, dist } = path
    return gulp.src(src + '/*.html')
            .pipe(gulp.dest(dist))
            .pipe(connect.reload())
})

// 迁移Static文件
gulp.task('copy-static', () => {
    let { static, dist } = path
    return gulp.src(static + '/**/*')
            .pipe(gulp.dest(dist + '/static'))
})

// 处理sass文件
gulp.task('compile-sass', () => {
    let { src, dist } = path
    return gulp.src(src + '/stylesheets/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest(dist + '/stylesheets'))
})

// 处理JS文件
gulp.task('pack-js', () => {
    let { src, dist } = path
    return gulp.src(src + '/javascripts/**/*.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(dist + '/javascripts'))
})

// 开启开发服务器
gulp.task('connect', () => {
    let { dist } = path
    // connect.server({
    //     root: dist,
    //     livereload: true,
    //     middleware: function (connect, opt) {
    //         return connectProxy('/api',  {
    //             target: 'http://m.maoyan.com',//代理的目标地址
    //             changeOrigin:true,//
    //             pathRewrite:{//路径重写规则 
    //                 '^/api':''
    //             }
    //         })
    //     }
    // })
    connect.server({
        root: [dist],
        port: 3003,
        middleware: function(connect, opt) {
            return [
                proxy('/api',  {
                    target: 'http://m.maoyan.com',//代理的目标地址
                    changeOrigin:true,//
                    pathRewrite:{ //路径重写规则 
                        '^/api':''
                    }
                })
            ]
        }

    });
})

// 监听文件变化
gulp.task('watch', () => {
    let { dist, src } = path
    gulp.watch(src + '/*.html', ['copy-html']);
    gulp.watch(src + '/stylesheets/**/*.scss', ['compile-sass']);
    gulp.watch(src + '/javascripts/**/*', ['pack-js']);
    // 监听static中静态资源的变化
    watch(src + '/static/**/*', (v) => {
        if ( v.event === 'unlink' ) { // 如果是删除文件
            // 将dist/static中的对应文件也删掉
            // console.log(v.path.split('static')[1])
            let _path = dist + '/static'+ v.path.split('static')[1];
            del(_path) // 删除
        } else {
            gulp.start(['copy-static']) // 执行复制静态文件的任务
        }
    })
})

gulp.task('default', ['copy-static', 'copy-html', 'compile-sass','pack-js', 'watch', 'connect'],  () => console.log('ok.'))
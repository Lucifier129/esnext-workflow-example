var gulp = require('gulp')
var babel = require("gulp-babel")
var path = require('path')
var plumber = require('gulp-plumber')

var folderName = process.argv[2]
var taskName = folderName

var from = path.join(__dirname, 'src-esnext')
var to = path.join(__dirname, 'src')

var src = path.join(from, folderName, './**/*.js')
var dest = path.join(to, folderName)

gulp.task('build', function() {
    return gulp.src(src)
        .pipe(plumber())
        .pipe(babel({
            blacklist: ["strict"], //不允许在每个文件头添加 use strict
            stage: 0 //允许es7语法
        }))
        .pipe(gulp.dest(dest))
})

gulp.task(taskName, ['build'], function() {
	var watcher = gulp.watch(src, ['build'])
	watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
})

gulp.task('default', function() {
    console.error('请输出一个目录名: gulp floderName')
})

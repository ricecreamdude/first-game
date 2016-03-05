'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
gulp.task('webpack:dev', () => {
  return gulp.src(__dirname + '/src/client.js', { read: true })
    .pipe(webpack({
      output: {
        filename: 'game.js'
      }
    }))
    //.pipe(plugins.concat('game.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest('build/'));
});
gulp.task('html:dev', () => {
  return gulp.src(__dirname + '/src/**/*.html')
    //.pipe(plugins.htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('css:dev', () => {
  return gulp.src(__dirname + '/src/**/*.css')
    //.pipe(plugins.cssnano())
    .pipe(gulp.dest(__dirname + '/build/'));
});
gulp.task('build:dev', [
  'webpack:dev',
  'html:dev',
  'css:dev',
]);
gulp.task('default', ['build:dev']);

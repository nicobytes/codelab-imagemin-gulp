//Copyright 2018 Google LLC.
//SPDX-License-Identifier: Apache-2.0

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
	 
gulp.task('imagemin', () => {
  gulp.src('src/assets/imgs/*')
  .pipe(imagemin([
    pngquant({quality: '50'}),
    mozjpeg({quality: '50'})
  ]))
  .pipe(gulp.dest('src/assets/imgs/'));
});

//Copyright 2018 Google LLC.
//SPDX-License-Identifier: Apache-2.0

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
	 
gulp.task('imagemin', () => {
  gulp.src('src/assets/imgs/*')
  .pipe(imagemin())
  .pipe(gulp.dest('src/assets/imgs/'));
});

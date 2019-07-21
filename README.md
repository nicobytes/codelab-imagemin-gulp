![Imgur](https://i.imgur.com/imphVvI.png)

```js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
	 
gulp.task('imagemin', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      pngquant({quality: [0.5, 0.5]}),
      mozjpeg({quality: 50}),
    ]))
    .pipe(gulp.dest('src/assets/imgs/'));
});

```

![Imgur](https://i.imgur.com/FeAsPBW.png)

```js
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');
	 

gulp.task('webp', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      webp({quality: 50})
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest('src/assets/imgs/'))
});
```
var gulp = require('gulp'),
sprity = require('sprity'),
rename = require('gulp-rename'),
del = require('del');

var options = {
  src: './app/assets/images/icons/**/*.png',
  out: './app/temp/sprite/',
  cssPath: '/assets/images/sprites/',
  template: './gulp/templates/sprite.css',
  style: './app/temp/sprite/css/*.css'
}

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.png')
    .pipe(sprity(options))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite',  'copySpriteGraphic', 'copySpriteCSS', 'endClean']);

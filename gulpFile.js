const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: 'styles/*.css',
        dest: 'build/styles'
    },
    scripts: {
        src: 'js/*.js',
        dest: 'build/scripts'
    },
    images: {
        src: 'images/*.jpg',
        dest: 'build/images'
    }
}

gulp.task('startMessage',function(done){
    console.log('gulp is running');
    done();
});

gulp.task('images',(done) => {
    gulp.src(paths.images.src)
        .pipe(imageMin())
        .pipe(gulp.dest(paths.images.dest));
    done();
})

gulp.task('styles',(done) => {
    gulp.src(paths.styles.src)
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
    done();
})

gulp.task('scripts',(done) => {
    gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
    done();
});

gulp.task('main',gulp.series('startMessage','images','styles','scripts'));
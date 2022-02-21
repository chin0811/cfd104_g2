const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('html/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./'));
}

//watch files
exports.w = function watchs() {
    watch(['html/*.html', 'html/**/*.html'], includeHTML);
}
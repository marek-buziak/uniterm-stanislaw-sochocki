'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import clean from 'gulp-clean';
import uglifyJS from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
const {src, dest, pipe, watch, series, parallel} = gulp;

// ścieżki główne
const paths = {
	src: './src',
	dest: './dist'
};

// kompilator sass z sourcemaps - deweloperski
export const stylesDev = (done) => {
	return src([paths.src + '/scss/*.scss', '!' + paths.src + '/scss/bootstrap*.scss'])
		.pipe(sourcemaps.init())
		.pipe(gulpSass({outputStyle: 'expanded'}).on('error', gulpSass.logError))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.dest + '/css'));
		
	done();
};

// kompilator sass bez sourcemaps - produkcyjny
export const stylesDist = (done) => {
	return src([paths.src + '/scss/*.scss', '!' + paths.src + '/scss/bootstrap*.scss'])
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(cleanCSS())
		.pipe(rename('index.min.css'))
		.pipe(dest(paths.dest + '/css'));
	
	done();
};

// babel - kompilacja kodu > ES6 do wersji ES5
export const babelCompile = (done) => {
	
	return src([paths.src + '/js/*.js'])
		.pipe(babel())
		.pipe(rename('index.babel.js'))
		.pipe(dest(paths.dest + '/js'));
	
	done();
};

// uglifikacja kodu JS
export const uglify = (done) => {
	return src([paths.dest + '/js/*.babel.js'])
		.pipe(uglifyJS())
		.pipe(rename('index.min.js'))
		.pipe(dest(paths.dest + '/js'));
	
	done();
};

// imagemin
export const imageMin = (done) => {
	return src([paths.src + '/img/**/*.jpg', paths.src + '/img/**/*.JPG', paths.src + '/img/**/*.png'])
		.pipe(imagemin([imagemin.mozjpeg({quality: 78, progressive: true}), imagemin.optipng({optimizationLevel: 5})]))
		.pipe(dest(paths.dest + '/img'));
};

// watch deweloperski
export const watchFilesDev = () => {
	watch ([paths.src + '/scss/*.scss'], stylesDev);
	watch ([paths.src + '/js/*.js'], babelCompile);
	watch ([paths.src + '/img/**/*.jpg', paths.src + '/img/**/*.JPG', paths.src + '/img/**/*.png'], imageMin);
};

export const cleanDist = (done) => {
	return src([paths.dest + '/**/*.*'], {read: false})
		.pipe(clean());
	
	done();
};

//  gulpDev zapisane w funkcji strzałkowej; domyślnie funkcje wykonywane są w trybie "series" - od góry do dołu, od lewej do prawej
//const gulpDev = (done) => {
//	
//	cleanDist; 
//	stylesDev; 
//	babelCompile;
//	
//	done();
//};

//export default gulpDev;
exports.gulpDev = series(cleanDist, parallel(imageMin, stylesDev, babelCompile));
exports.gulpDist = series(cleanDist, imageMin, stylesDist, babelCompile, uglify);
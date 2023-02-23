const { src, dest, watch, series } = require('gulp');
//Compilar css
const sass = require('gulp-sass')(require('sass'));
//compilar imagenes
const imagemin = require('gulp-imagemin');


function css(done) {
    console.log('compilando sass..');
    src('src/scss/app.scss')//identificar el arcvhivo principal
        .pipe(sass())//Compilar SASS
        .pipe(dest('build/css')) //Exportarlo o guardarlo en una ubicacion
    done();
}


function imagenes(done) {
    src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'))
    done();
}



function dev() {
    watch('src/scss/**/*.scss', css);
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev); //compilar todas las tares por default
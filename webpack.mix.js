const mix = require('laravel-mix')



mix.js('./src/js/app.js', './dist/js/bundle.min.js')
    .sass('./src/sass/app.scss', './dist/css/style.min.css')
    .sourceMaps(true, 'source-map');
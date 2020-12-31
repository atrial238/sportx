const {parallel, watch, src, dest, series, gulp} = require('gulp'),
	project_folder  = require('path').basename(__dirname),
	source_folder   = '#src',
	browserSync     = require('browser-sync').create(),
	fileInclude     = require('gulp-file-include'),
	del             = require('del'),
	autoprefixer    = require('gulp-autoprefixer'),
	group_media     = require('gulp-group-css-media-queries'),
	scss            = require('gulp-sass'),
	clean_css       = require('gulp-clean-css'),
	rename          = require('gulp-rename'),
	babel           = require('gulp-babel'),
	webp            = require('gulp-webp'),
	webpHtml        = require('gulp-webp-html'),
	webpcss         = require('gulp-webpcss'),
	imagemin        = require('gulp-imagemin'),
	spriteSvg       = require('gulp-svg-sprite'),
	ttf2woff        = require('gulp-ttf2woff'),
	ttf2woff2       = require('gulp-ttf2woff2'),
	ttf2eot         = require('gulp-ttf2eot'),
	fonter          = require('gulp-fonter'),
	fs              = require('fs'),
	newer           = require('gulp-newer'),
	uglify          = require('gulp-uglify-es'),
	webpack			 = require("webpack-stream"),
	path = {
		build: {
			html: project_folder + '/',
			css: project_folder + '/css/',
			js: project_folder + '/js/',
			img: project_folder + '/img/',
			fonts: project_folder + '/fonts/'
		},
		src: {
			html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
			css: source_folder + '/scss/style.scss',
			js: source_folder + '/js/main.js',
			jsCheckoutIE: source_folder + '/js/checkoutIE.js',
			img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
			fonts: source_folder + '/fonts/*.ttf'
		},
		watch: {
			html: source_folder + '/**/*.html',
			css: source_folder + '/scss/**/*.scss',
			js: source_folder + '/js/**/*.js',
			img: source_folder + '/img/**/+.{jpg,png,svg,gif,ico,webp}',
		},
		cleanDev: [
				'./' + project_folder + '/*.html',
				'./' + project_folder + '/css',
				],
		cleanProd: './' + project_folder + '/'
	};

function browsersync() {
	browserSync.init({
		server: {
			baseDir: './' + project_folder + '/'
		},
		port: 3000,
		notify: false
	});
}

function html() {
	return src(path.src.html)
		.pipe(fileInclude())
		.pipe(webpHtml())
		.pipe(dest(path.build.html))
		.pipe(browserSync.stream());
}

function imagesDev() {
	return src(path.src.img)
		.pipe(newer(path.build.img))
		.pipe(dest(path.build.img))
		.pipe(browserSync.stream());
}

function iP() {
	return src(path.src.img)
		.pipe(webp({
			quality: 70
		}))
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(newer(path.build.img))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			interlaced: true,
			optimizationLevel: 3
		}))
		.pipe(dest(path.build.img));
}

function sprite() {
	return src([source_folder + '/img/icons/*.svg'])
		.pipe(spriteSvg({
			mode: {
				stack: {
					sprite: '../icons/sprite.svg',
					example: true
				}
			}
		}))
		.pipe(dest(source_folder + '/img/'));
}

function scriptDev() {
	src(path.src.jsCheckoutIE)
	.pipe(dest(path.build.js));
	return src(path.src.js)
	.pipe(webpack({
		mode: 'development',
		output: {
			 filename: 'script.js'
		},
		watch: false,
		devtool: "source-map"
	}))
	.pipe(dest(path.build.js))
	.pipe(browserSync.stream());
}

function scriptProd () {
	src(path.src.jsCheckoutIE)
	.pipe(dest(path.build.js));
	src(path.src.js)
	.pipe(webpack({
		mode: 'production',
		output: {
			 filename: 'script.min.js'
		}
	}))
	.pipe(dest(path.build.js));
return src(path.src.js)
	.pipe(webpack({
		mode: 'production',
		output: {
			filename: 'scriptIE.min.js'
		},
		module: {
			rules: [
				{
				  test: /\.m?js$/,
				  exclude: /(node_modules|bower_components)/,
				  use: {
					 loader: 'babel-loader',
					 options: {
						presets: [['@babel/preset-env', {
							 corejs: 3,
							 useBuiltIns: "usage"
							}]]
						}
					}
				}
			]
		}
	}))
	.pipe(dest(path.build.js));
}


function cssDev() {
	return src(path.src.css)
		.pipe(scss({
			outputStyle: 'expanded'
		}))
		.pipe(webpcss({
			webpClass: "._webp",
			noWebpClass: "._no-webp"
		}))
		.pipe(dest(path.build.css))
		.pipe(browserSync.stream());
}

function cssProd() {
	return src(path.src.css)
		.pipe(scss({
			outputStyle: 'expanded'
		}))
		.pipe(group_media())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 versions'],
			cascade: true
		}))
		.pipe(webpcss({
			webpClass: "._webp",
			noWebpClass: "._no-webp"
		}))
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(dest(path.build.css));
}

function fonts() {
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	src(path.src.fonts);
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
}

function otf() {
	src(source_folder + '/fonts/*.otf')
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(source_folder + '/fonts/'));
}

function fontsStyle() {
	let file_content = fs.readFileSync(source_folder + '/scss/service/fonts.scss');
	if (file_content == '') {
		
		fs.writeFile(source_folder + '/scss/service/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/scss/service/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		});
	}
}
function cb() { }

function watchFiles() {
	watch([path.watch.html], html);
	watch([path.watch.css], cssDev);
	watch([path.watch.js], scriptDev);
	watch([path.watch.img], imagesDev);
}

function cleanDev() {
	return del(path.cleanDev);
}

function cleanProd() {
	return del(path.cleanProd);
}


const bP = series( scriptProd, iP, cssProd, html),
		bF = series(fonts, fontsStyle),
		build = series( parallel(scriptDev, imagesDev, cssDev, html)),
		watchTask = parallel(build, watchFiles, browsersync);

exports.watchTask  = watchTask;
exports.default    = watchTask;
exports.bP         = bP;
exports.bF         = bF;
exports.iP         = iP;
exports.sprite     = sprite;
exports.otf        = otf;
// npm install webp-converter@2.2.3 --save-dev
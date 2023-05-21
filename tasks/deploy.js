const {
	src
} = require('gulp');
const ftp = require('vinyl-ftp');
const ftpSettings = require('../tasks/ftp_settings');
const chalk = require('chalk');
const connect = ftp.create(ftpSettings);

module.exports = function deploy() {
	return src(['build/**/*.*', '!build/**/*.map'])
		.pipe(connect.newer('www/aventa96.dtyukavin.ru'))
		.pipe(connect.dest('www/aventa96.dtyukavin.ru'))
		.on('end', () => console.log(`Finished deploing ./build to https://${chalk.blueBright(ftpSettings.host)}`))
}
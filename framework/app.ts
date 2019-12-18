import {config, Iconfig} from '@/config/default.config.ts';
import {Iapp, Ilogger} from './app.interface';
import {db} from './database';

interface Icontroller {
	[key: string]: any;
}

const controllers = require('require-all')({
	dirname: __dirname + '/../app/controller',
	filter: /\.ts/,
	excludeDirs: /^\.(git|svn)$/,
	recursive: false
})['.ts'];


const newControllers: Icontroller = {};
Object.keys(controllers).forEach((key: string) => {
	const newKey: string = key.replace('Controller', '').replace(/./, (letter: string) => {
		return letter.toLowerCase();
	});
	newControllers[newKey] = new controllers[key];
});



const model = require('require-all')({
	dirname: __dirname + '/../app/model',
	filter: /\.ts/,
	excludeDirs: /^\.(git|svn)$/,
	recursive: false
})['.ts'];



function log(type: string, msg: string) {
	process.send({
		type: 'log',
		msg: {
			type,
			msg
		}
	});
}


interface Iloggers {
	[key: string]: any;
}

function setLogers(keys: string[]): object {
	const loggers: Iloggers = {};
	keys.forEach((key: string) => {
		loggers[key] = (msg: string) => {
			console.log(msg);
			log(key, msg);
		};
	});
	return loggers;
}

export const app: Iapp = {
	config,
	controller: newControllers,
	db,
	model,
	logger: setLogers(['debug', 'info', 'warn', 'error', 'fatal']) as Ilogger
};



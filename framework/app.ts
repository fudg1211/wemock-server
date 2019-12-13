import {config, Iconfig} from '@/config/default.config.ts';
import {Iapp} from './app.interface';

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

export const app: Iapp = {
	config,
	controller: newControllers
};



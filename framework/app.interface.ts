import {config, Iconfig} from '@/config/default.config.ts';
import { Logger} from 'log4js';
import * as mongoose from 'mongoose';

import * as Koa from 'koa';

interface Icontroller {
	[key: string]: any;
}

export interface Ilogger {
	debug(msg: string): void;
	info(msg: string): void;
	warn(msg: string): void;
	error(msg: string): void;
	fatal(msg: string): void;
}

export interface Iapp {
	config: Iconfig;
	controller: Icontroller;
	ctx?: Koa.BaseContext;
	db?: mongoose.Connection;
	logger: Ilogger;
}

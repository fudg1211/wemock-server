import {config, Iconfig} from '@/config/default.config.ts';
import * as Koa from 'koa';

interface Icontroller {
	[key: string]: any;
}


export interface Iapp {
	config: Iconfig;
	controller: Icontroller;
	ctx?: Koa.BaseContext;
}

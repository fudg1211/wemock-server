import {configure, getLogger} from 'log4js';

configure({
	appenders: {access: {type: 'console'}},
	categories: { default: { appenders: ['access'], level: 'info' } }
});

const logger = getLogger('access');

process.on('message', (log) => {
	logger.info(log.msg);
});




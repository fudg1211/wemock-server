import * as http from 'http';
import * as CP from 'child_process';
import * as OS from 'os';

const cpuLength = OS.cpus().length;
const server = http.createServer();
server.listen(8083);

const workers: any = {};
const maxRestartNum = 100;
let logWorker: any;

function createWorker(exitNum: number = 0) {
	const worker = CP.fork(__dirname + '/worker.ts');
	worker.on('exit', () => {
		exitNum = workers[worker.pid].exitNum;
		delete workers[worker.pid];
		if (exitNum < maxRestartNum) {
			createWorker(++exitNum);
		}
	});
	worker.on('message', (msg) => {
		if (msg.type === 'log') {
			logWorker.send(msg);
		}
	});
	workers[worker.pid] = {
		exitNum,
		worker
	};
	worker.send('server', server);
}


function createLogWorker(exitNum: number = 0) {
	logWorker = CP.fork(__dirname + '/logger.ts');
	workers[logWorker.pid] = {
		exitNum,
		worker: logWorker
	};
	logWorker.on('exit', () => {
		exitNum = workers[logWorker.pid].exitNum;
		delete workers[logWorker.pid];
		if (exitNum < maxRestartNum) {
			createWorker(++exitNum);
		}
		createLogWorker(++exitNum);
	});
}

createLogWorker();


for (let i = 0; i < cpuLength; i++) {
	createWorker();
}

process.on('exit', () => {
	Object.keys(workers).forEach((key) => {
		workers[key].kill();
		delete workers[key];
	});
});


import * as mongoose from 'mongoose';

mongoose.connect('mongodb://180.76.177.196/wemock');
const db: mongoose.Connection = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log(11122221);
});

export {
	db
};

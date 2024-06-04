const session = require('express-session');
const sequelizeSession = require('connect-session-sequelize')(session.Store);
const sequelize = require('./db.config')

const sessionTable = new sequelizeSession({
	db: sequelize,
	tableName: 'sessions',
});


const sessionConfig = {
	secret: 'isep-secret',
	store: sessionTable,
	resave: false,
	cookie: {
		httpOnly: true,
		maxAge: 60 * 60 * 1000 //1h
	}
}


sessionTable.sync();

module.exports = session(sessionConfig);
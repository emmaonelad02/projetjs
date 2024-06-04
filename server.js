const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const sequelize = require('./backend/config/db.config')
const Utilisateur = require('./backend/models/models')

const session = require('./backend/config/session.config');

const utilisateurRouter = require('./backend/routes/routes');


const  app = express();
const PORT = process.env.SERVER_PORT || 3000;

//configurer les pages ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './frontend/views'));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(expressLayouts);
app.set("layout", "./main");

const publicPath = path.join(__dirname, "./frontend/public");

app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', utilisateurRouter);
app.get('/accueil', (req, res) => {
	res.render('./pages/accueil.ejs')
})
sequelize
	.authenticate()
	.then(()=> {
		console.log("Connexion réussie");
	})
	.catch((error)=> {
		console.log('Connexion impossible', error);
	})
	
	
	sequelize
	.sync({update: true})
	.then(()=> {
		//console.log("Mise à jour réussie");
		app.listen(PORT, ()=> {
			console.log("Le serveur a démarré sur le port " + PORT);
		})
	})
	.catch((error)=> {
		console.log('Mise à jour impossible', error);
	})
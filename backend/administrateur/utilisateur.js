const Utilisateur = require("../models/utilisateur.model")


const inscriptionPage = (req, res) => {
	//afficher la page d'inscription
	
	res.render('./pages/connexion/inscription.ejs')
}

const inscription = async (req, res)=> {
	
	const { prenom, nom, email, mot_de_passe, confirmation_mot_de_passe } = req.body;
	
	// logique metier pour s inscrire
	
	const utilisateur = { prenom, nom, email, mot_de_passe, confirmation_mot_de_passe };
	
	try {
	const response = await Utilisateur.create(utilisateur);
	console.log('utilisateur cree avec succes');
	res.redirect('/connexion');
	} catch (error) {
		console.log(error);
	}
};

const connexionPage  = (req, res) => {
	//afficher la page de connexion
	res.render('./pages/connexion/connexion.ejs')
}

const connexion = async (req, res)=> {
	const {email, mot_de_passe} = req.body;
	
	const utilisateur = await Utilisateur.findOne({where: {email: email}})
	
	if (!utilisateur) {
		res.status(404).send('Utilisateur introuvable');
	} else {
		if (mot_de_passe != utilisateur.mot_de_passe) {
			res.status(401).send('Mot de passe incorrect ');
			
		} else {
			res.redirect('/accueil')
		}
	}
	
}

module.exports = {inscriptionPage, inscription, connexionPage, connexion}
const sequelize = require('../config/db.config');
const { DataTypes } = require('sequelize')

const Utilisateur = sequelize.define('Utilisateur', 
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		prenom: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nom: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		mot_de_passe: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		profil: {
			type: DataTypes.ENUM('etudiant', 'professeur', 'administrateur'),
			default: 'etudiant'
		}
	},
	{
		tableName: 'utilisateur'
	}
)

module.exports = Utilisateur;
Users = new Mongo.Collection("users");

UserSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Nom d'utilisateur",
	},
	password: {
		type: String,
		label: "Mot de passe"
	},
	headline: {
		type: String,
		label: "Headline"
	}
});
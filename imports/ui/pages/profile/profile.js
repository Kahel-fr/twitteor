import "./profile.html"
import "../../components/user-card/user-card.js";

Template.profile.onCreated(function() {
	Meteor.subscribe('users.all');
});

Template.profile.helpers({
	user : () => {
		//si aucun paramètre n'est passé -> profile de l'utilisateur connecté
			var id;
			!FlowRouter.getParam("_id") ? id = Meteor.userId() : FlowRouter.getParam("_id");
			return Meteor.users.findOne({_id: FlowRouter.getParam("_id")});
	}
});
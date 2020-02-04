import "./profile.html"
import "../../components/user-card/user-card.js";

Template.profile.helpers({
	user : () => {
		//si aucun paramètre n'est passé -> profile de l'utilisateur connecté
		if(!FlowRouter.getParam("_id"))
			return Meteor.users.findOne(Meteor.userId());
		//sinon profile de l'utilisateur avec cet id
		else
			return Meteor.users.findOne(FlowRouter.getParam("_id"));
	},
	posts:[
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
	]
});
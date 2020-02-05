import './post.html';
import {Posts} from "../../../../collections/Posts.js";

Template.post.helpers({
	//retourne vrai si le post appartient à l'utilisateur connecté
	belongToUser(){
		return Template.instance().data.author == Meteor.userId();
	},
	//retourne vrai si le post est affiché sur sa propre page
	self(){
		return FlowRouter.getParam("_id") == Template.instance().data._id;
	},
	//retourne vrai si le post à un parent
	hasParent(){
		return !!Template.instance().data.parent;
	},
	//retourne vrai si le post est affiché sur la page de son parent
	commentaire(){
		return FlowRouter.getParam("_id") == Template.instance().data.parent;
	},
	commentaires(){
		return Posts.find({parent: Template.instance().data._id}).count();
	}
})

Template.post.events({
	'click .delete'(event, template){
		Posts.remove({_id: template.data._id});
	}
})
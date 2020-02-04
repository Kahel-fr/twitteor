import {Posts} from '../../../../collections/Posts.js'
import "./profile.html"
import "../../components/user-card/user-card.js";
import '../../components/post/post.js';

Template.profile.onCreated(function() {
	Meteor.subscribe('users.all');
	Meteor.subscribe('posts.all');
});

Template.profile.helpers({
	user() {
		//si aucun paramètre n'est passé -> profile de l'utilisateur connecté sinon -> profile qui correspond à l'id passé en paramètre
		var id = !FlowRouter.getParam("_id") ?Meteor.userId() : FlowRouter.getParam("_id");
		console.log(id)
		return Meteor.users.findOne({_id: id});
	},
	posts() {
		var id = !FlowRouter.getParam("_id") ?Meteor.userId() : FlowRouter.getParam("_id");
		return Posts.find({author: id}, { sort: { createdAt: -1 } });
	},
});
import "./user-card.html";
import {Follows} from "../../../../collections/Follows.js";

Template.user_card.helpers({
	follow(){
		console.log(Template.instance().data._id)
		return !!Follows.findOne({
			followed: Template.instance().data._id,
			follower: Meteor.userId()
		})
	},
	//le nombre de suivis
	followeds(){
		return Follows.find({follower: Template.instance().data._id}).count();
	},
	//le nombre de suiveurs
	followers(){
		return Follows.find({followed: Template.instance().data._id}).count();
	}
})

Template.user_card.events({
	'click .follow'(event, template){
		event.preventDefault();
		console.log(template.data._id)
		Follows.insert({
			followed: template.data._id,
			follower: Meteor.userId()
		})
	},
	'click .unfollow'(event, template){
		event.preventDefault();
		console.log(template.data._id)
		//trouve le follow
		var doc = Follows.findOne({
			followed: Template.instance().data._id,
			follower: Meteor.userId()
		});
		//le supprime
		Follows.remove({
			_id: doc._id
		});
	}
})
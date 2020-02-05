import {Follows} from '../../../../../collections/Follows.js'
import "./followeds.html";
import "../../../components/user-card/user-card.js";

Template.followeds.helpers({
	followeds(){
		var followedIds = Follows.find({follower: FlowRouter.getParam("_id")}, {followed: 1}).fetch().map(a => a.followed);
		console.log(FlowRouter.getParam("_id"));
		return Meteor.users.find({_id: {$in: followedIds}});
	}
})
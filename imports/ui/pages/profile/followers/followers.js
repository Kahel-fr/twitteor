import {Follows} from '../../../../../collections/Follows.js'
import "./followers.html";
import "../../../components/user-card/user-card.js";

Template.followers.helpers({
	followers(){
		var followersIds = Follows.find({followed: FlowRouter.getParam("_id")}, {follower: 1}).fetch().map(a => a.follower);
		return Meteor.users.find({_id: {$in: followersIds}});
	}
})
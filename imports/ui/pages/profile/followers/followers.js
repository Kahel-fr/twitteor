import "./followers.html";
import "../../../components/user-card/user-card.js";

Template.followers.helpers({
	followers(){
		return Follows.find({followed: Template.instance().data._id});
	}
})
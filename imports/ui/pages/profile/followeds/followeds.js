import "./followeds.html";
import "../../../components/user-card/user-card.js";

Template.followeds.helpers({
	followeds(){
		return Follows.find({follower: Template.instance().data._id});
	}
})
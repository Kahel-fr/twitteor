import { Meteor } from 'meteor/meteor';
import "./modification.html";
import "../../../components/user-card/user-card.js";

Template.modification.events({
	'click .update'(event){
		event.preventDefault();
		var username = document.getElementById("test").value;
		Meteor.users.update({_id:Meteor.userId()}, {$set: {username: username }});
		console.log(username);

	}
});





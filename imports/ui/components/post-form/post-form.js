import { Meteor } from 'meteor/meteor';
import "./post-form.html";
import {Posts} from "../../../../collections/Posts.js";

Template.post_form.events({
	'submit'(event){
		event.preventDefault();
		Posts.insert({
			content: event.target.content.value,
		});
	}
})
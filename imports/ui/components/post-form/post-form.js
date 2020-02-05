import { Meteor } from 'meteor/meteor';
import "./post-form.html";
import {Posts} from "../../../../collections/Posts.js";

Template.post_form.events({
	'submit'(event, template){
		event.preventDefault();
		if(!!template.data.parent)		
			Posts.insert({
				content: event.target.content.value,
				parent: template.data.parent
			});
		else
			Posts.insert({
				content: event.target.content.value,
			});
	}
})
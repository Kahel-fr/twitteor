import {Posts} from '../../../../collections/Posts.js'

import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/post/post.js';
import '../../components/post-form/post-form.js';
Template.home.onCreated(function() {
	Meteor.subscribe('posts.all');
});

Template.home.helpers({
	posts() {
		return Posts.find({},{ sort: { createdAt: -1 } });
	},
});
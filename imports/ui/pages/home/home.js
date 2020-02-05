import {Posts} from '../../../../collections/Posts.js'
import {Follows} from '../../../../collections/Follows.js'

import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/post/post.js';
import '../../components/post-form/post-form.js';
Template.home.onCreated(function() {
	Meteor.subscribe('posts.all');
	Template.instance().data.showAll = false;
});

Template.home.helpers({
	posts() {
		var posts;
		if(FlowRouter.getParam("all") == "all")
			posts = Posts.find({}, { sort: { createdAt: -1 } });
		else{
			var followedIds = Follows.find({follower: Meteor.userId()}, {followed: 1}).fetch().map(a => a.followed);
			posts = Posts.find({author: {$in: followedIds}}, { sort: { createdAt: -1 } });
		}
		return posts;
	},
});
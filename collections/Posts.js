import { Meteor } from 'meteor/meteor';
export const Posts = new Mongo.Collection("posts");

SchemaPost = new SimpleSchema({
	content: {
		type: String
	},
	parent: {
		type: String,
		optional: true
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	},
	author: {
		type: String,
		autoValue: function(){
			return Meteor.userId();
		}
	},
      username: {
		  type: String,
		  autoValue: function(){
			return Meteor.user().username;
		  }
	  }
});

Posts.allow({
  insert: function () {
    return !!Meteor.userId();
  }
})

Posts.attachSchema(SchemaPost);

if(Meteor.isServer){
	Meteor.publish('posts.all', function(){
		return Posts.find({});
	});
}
else{
	Meteor.subscribe('posts.all');
}
const Posts = new Mongo.Collection("posts");

SchemaPost = new SimpleSchema({
	content: {
		type: String
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
	}
});
//définit qui suit qui
import { Meteor } from 'meteor/meteor';
export const Follows = new Mongo.Collection("follows");

SchemaFollow = new SimpleSchema({
	followed: {
		type: String
	},
	follower: {
		type: String
	},
});

Follows.allow({
  insert: function () {
    return !!Meteor.userId();
  },
  remove: function(){
  	return !!Meteor.userId();
  }
})

Follows.attachSchema(SchemaFollow);

if(Meteor.isServer){
	Meteor.publish('follows.all', function(){
		return Follows.find({});
	});
}
else{
	Meteor.subscribe('follows.all');
}
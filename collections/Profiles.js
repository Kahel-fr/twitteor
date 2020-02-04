//contient les informations supplémentaires relatifs aux utilisateurs (headline, ect...)
import { Meteor } from 'meteor/meteor';
export const Profiles = new Mongo.Collection("profiles");

SchemaProfile = new SimpleSchema({
	headline: {
		type: String
	},
});

Profiles.allow({
  insert: function () {
    return !!Meteor.userId();
  }
})

Profiles.attachSchema(SchemaProfile);

if(Meteor.isServer){
	Meteor.publish('profiles.all', function(){
		return Profiles.find({});
	});
}
else{
	Meteor.subscribe('profiles.all');
}
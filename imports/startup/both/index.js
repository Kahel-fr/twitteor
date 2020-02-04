// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

Meteor.users.allow({
  insert: function () {
    return !!Meteor.userId();
  }
})

Meteor.users.attachSchema(SchemaPost);

if(Meteor.isServer){
	Meteor.publish('users.all', function(){
		return Meteor.users.find({});
	});
}
else{
	Meteor.subscribe('users.all');
}

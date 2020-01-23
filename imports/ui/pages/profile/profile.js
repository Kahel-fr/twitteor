import "./profile.html"
Template.profile.helpers({
	username: "Michaël",
	followers: 8,
	followeds: 42,
	posts:[
		{ 
			username: 'Michaël',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{
			username: 'Michaël',
			content: 'Ceci est un autre nouveau tweet',
			timestamp: '16/01/2020 15h35'
		},
		{
			username: 'Michaël',
			content: 'Ceci est un autre nouveau tweet',
			timestamp: '16/01/2020 15h35'
		}
	]
});
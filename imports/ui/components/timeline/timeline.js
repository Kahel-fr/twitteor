import './timeline.html';

Template.timeline.helpers({
	posts: [
		{ 
			username: 'Michäel',
			content: 'Ceci est un nouveau tweet',
			timestamp: '16/01/2020 16h41'
		},
		{
			username: 'Yann',
			content: 'Ceci est un autre nouveau tweet',
			timestamp: '16/01/2020 15h35'
		}
		
	]
});
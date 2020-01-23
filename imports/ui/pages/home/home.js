import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/post/post.js';

Template.home.helpers({
	posts: [
		{ 
			username: 'Michaël',
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
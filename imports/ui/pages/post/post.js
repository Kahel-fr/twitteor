import "./post.html"
import '../../components/post/post.js';
import {Posts} from '../../../../collections/Posts.js'


Template.post_page.helpers({
	parent(){
		//console.log(Posts.findOne({_id: FlowRouter.getParam("_id")}).fetch())
		return Posts.findOne({_id: FlowRouter.getParam("_id")});
	},
	commentaires(){
		return Posts.find({parent: FlowRouter.getParam("_id")})
	}
})
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/post/post.js';
import '../../ui/pages/profile/followeds/followeds.js';
import '../../ui/pages/profile/followers/followers.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/profile/modification/modification.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});

FlowRouter.route('/home/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});

FlowRouter.route('/home/:all', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});

FlowRouter.route('/profile', {
  name: 'profile_self',
  action() {
    BlazeLayout.render('App_body', { main: 'profile' });
  },
}); 

FlowRouter.route('/post/:_id', {
  name: 'post',
  action() {
    BlazeLayout.render('App_body', { main: 'post_page' });
  },
});

FlowRouter.route('/profile/:_id', {
  name: 'profile',
  action() {
    BlazeLayout.render('App_body', { main: 'profile' });
  },
});

FlowRouter.route('/modification/', {
	name: 'modification',
	action() {
		BlazeLayout.render('App_body', {main: 'modification'});
	},
});

FlowRouter.route('/followeds/:_id', {
  name: 'followeds',
  action() {
    BlazeLayout.render('App_body', { main: 'followeds' });
  },
});

FlowRouter.route('/followers/:_id', {
  name: 'followers',
  action() {
    BlazeLayout.render('App_body', { main: 'followers' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
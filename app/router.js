import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('forgotPassword', { path: '/forgotpassword' });
  this.resource('auth', { path: '/signup' }, function(){
    this.route('apply');
    this.route('applyFinished', { path: '/apply/finished' });
  });
  this.resource('users');
  this.resource('user', { path: '/users/:username' }, function(){
    this.route('log');
    this.route('notification');
    this.route('editProfile', { path: '/edit-profile'} );
    this.route('resetPassword', { path: '/reset-password' });
    this.route('setCompany', { path: '/set-company' });
    this.resource('userPrivateMessages', { path: '/messages' }, function() {
      this.route('mine');
      this.route('unread');
    });
  });
  this.resource('financing', function(){
    this.route('apply');
    this.route('applyUpload', { path: '/apply/upload' });
    this.route('applyFinished', { path: '/apply/finished' });
  });
  this.resource('projects', function(){
    this.route('apply');
    this.route('show', { path: '/:id' });
    this.route('repayment');
  });
  this.resource('credit', function(){
    this.route('unapply');
  });
  this.resource('qualifications', function(){
    this.route('unapply');
  });
  this.resource('cars', function(){
    this.route('new');
    this.route('out');
  });
});

export default Router;

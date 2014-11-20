// Router.route('/', function () {
//   this.render('Home');
// });
Router.route('/', {
  template: 'Chatrooms',
  waitOn: function () {
    return Meteor.subscribe('chatrooms');
  },
  data: function () {
    return Chatrooms.find().fetch();
  }
});
Router.route('/chatroom/:_id', {
  name: 'chatroom.single',
  template: 'Chatroom',
  waitOn: function () {
    return [
      Meteor.subscribe('chatroom_single', this.params._id),
      Meteor.subscribe('messages', this.params._id)
    ]
  },
  data: function () {
    return Chatrooms.findOne({_id: this.params._id});
  }
});

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

}

if (Meteor.isServer) {

}

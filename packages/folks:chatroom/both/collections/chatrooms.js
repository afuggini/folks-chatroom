Chatrooms = new Mongo.Collection("chatrooms");

Chatroom = {};

Chatroom.create = function(params, cb){
  return Meteor.call('chatroomCreate', params, cb);
};

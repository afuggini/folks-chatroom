Chatrooms = new Mongo.Collection("chatrooms");

Chatroom = {};

Chatroom.create = function(params, cb){
  return Meteor.call('chatroomCreate', params, cb);
};

Chatroom.can = {
  view: function(userId){
    return User.isAdmin(userId);
  },
  create: function(userId){
    return User.isAdmin(userId);
  },
  update: function(userId){
    return User.isAdmin(userId);
  },
  remove: function(userId){
    return User.isAdmin(userId);
  }
}

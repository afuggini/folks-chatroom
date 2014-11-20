Messages = new Mongo.Collection("messages");

Message = {};

Message.create = function(params, cb){
  return Meteor.call('messageCreate', params, cb);
};

Message.can = {
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

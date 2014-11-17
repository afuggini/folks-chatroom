Messages = new Mongo.Collection("messages");

Message = {};

Message.create = function(params, cb){
  return Meteor.call('messageCreate', params, cb);
};

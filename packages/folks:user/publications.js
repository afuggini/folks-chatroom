Meteor.publish('currentUser', function(){
  if(!this.userId)
    return this.ready();

  return [
    Users.find({_id: this.userId}, {fields : {}}),
  ]
});
Meteor.startup(function(){
  if(Meteor.roles.find().count() === 0)
    User._defaults.roles.forEach(Roles.createRole);  
})
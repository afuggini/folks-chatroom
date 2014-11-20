Template.registerHelper('isAdmin', function(user){
  return User.isAdmin(user);
});
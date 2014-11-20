User.availableRoles = [
  "user",
  "admin",
  "customer"
];

User.isAdmin = function(user){
  return Roles.userIsInRole(user, ['admin', 'superadmin']);
}

User._defaults.roles = ['user', 'admin'];
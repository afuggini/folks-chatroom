Accounts.onCreateUser(function(options, user){
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;

  user = _.defaults(user, User.defaults());

  return user;
});

// User must be enabled to login
Accounts.validateLoginAttempt(function(attempt){
  if (!attempt.allowed)
    return false;

  if(!attempt.user)
    return false;

  return attempt.user.enabled === true;
})

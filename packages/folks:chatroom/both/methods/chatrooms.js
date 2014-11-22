Meteor.methods({

  chatroomCreate: function(params){
    var userId = Meteor.userId(),
        chatroom = {},
        chatroomId;

    if (!userId) {
      throw new Meteor.Error('logged-out', 'You need to be logged in to create a chatroom');
    }

    var userIsAllowed = User.isAdmin(userId);

    if (!userIsAllowed) {
      throw new Meteor.Error('not-allowed', 'You don\' have permissions to create a chatroom');
    }

    // Validation
    check(params, {
      name: String
    });

    // Format message
    chatroom = _.extend(params, {
      userId: userId,
      createdAt: new Date(),
      guestUsers: []
    });

    // Insert to collection
    chatroomId = Chatrooms.insert(chatroom);

    return chatroomId;
  },

  chatroomInvite: function(params) {

    check(params, {
      chatroomId: String,
      userId: String
    });

    var userExists = Meteor.users.findOne(params.userId);

    if (userExists) {
      Chatrooms.update({ _id: params.chatroomId }, {
        $addToSet: { guestUsers: params.userId }
      });
    }

  }

});

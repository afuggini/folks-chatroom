Meteor.methods({

  chatroomCreate: function(params){
    var userId = Meteor.userId(),
        chatroom = {},
        chatroomId;

    if (!userId) {
      throw new Meteor.Error('logged-out', 'You need to be logged in to create a chatroom');
    }

    // TODO: Check permissions

    // Validation
    check(params, {
      name: String
    });

    // Format message
    chatroom = _.extend(params, {
      createdAt: new Date()
    });

    // Insert to collection
    chatroomId = Chatrooms.insert(chatroom);

    return chatroomId;
  }

});

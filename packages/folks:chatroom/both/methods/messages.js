Meteor.methods({

  messageCreate: function(params){
    var userId = Meteor.userId(),
        message = {},
        messageId;

    if (!userId) {
      throw new Meteor.Error('logged-out', 'You need to be logged in to chat');
    }

    // TODO: Check permissions

    // Validation
    check(params, {
      content: String,
      chatroomId: String
    });

    // Format message
    message = {
      userId: userId,
      chatroomId: params.chatroomId,
      content: params.content.trim(),
      createdAt: new Date()
    };

    if (Meteor.isClient) {
			var user = Meteor.users.findOne({ _id: message.userId });
			if (user) {
				message.username = (user.username || user.emails[0].address);
			}
    };

    // Insert to collection
    messageId = Messages.insert(message);

    return messageId;
  }

});

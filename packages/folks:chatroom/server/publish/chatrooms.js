Meteor.publish('chatrooms', function() {

	var sub = this,
			handle;

	var cursor = Chatrooms.find();

	handle = cursor.observeChanges({

		added: function(id, chatroom) {
			sub.added('chatrooms', id, chatroom);
			return;
		},
		changed: function(id, fields) {
      sub.changed('chatrooms', id, fields);
      return;
    },
    removed: function(id) {
      sub.removed('chatrooms', id);
      return;
    }

	});

	sub.ready();

  sub.onStop = function() {
    handle.stop();
    return;
  }

	return;

});

Meteor.publish('chatroom_single', function(id) {

	var sub = this,
			handle = null;
      // messagesHandle = [];

  // Validate params
  // TODO: Improve validation
  check(id, String);

  // function publishMessages(chatroomId) {
  //   var messagesCursor = Messages.find({chatroomId: chatroomId});
  //   messagesHandle[chatroomId] = Mongo.Collection._publishCursor(messagesCursor, sub, 'messages');
  // }

	var cursor = Chatrooms.find({_id: id}, {
    sort: { createdAt: 1 }
  });

	handle = cursor.observeChanges({

		added: function(id, chatroom) {
      // publishMessages(id);
			sub.added('chatrooms', id, chatroom);
			return;
		},
		changed: function(id, fields) {
      sub.changed('chatrooms', id, fields);
      return;
    },
    removed: function(id) {
      sub.removed('chatrooms', id);
      return;
    }

	});

	sub.ready();

  sub.onStop = function() {
    handle.stop();
    return;
  }

	return;

});

Meteor.publish('messages', function(chatroomId) {

	var	sub = this,
			handle = null;

	var cursor = Messages.find({
		chatroomId: chatroomId
	}, {
		sort: { createdAt: 1 }
	});

	handle = cursor.observeChanges({

		added: function(id, message) {
			var user = Meteor.users.findOne({ _id: message.userId });
			if (user) {
				message.username = (user.username || user.emails[0].address);
			}
			sub.added('messages', id, message);
			return;
		},
		changed: function(id, fields) {
      sub.changed('messages', id, fields);
      return;
    },
    removed: function(id) {
      sub.removed('messages', id);
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

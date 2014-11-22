Meteor.publish('chatrooms', function() {

  var sub = this,
      handle,
      userId = this.userId;

  if (!userId) {
    throw new Meteor.Error('logged-out', 'Permission denied');
  }

  // Select any chatroom user owns or is invited to
  var cursor = Chatrooms.find({$or: [
    { userId: userId },
    { guestUsers: { $in: [userId] } }
  ]});

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
      handle = null,
      userId = this.userId;

  // Validate params
  check(id, String);

  if (!userId) {
    throw new Meteor.Error('logged-out', 'Permission denied');
  }

  // Publish only if is creator or guest
  var cursor = Chatrooms.find({
    $and: [
      { _id: id },
      { $or: [
        { userId: userId },
        { guestUsers: { $in: [userId] } }
      ] }
    ]
  });

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

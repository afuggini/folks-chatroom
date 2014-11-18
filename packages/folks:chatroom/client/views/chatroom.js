Template.Chatroom.helpers({

  messages: function() {
    return Messages.find();
  },
  time: function(){
    // var time = this.createdAt.toTimeString();
    var format = "hh:mm a";
    var time = moment(this.createdAt).format(format);
    return time;
  },
  username: function() {
    return this.username;
  },
  msgClasses: function() {
    var classes = "message";
    if (Meteor.userId() === this.userId) {
      classes += " own";
    };
    return classes;
  }

});

Template.Chatroom.events({

  'keyup #chat_message': function(e, t) {
    var message = e.currentTarget.value;

    if (e.keyCode === 13 && message.length) {
      Message.create({
        content: message,
        chatroomId: this._id
      });
      e.currentTarget.value = '';
    }
  }

});

Template.Chatroom.helpers({

	messages: function() {
		return Messages.find();
	},
	time: function(){
		var time = this.createdAt.toTimeString();
		return time;
	},
	username: function() {
		return this.username;
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

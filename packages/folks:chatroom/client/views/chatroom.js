Template.Chatroom.helpers({

	messages: function() {
		return Messages.find();
	},
	username: function() {
		return (this.username || 'Annonymous');
	}

});

Template.Chatroom.events({

	'keyup #chat_message': function(e, t) {
		if (e.keyCode === 13 && e.currentTarget.value.length) {

			var username = 'Annonymous',
					user = Meteor.users.findOne(Meteor.userId()),
					newMsg;

			if (Meteor.userId()) {
				username = user.username || user.emails[0].address
			}

			newMsg = {
				userId: Meteor.userId(),
				content: e.currentTarget.value.trim(),
				username: username
			};

			Messages.insert(newMsg);

			e.currentTarget.value = '';
		}
	}

});

Template.ChatroomsList.helpers({

	chatrooms: function() {
		return Chatrooms.find({},{
			sort: { createdAt: 1 }
		});
	}

});

Template.ChatroomsList.events({

	'keyup #chatroom_create': function(e, t) {
		var chatroomName = e.currentTarget.value;

		if (e.keyCode === 13 && chatroomName.length) {
			Chatroom.create({
				name: chatroomName
			});
			e.currentTarget.value = '';
		}
	}

});

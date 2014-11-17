if (Meteor.isClient) {
	Meteor.subscribe('messages', function() {
		
	});
}

if (Meteor.isServer) {

}

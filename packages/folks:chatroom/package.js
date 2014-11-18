Package.describe({
  name: 'folks:chatroom',
  summary: 'Chatroom Package',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "accounts-base",
    "mongo",
    "minimongo",
    "underscore",
    "mrt:moment",
    "check",
    "templating",
    "less",
    "reactive-var"
  ]);

  api.imply([]);

  // Common
  api.addFiles([
    'both/collections/chatrooms.js',
    'both/collections/messages.js',
    'both/methods/chatrooms.js',
    'both/methods/messages.js'
  ], ['client', 'server']);

  // Client
  api.addFiles([
    'client/views/chatroom.html',
    'client/views/chatroom.js',
    'client/views/chatroom.less',
    'client/views/chatrooms_list.html',
    'client/views/chatrooms_list.js'
  ], ['client']);

  // Server
  api.addFiles([
    'server/publish/chatrooms.js',
    'server/publish/messages.js'
  ], ['server']);

  // Export
  api.export([
    "Chatrooms",
    "Chatroom",
    "Messages",
    "Message"
  ], ['client', 'server']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('folks:chatroom');
  api.addFiles('tests/chatroom-tests.js');
});

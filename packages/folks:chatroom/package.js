Package.describe({
  name: 'folks:chatroom',
  summary: 'Chatroom Package',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "mongo",
    "minimongo",
    "underscore",
    "check",
    "templating",
    "reactive-var"
  ]);

  api.imply([
    "mongo",
    "minimongo",
    "underscore",
    "check",
    "templating"
  ]);

  // Common
  api.addFiles([
    'both/collections/chatrooms.js',
    'both/collections/messages.js',
  ], ['client', 'server']);

  // Client
  api.addFiles([
    'client/views/chatroom.html',
    'client/views/chatroom.js',
    'client/views/chatroom.less'
  ], ['client']);

  // Server
  api.addFiles([
    'server/publish/messages.js'
  ], ['server']);

  // Export
  api.export([
    "Chatrooms",
    "Messages"
  ], ['client', 'server']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('folks:chatroom');
  api.addFiles('tests/chatroom-tests.js');
});

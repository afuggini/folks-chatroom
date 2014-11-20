Package.describe({
  name: 'folks:user',
  summary: 'User package',
  version: '0.0.0',
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "templating",
    "accounts-base",
    "iron:router",
    "underscore",
    "alanning:roles",
  ], ["client", "server"]);

  api.imply([
    "templating",
    "iron:router",
    "underscore",
    "alanning:roles@1.2.12",
  ], ["client", "server"]);

  // Client
  api.addFiles([
    "helpers.js",
  ], ["client"]);

  // Lib
  api.addFiles([
    'user.js',
    'role.js',
  ], ["client", "server"]);

  // Server
  api.addFiles([
    "user.server.js",
    "role.server.js",
    "publications.js",
  ], ["server"]);

  // Export
  api.export(['User', 'Users'])
});
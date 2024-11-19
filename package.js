Package.describe({
  name: 'plahteenlahti:files',
  version: '3.0.0-beta.1',
  summary: 'Upload files to a server or 3rd party storage: AWS:S3, GridFS, DropBox, and other',
  git: 'https://github.com/veliovgroup/Meteor-Files',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.9');
  api.use('webapp', 'server');
  api.use(['reactive-var', 'tracker', 'ddp-client'], 'client');
  api.use(['mongo', 'check', 'random', 'ecmascript', 'fetch', 'ostrio:cookies@2.7.2'], ['client', 'server']);
  api.addAssets('worker.min.js', 'client');
  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
  api.export('FilesCollection');
});

Package.onTest((api) => {
  api.use('tinytest');
  api.use(['ecmascript', 'plahteenlahti:files'], ['client', 'server']);
  api.addFiles('tests/helpers.js', ['client', 'server']);
});

Npm.depends({
  eventemitter3: '4.0.7',
  'abort-controller': '3.0.0'
});

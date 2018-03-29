const path = require('path');

const daemon = require('daemonize2').setup({
  main: path.join(__dirname, 'index.js'),
  name: 'chatmaterialui server',
  pidfile: '/tmp/chatmaterialui.server.pid'
});

switch (process.argv[2]) {
  case 'start':
    daemon.start();
    break;

  case 'stop':
    daemon.stop();
    break;

  default:
    console.log('Usage: [start|stop]');
}

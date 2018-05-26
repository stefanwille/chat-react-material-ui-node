# chat-react-material-ui-node

A chat based on

* React.js / Redux
* Material-UI
* Final Form
* Socket.io / Websockets
* Express
* Node.js
* Auth0
* letsencrypt

Demo: https://chatdemo.stefanwille.com

## Running tests

I got this error on my Mac:

`(FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)`

The fix was:

$ brew install watchman

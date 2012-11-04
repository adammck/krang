var connect = require("connect"),
    sharejs = require("share").server;

var server = connect(
  connect.static(__dirname + "/node_modules/marked/lib"),
  connect.static(__dirname + "/static")
);

var options = { db: { type: "redis" } };
sharejs.attach(server, options);

server.listen(8000);

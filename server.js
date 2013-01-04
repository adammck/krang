var sharejs = require("share").server,
    express = require("express"),
    app = express();

app.use(express.logger());
app.use(express.static(__dirname + "/node_modules/marked/lib"));
app.use(express.static(__dirname + "/public"));

app.get("/:page?", function(req, res) {
  var page = req.params.page || "index";
  res.render("index.hjs", { page: page });
});

sharejs.attach(app, {
  db: { type: "redis" }
});

app.listen(3000);

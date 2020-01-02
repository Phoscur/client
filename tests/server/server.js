
const expressBodyParser = require("body-parser");

const packageInfo = require("./package.json");
// JSON Server mock
const { server, router, middlewares, rules } = require("./mock-json-server");

server.set("svcInfo", packageInfo);
server.set("port", process.env.API_PORT || 3200);

server.use(expressBodyParser.urlencoded({ limit: "10mb", extended: true }));
server.use(expressBodyParser.json({ limit: "10mb" }));

server.use(middlewares);
server.use(rules);

server.get("/test/users/test", (req, res) => res.json({ email: "test@test.com", username: "test" }));

// test route that always returns the request body with 200
server.post("/reflect200", (req, res) => res.jsonp(req.body));

server.get("/info", (req, res) => {
  res.json({ name: server.get("svcInfo").name, version: server.get("svcInfo").version });
});

server.use(router);

// Start server
server.listen(server.get("port"), function() {
  console.log("Service name: " + server.get("svcInfo").name + ", version: " + server.get("svcInfo").version);
  console.log("Service url: http://localhost:" + server.get("port"));
});


process.on("SIGTERM", function() {
  console.log("SIGTERM: Exiting ...");
  process.exit(0)
});

process.on("SIGINT", function() {
  process.exit(-1)
});

process.on("uncaughtException", function(err) {
  process.exit(-1);
});

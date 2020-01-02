
const { join, dirname } = require("path");

//const static = join(dirname(require.resolve("@ph/ui/package.json")), "dist");
//console.log("Resolved path to UI dist:" + static);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
  static: "./dist",
});
const rules = jsonServer.rewriter({
  "/v1/*": "/$1",
});

module.exports = {
  server,
  router,
  middlewares,
  rules,
};

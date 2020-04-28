const Koa = require("koa");

module.exports = (server) => {
  const app = new Koa();
  app.proxy = true;
  app.use(async (ctx) => {
    const oReq = ctx.req.originalReq;
    const host = oReq.headers["x-real-host"]
    if (host) {
      ctx.body = `* reqHeaders://(host=${host})`;
    }
  });
  server.on("request", app.callback());
};

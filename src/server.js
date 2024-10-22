const Hapi = require('@hapi/hapi');
// const { log } = require("console");
const route = require('./route');

const main = async () => {
  const server = Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(route);
  await server.start();
  console.log(`server berjalan di ${server.info.uri}`);
};
main();

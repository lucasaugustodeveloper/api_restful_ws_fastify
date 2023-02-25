require('dotenv').config();

const fastify = require('fastify')({ logger: true });
const routes = require('./http/routes');

routes(fastify);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

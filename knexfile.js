const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'example',
      password: 'example',
      database: 'api_restful',
    },
    searchPath: ['knex', 'public'],
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'knex/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'knex/seeds'),
    },
  },
};

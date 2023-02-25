exports.up = (knex) => {
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email', 40);
    table.string('password', 64);
    table.timestamps();
  }).then();
};

exports.down = (knex) => {
  knex.schema.dropTable('users');
};

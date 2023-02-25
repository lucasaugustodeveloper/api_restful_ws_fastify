/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  knex.schema.createTable('categories', (table) => {
    table.increments();
    table.string('name', 20);
    table.timestamps();
  }).then();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.dropTable('categories');
};

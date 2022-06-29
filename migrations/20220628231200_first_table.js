/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return  knex.schema.createTable('members', (table)=>{
    table.increments('id');
    table.string('first_name',128);
    table.string('last_name',128);
    table.string('username',256);
    table.string('password',256);

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('members');
};

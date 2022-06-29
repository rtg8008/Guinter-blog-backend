/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('members', (table)=>{
    table.increments('id');
    table.string('first_name',128);
    table.string('title',128);
    table.string('content',256);
    table.integer('user_id');
    table.foreign('user_id').references('members.id')

  })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('members', (table) => {
    table.dropForeign('user_id');
  }).then(()=>{
    knex.schema.dropTableIfExists('first_table');
  })
};

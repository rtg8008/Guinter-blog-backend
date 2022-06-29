/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
  return knex.schema.createTable('posts', (table)=>{
    table.increments('id');
    table.string('title',128);
    table.string('content',256);
    table.string('date', 128);
    table.integer('user_id');
    table.foreign('user_id').references('members.id')

  })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('posts', (table) => {
    table.dropForeign('user_id');
  })
  .then(()=>{
    return knex.schema.dropTableIfExists('posts');
  })
};

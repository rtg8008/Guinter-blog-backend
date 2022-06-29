/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('first_table').del()
  await knex('first_table').insert([
    {first_name: 'ryan', last_name: 'guinter', username: 'rtg', password: 'password'},
    {first_name: 'naruto', last_name: 'uzimaki', username: 'ramen', password: 'ramen'},
    {first_name: 'monkey', last_name: 'luffy', username: 'food', password: 'food'},
  ]);
};

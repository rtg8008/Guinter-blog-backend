/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {title: 'need food', content: 'need food now', user_id: 2},
    {title: 'need more food', content: 'need more food now', user_id: 3},

  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('first_table').del()
  await knex('first_table').insert([
    {name: 'ryan'},
    {name: 'albert'},
    {name: 'george'},
    {name: 'zach'},
    {name: 'mike'},
    {name: 'fred'},
    {name: 'thomas'},
    {name: 'john'},
    {name: 'phil'},

  ]);
};

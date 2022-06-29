const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const cors = require('cors');

require('dotenv').config()
console.log(process.env)
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());

app.get('/members', async (req, res) => {
  
  let result = await knex('members').select('*')
  res.status(200).json(result)

})
app.get('/posts', async (req, res) => {
  
  let result = await knex('posts').select('*')
  res.status(200).json(result)
})
app.get('/posts/:id', async (req, res) => {
  
  let result = await knex('posts').select('*').where({user_id: req.params.id})
  res.status(200).json(result)
})
app.post('/posts', async (req, res) => {
  let temp = await knex('posts').insert(req.body);
  let result = await knex('posts').select('*').where({user_id: req.body.user_id})
  res.status(201).json(result)
})

app.post('/members', async (req, res) => {
  console.log(req.body);
  // {first_name: 'ryan', last_name: 'guinter', username: 'rtg', password: 'password'},
  let temp = await knex('members').insert(req.body);

  let result = await knex('members').select('*')
  res.status(200).json(result)
})
app.listen(port, () => console.log(`listening on port ${port}`))
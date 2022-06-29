const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
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

app.listen(port, () => console.log(`listening on port ${port}`))
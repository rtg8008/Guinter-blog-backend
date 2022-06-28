const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

require('dotenv').config()
console.log(process.env)
app.use(express.json());

app.get('/', async (req, res) => {
  
  let result = await knex('first_table').select('*')
  res.status(200).json(result)

})

app.listen(port, () => console.log(`listening on port ${port}`))
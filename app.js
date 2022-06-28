const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('something')
})

app.listen(port, () => console.log(`listening on port ${port}`))
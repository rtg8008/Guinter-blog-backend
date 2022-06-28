const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('something')
})

app.listen(port, () => console.log(`listening on port ${port}`))
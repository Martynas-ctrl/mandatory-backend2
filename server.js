const express = require('express');
const app = express();
const parseBody = require('body-parser');
const todos = require('./client/src/components/todos');
const cors = require('cors');

app.use(express.static('client'));
app.use( cors({ origin:'http://localhost:3000' }));
app.use(parseBody.json());
app.use('/api', todos);

app.get('/', (req, res) => {
  res.send('Welcome');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
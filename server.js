const express = require('express');

const app = express();

// GET request at root
app.get('/', (req, res) => {
  res.send('GET Working');
});

// POST request at root
app.post('/', (req, res) => {
  res.send('POST Working');
});

// PUT request at users
app.put('/users', (req, res) => {
  res.send('PUT Working. Add a user at /users');
});

// DELETE request at users
app.delete('/users', (req, res) => {
  res.send('DELETE Working. Deleted user at /users');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`))
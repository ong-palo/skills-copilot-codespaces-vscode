// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a route for the comments path
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});
// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Run the server with node comments.js
// Visit http://localhost:3000/comments in your browser to see the response

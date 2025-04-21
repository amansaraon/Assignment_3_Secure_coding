// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Sample vulnerable endpoint for testing scanners (for demonstration only)
app.get('/vulnerable', (req, res) => {
  const userInput = req.query.input;
  res.send(`You entered: ${userInput}`); // No input sanitization — triggers warnings
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

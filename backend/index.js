const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 5000;

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Bhai is listening on port ${port}`);
});
connectToMongo();

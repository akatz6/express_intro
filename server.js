const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/more", (req, res) => {
  res.send("Hello and more");
});

app.get("/status", (req, res) => {
  res.status(201).send("Hello and more");
});

app.get("/user/:id", (req, res) => {
  res.status(201).send(req.params.id);
});

app.get("/query", (req, res) => {
    res.status(201).send(req.query);
  });

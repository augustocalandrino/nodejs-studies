const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Olá Visitante!");
});

app.listen(3001);
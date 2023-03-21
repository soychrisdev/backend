const express = require('express');

const app = express();

const PORT = 3000;

app.get("/", (req, res, next) => {
    console.log("first middleware, passing to next() function");
    next();
});

app.get("/", (req, res) => {
    console.log("second middleware joining...")
    res.send("<h1>second middleware log message and sending a response to web user</h1>");
});

app.get("/users", (req, res) => {
    console.log("user webpage")
    res.send("<h1>user webpage</h1>")
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})


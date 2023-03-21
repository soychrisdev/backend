const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
    next();
});

app.get("/", (req, res) => {
    res.send("index web page")
});
app.post("/products", (req, res) => {
    console.log(req.body.title)
    res.redirect("/")
});

app.get("/add-product", (req, res) => {
    res.send('<form action="/products" method="post"><input type="text" name="title"/> <input type="submit"/></form>');
})

app.listen(PORT, () => {
    console.log("app listening on port: " + PORT)
})

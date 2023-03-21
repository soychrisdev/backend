const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routers/admin')
const shopRoutes = require('./routers/shop')
const path = require('path')
const PORT = 3000;
const app = express();

// TODO:  USING ROUTER, FILTER AND HANDLING ERRORS.

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'views', '404.html'))
});

// app.get("/", (req, res, next) => {
//     next();
// });





app.listen(PORT, () => {
    console.log("app listening on port: " + PORT)
})

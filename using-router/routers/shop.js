const expres = require('express')
const path = require('path')

const rootDir = require('../util/path')
const router = expres.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;
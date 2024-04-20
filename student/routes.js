const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get("/", controller.getStudents);

router.get('/', (req, res) =>{
    res.send("using api route");
});

module.exports = router;


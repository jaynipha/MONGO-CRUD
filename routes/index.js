const express = require('express');
const router = express.Router()
const coursesRoute = require('./courses')


router.use('/course', coursesRoute)

module.exports = router;
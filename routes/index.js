const { Router } = require('express');
const  postMessageHandler  = require ('../handlers/postMessageHandler');
const start = require ('../handlers/start')


const router = Router()
router.get('/', start)
router.post('/', postMessageHandler)

module.exports = router;
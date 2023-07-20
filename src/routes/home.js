const express = require('express');
const router = express.Router();

const HomeControllers = require('../controllers/HomeControllers');

router.get('/search', HomeControllers.search);
router.post('/add', HomeControllers.add);
router.put('/update', HomeControllers.update);
router.post('/delete', HomeControllers.delete);
router.get('/', HomeControllers.show);

module.exports = router;

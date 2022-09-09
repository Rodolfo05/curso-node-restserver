
const {Router} = require('express');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require('../controllers/user.controller');

const router = Router();


router.get('/', getUsuarios);

router.post('/:id', postUsuarios);

router.put('/:id', putUsuarios);

router.delete('/', deleteUsuarios);




module.exports = router;
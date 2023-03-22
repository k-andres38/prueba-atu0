

const {Router}= require('express');

const router=Router();


const userController= require('../controllers/users/userController')

router.post('/createUser',userController.createUser)
router.get('/deleteUser/:id',userController.deleteUser)
router.put('/updateUser/:id',userController.updateUser)


module.exports = router;
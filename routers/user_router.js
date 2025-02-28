


const router = require('express').Router()
const { user_reg, user_login } = require('../controllers/user_controller')

router.route('/register').post(user_reg)
router.route('/login').post(user_login)

module.exports = router
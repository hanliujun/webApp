const appMainViewController = require('../controllers/app-main-controller')
const appCinameViewController = require('../controllers/app-ciname-controller')

let routes = {
    "/index": appMainViewController.render,
    '/cinema': appCinameViewController.render
}


module.exports = routes
// const appMainViewController = require('./app-main-controller')

const render = ()=>{
    let appHeaderView = require('../view/header.html')
    // let appMainView = require('../view/main.html')
    let appFooterView = require('../view/footer.html')
    console.log(appFooterView)
    $('#app #header').append(appHeaderView)
        // .append(appMainView)
    $('#app #footer').append(appFooterView)
    // appMainViewController.render();
}

module.exports = {render}
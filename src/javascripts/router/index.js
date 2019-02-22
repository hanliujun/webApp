const routes = require('./routes')

class Router {
    constructor () {
        this.routes = routes
    }
    init () {
        console.log(this.routes)
        this.listenHashChange();
    }
    listenHashChange () {
        let loadPage = this.loadPage.bind(this)
        window.addEventListener('hashchange', this.loadPage)
    }
    loadPage () {
        // console.log(window.location.hash)
        let path = window.location.hash.replace('#','');
        let handler = routes[path]
        if (handler) {
            console.log('xiangtong')
            handler()
        }
    }
}


module.exports = Router
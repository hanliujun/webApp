const renderView = require('./controllers/app-controller')
const Router = require('./router')

renderView.render()

new Router({
    initial: '#/index'
}).init()
// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('123')
//     },2000)
// })

// let a = async () => {
//     let hh = await promise.then((data) => {
//        return data
//     })
//     console.log(hh)
// }
// a()

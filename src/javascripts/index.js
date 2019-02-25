
// const appController = require('./controllers/app-controller')

// appController.render()



// 老师
const renderView = require('./controllers/app-controller')
const Router = require('./router')

renderView.render()

new Router().init()
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

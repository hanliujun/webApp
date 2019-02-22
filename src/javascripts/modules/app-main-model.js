const api = require('../api')

const getFilemList = ()=>{
    return  api.request({url: '/ajax/movieOnInfoList?token='})
}


// return new Promise((resolve, reject) => {
//     api.request({
//         url: '/ajax/movieOnInfoList?token=',
//         success: (data)=>{
//             resolve(data)
//         }
//     })
// })


module.exports = {getFilemList}
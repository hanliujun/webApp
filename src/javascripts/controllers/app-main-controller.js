const {getFilemList} = require('../modules/app-main-model')
// const template = require('art-template')
const render = async () => {
    let appMainView = require('../view/main.html')

    let fillemList = await getFilemList()
    // console.log(getFilemList())
    fillemList.movieList.forEach(element => {
        element.img = element.img.replace('w.h', '128.180')
    });
    $('#app #main').html(template.compile(appMainView)({data: fillemList.movieList}))
}

module.exports = { render }


  // getFilemList((data)=>{
    //     // data.movieList[0].imgsrc = data.movieList[0].img.replace('w.h', '128.180')
    //     data.movieList.forEach(element => {
    //         element.img = element.img.replace('w.h', '128.180')
    //     });
    //     console.log(data)
    //     let rander = template.compile(appMainView);
    //     $('#app #main').html(rander({
    //         data: data.movieList 
    //     }))
    // })
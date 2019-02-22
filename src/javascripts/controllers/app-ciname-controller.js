const render = () => {
    let appcinameView = require('../view/ciname.html')

    // let fillemList = await getFilemList()
    // // console.log(getFilemList())
    // fillemList.movieList.forEach(element => {
    //     element.img = element.img.replace('w.h', '128.180')
    // });
    $('#app #main').html(appcinameView)
}


module.exports = {render}
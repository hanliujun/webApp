/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const api = {\n    request({\n        url, data, methods\n    }){\n        return  $.ajax({\n            url: '/api'+url,\n            data: data || '',\n            methods: methods || 'get',\n            success: (res) =>{\n                return res\n            },\n            error: () =>{\n                return '请求错误'\n            }\n        })\n    }\n}\n\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-ciname-controller.js":
/*!**************************************************************!*\
  !*** ./src/javascripts/controllers/app-ciname-controller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const render = () => {\n    let appcinameView = __webpack_require__(/*! ../view/ciname.html */ \"./src/javascripts/view/ciname.html\")\n\n    // let fillemList = await getFilemList()\n    // // console.log(getFilemList())\n    // fillemList.movieList.forEach(element => {\n    //     element.img = element.img.replace('w.h', '128.180')\n    // });\n    $('#app #main').html(appcinameView)\n}\n\n\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-ciname-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const appMainViewController = require('./app-main-controller')\n\nconst render = ()=>{\n    let appHeaderView = __webpack_require__(/*! ../view/header.html */ \"./src/javascripts/view/header.html\")\n    // let appMainView = require('../view/main.html')\n    let appFooterView = __webpack_require__(/*! ../view/footer.html */ \"./src/javascripts/view/footer.html\")\n    console.log(appFooterView)\n    $('#app #header').append(appHeaderView)\n        // .append(appMainView)\n    $('#app #footer').append(appFooterView)\n    // appMainViewController.render();\n}\n\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-main-controller.js":
/*!************************************************************!*\
  !*** ./src/javascripts/controllers/app-main-controller.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {getFilemList} = __webpack_require__(/*! ../modules/app-main-model */ \"./src/javascripts/modules/app-main-model.js\")\n// const template = require('art-template')\nconst render = async () => {\n    let appMainView = __webpack_require__(/*! ../view/main.html */ \"./src/javascripts/view/main.html\")\n\n    let fillemList = await getFilemList()\n    // console.log(getFilemList())\n    fillemList.movieList.forEach(element => {\n        element.img = element.img.replace('w.h', '128.180')\n    });\n    $('#app #main').html(template.compile(appMainView)({data: fillemList.movieList}))\n}\n\nmodule.exports = { render }\n\n\n  // getFilemList((data)=>{\n    //     // data.movieList[0].imgsrc = data.movieList[0].img.replace('w.h', '128.180')\n    //     data.movieList.forEach(element => {\n    //         element.img = element.img.replace('w.h', '128.180')\n    //     });\n    //     console.log(data)\n    //     let rander = template.compile(appMainView);\n    //     $('#app #main').html(rander({\n    //         data: data.movieList \n    //     }))\n    // })\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const renderView = __webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\")\nconst Router = __webpack_require__(/*! ./router */ \"./src/javascripts/router/index.js\")\n\nrenderView.render()\n\nnew Router({\n    initial: '#/index'\n}).init()\n// let promise = new Promise((resolve, reject) => {\n//     setTimeout(()=>{\n//         resolve('123')\n//     },2000)\n// })\n\n// let a = async () => {\n//     let hh = await promise.then((data) => {\n//        return data\n//     })\n//     console.log(hh)\n// }\n// a()\n\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/modules/app-main-model.js":
/*!***************************************************!*\
  !*** ./src/javascripts/modules/app-main-model.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\")\n\nconst getFilemList = ()=>{\n    return  api.request({url: '/ajax/movieOnInfoList?token='})\n}\n\n\n// return new Promise((resolve, reject) => {\n//     api.request({\n//         url: '/ajax/movieOnInfoList?token=',\n//         success: (data)=>{\n//             resolve(data)\n//         }\n//     })\n// })\n\n\nmodule.exports = {getFilemList}\n\n//# sourceURL=webpack:///./src/javascripts/modules/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/router/index.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const routes = __webpack_require__(/*! ./routes */ \"./src/javascripts/router/routes.js\")\n\nclass Router {\n    constructor ({initial}) {\n        this.routes = routes //路由表\n        this.initial = initial //默认路由\n    }\n    init () {\n        this.initialAction()\n        this.listenHashChange()\n        // console.log(this)\n    }\n\n\n    handlerNavLink (path) { // 当路由跳转匹配成功后给a标签加上active类名   \n        $('.nav-link').removeClass('active')\n        $('.nav-link').each((i, item) => {\n            if ( $(item).data('path') === path ) $(item).addClass('active')\n        })\n    }\n    refreshRouter (path) { // 路由跳转动作\n        this.routes[path]()\n        this.handlerNavLink(path)\n    }\n    initialAction () { // 初始时判断有无hash等动作\n        let path = location.hash.replace('#', '')\n        if ( !path ) { // 当前没有hash值\n            location.hash = this.initial\n        } else {\n            this.refreshRouter(path)      \n        }\n    }\n    listenHashChange () { // 监听hash值变化后执行对应操作\n        window.addEventListener('hashchange', () => {\n            let path = location.hash.replace('#', '')\n            let handler = this.routes[path]\n            if ( handler ) {\n                this.refreshRouter(path) \n            } else {\n                // 如果路由表中没有这个路由，跳转到默认路由\n                // location.hash = '/404'\n                location.hash = this.initial\n            }\n        })\n    }\n}\n\n\nmodule.exports = Router\n\n//# sourceURL=webpack:///./src/javascripts/router/index.js?");

/***/ }),

/***/ "./src/javascripts/router/routes.js":
/*!******************************************!*\
  !*** ./src/javascripts/router/routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appMainViewController = __webpack_require__(/*! ../controllers/app-main-controller */ \"./src/javascripts/controllers/app-main-controller.js\")\nconst appCinameViewController = __webpack_require__(/*! ../controllers/app-ciname-controller */ \"./src/javascripts/controllers/app-ciname-controller.js\")\n\nlet routes = {\n    \"/index\": appMainViewController.render,\n    '/cinema': appCinameViewController.render\n}\n\n\nmodule.exports = routes\n\n//# sourceURL=webpack:///./src/javascripts/router/routes.js?");

/***/ }),

/***/ "./src/javascripts/view/ciname.html":
/*!******************************************!*\
  !*** ./src/javascripts/view/ciname.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    这是电影院kkkkkkk </div>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/ciname.html?");

/***/ }),

/***/ "./src/javascripts/view/footer.html":
/*!******************************************!*\
  !*** ./src/javascripts/view/footer.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer id=\\\"app-footer\\\">    <nav>        <a href=\\\"#/index\\\" data-path=\\\"/index\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>        <a href=\\\"#/cinema\\\" data-path=\\\"/cinema\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>        <a href=\\\"#/user\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>        <a href=\\\"#/user\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>    </nav></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/footer.html?");

/***/ }),

/***/ "./src/javascripts/view/header.html":
/*!******************************************!*\
  !*** ./src/javascripts/view/header.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">    猫眼电影</header>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/header.html?");

/***/ }),

/***/ "./src/javascripts/view/main.html":
/*!****************************************!*\
  !*** ./src/javascripts/view/main.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-container\\\">            <!-- 内容区域顶部的控制 start -->    <div class=\\\"film-controls\\\">        <div class=\\\"film-controls__city\\\">北京</div>        <div class=\\\"film-controls__types\\\">            <div class=\\\"film-controls__type-item active\\\">正在热映</div>            <div class=\\\"film-controls__type-item\\\">即将上映</div>        </div>        <div class=\\\"film-controls__search\\\"><i class=\\\"icon icon-wode-copy\\\"></i></div>    </div>    <!-- 内容区域顶部的控制 end -->    <!-- 内容影片列表 start -->    <div class=\\\"film-list\\\">        {{each data}}        <div class=\\\"film-list__item\\\">            <div class=\\\"film-list__item-img\\\">                <img width=\\\"100%\\\" height=\\\"100%\\\" src={{$value.img}} alt=\\\"\\\">            </div>            <div class=\\\"film-list__item-info\\\">                <div class=\\\"film-list__item-title\\\">                    <h1>{{$value.nm}}</h1>                    <span class=\\\"film-list__item-desc-img max\\\"></span>                </div>                <!-- <div class=\\\"film-list_item-grade\\\">观众评</div> -->                <!-- <div class=\\\"film-list_item-actor\\\">主演： 吴京，屈原，的地方的，的仿</div> -->            </div>            <div class=\\\"film-list__item-btn\\\">               <button class=\\\"film-list__btn film-list__btn--buy active\\\">购票</button>                <button class=\\\"film-list__btn film-list__btn--pre\\\">预售</button>             </div>        </div>        {{/each}}    </div>    <!-- 内容影片列表 end --></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/main.html?");

/***/ })

/******/ });
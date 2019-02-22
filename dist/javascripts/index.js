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

eval("const api = {\r\n    request({\r\n        url, data, methods\r\n    }){\r\n        return  $.ajax({\r\n            url: '/api'+url,\r\n            data: data || '',\r\n            methods: methods || 'get',\r\n            success: (res) =>{\r\n                return res\r\n            },\r\n            error: () =>{\r\n                return '请求错误'\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-ciname-controller.js":
/*!**************************************************************!*\
  !*** ./src/javascripts/controllers/app-ciname-controller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const render = () => {\r\n    let appcinameView = __webpack_require__(/*! ../view/ciname.html */ \"./src/javascripts/view/ciname.html\")\r\n\r\n    // let fillemList = await getFilemList()\r\n    // // console.log(getFilemList())\r\n    // fillemList.movieList.forEach(element => {\r\n    //     element.img = element.img.replace('w.h', '128.180')\r\n    // });\r\n    $('#app #main').html(appcinameView)\r\n}\r\n\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-ciname-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const appMainViewController = require('./app-main-controller')\r\n\r\nconst render = ()=>{\r\n    let appHeaderView = __webpack_require__(/*! ../view/header.html */ \"./src/javascripts/view/header.html\")\r\n    // let appMainView = require('../view/main.html')\r\n    let appFooterView = __webpack_require__(/*! ../view/footer.html */ \"./src/javascripts/view/footer.html\")\r\n    console.log(appFooterView)\r\n    $('#app #header').append(appHeaderView)\r\n        // .append(appMainView)\r\n    $('#app #footer').append(appFooterView)\r\n    // appMainViewController.render();\r\n}\r\n\r\nmodule.exports = {render}\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-main-controller.js":
/*!************************************************************!*\
  !*** ./src/javascripts/controllers/app-main-controller.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {getFilemList} = __webpack_require__(/*! ../modules/app-main-model */ \"./src/javascripts/modules/app-main-model.js\")\r\n// const template = require('art-template')\r\nconst render = async () => {\r\n    let appMainView = __webpack_require__(/*! ../view/main.html */ \"./src/javascripts/view/main.html\")\r\n\r\n    let fillemList = await getFilemList()\r\n    // console.log(getFilemList())\r\n    fillemList.movieList.forEach(element => {\r\n        element.img = element.img.replace('w.h', '128.180')\r\n    });\r\n    $('#app #main').html(template.compile(appMainView)({data: fillemList.movieList}))\r\n}\r\n\r\nmodule.exports = { render }\r\n\r\n\r\n  // getFilemList((data)=>{\r\n    //     // data.movieList[0].imgsrc = data.movieList[0].img.replace('w.h', '128.180')\r\n    //     data.movieList.forEach(element => {\r\n    //         element.img = element.img.replace('w.h', '128.180')\r\n    //     });\r\n    //     console.log(data)\r\n    //     let rander = template.compile(appMainView);\r\n    //     $('#app #main').html(rander({\r\n    //         data: data.movieList \r\n    //     }))\r\n    // })\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const renderView = __webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\")\r\nconst Router = __webpack_require__(/*! ./router */ \"./src/javascripts/router/index.js\")\r\n\r\nrenderView.render()\r\n\r\nnew Router().init()\r\n// let promise = new Promise((resolve, reject) => {\r\n//     setTimeout(()=>{\r\n//         resolve('123')\r\n//     },2000)\r\n// })\r\n\r\n// let a = async () => {\r\n//     let hh = await promise.then((data) => {\r\n//        return data\r\n//     })\r\n//     console.log(hh)\r\n// }\r\n// a()\r\n\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/modules/app-main-model.js":
/*!***************************************************!*\
  !*** ./src/javascripts/modules/app-main-model.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\")\r\n\r\nconst getFilemList = ()=>{\r\n    return  api.request({url: '/ajax/movieOnInfoList?token='})\r\n}\r\n\r\n\r\n// return new Promise((resolve, reject) => {\r\n//     api.request({\r\n//         url: '/ajax/movieOnInfoList?token=',\r\n//         success: (data)=>{\r\n//             resolve(data)\r\n//         }\r\n//     })\r\n// })\r\n\r\n\r\nmodule.exports = {getFilemList}\n\n//# sourceURL=webpack:///./src/javascripts/modules/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/router/index.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const routes = __webpack_require__(/*! ./routes */ \"./src/javascripts/router/routes.js\")\r\n\r\nclass Router {\r\n    constructor () {\r\n        this.routes = routes\r\n    }\r\n    init () {\r\n        console.log(this.routes)\r\n        this.listenHashChange();\r\n    }\r\n    listenHashChange () {\r\n        let loadPage = this.loadPage.bind(this)\r\n        window.addEventListener('hashchange', this.loadPage)\r\n    }\r\n    loadPage () {\r\n        // console.log(window.location.hash)\r\n        let path = window.location.hash.replace('#','');\r\n        let handler = routes[path]\r\n        if (handler) {\r\n            console.log('xiangtong')\r\n            handler()\r\n        }\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = Router\n\n//# sourceURL=webpack:///./src/javascripts/router/index.js?");

/***/ }),

/***/ "./src/javascripts/router/routes.js":
/*!******************************************!*\
  !*** ./src/javascripts/router/routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appMainViewController = __webpack_require__(/*! ../controllers/app-main-controller */ \"./src/javascripts/controllers/app-main-controller.js\")\r\nconst appCinameViewController = __webpack_require__(/*! ../controllers/app-ciname-controller */ \"./src/javascripts/controllers/app-ciname-controller.js\")\r\n\r\nlet routes = {\r\n    \"/index\": appMainViewController.render,\r\n    '/cinema': appCinameViewController.render\r\n}\r\n\r\n\r\nmodule.exports = routes\n\n//# sourceURL=webpack:///./src/javascripts/router/routes.js?");

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

eval("module.exports = \"<footer id=\\\"app-footer\\\">    <nav>        <a href=\\\"#/index\\\" class=\\\"active\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>        <a href=\\\"#/cinema\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>        <a href=\\\"\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>        <a href=\\\"\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>    </nav></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/view/footer.html?");

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
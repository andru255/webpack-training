(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["menu"] = factory();
	else
		root["menu"] = factory();
})(this, function() {
return webpackJsonpmenu([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var menuSelf = __webpack_require__(1);
	menuSelf.style();
	menuSelf.view(document.body, {
	    items: [
	        {
	          "href": "/",
	          "text": "Home"
	        },
	        {
	          "href": "/about-us",
	          "text": "About us"
	        }
	    ]
	});


/***/ }
])
});
;
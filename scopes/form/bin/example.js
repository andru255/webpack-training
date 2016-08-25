(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory();
	else
		root["form"] = factory();
})(this, function() {
return webpackJsonpform([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var menuSelf = __webpack_require__(1);
	menuSelf.style();
	menuSelf.view(document.body);


/***/ }
])
});
;
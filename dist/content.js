parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EB4j":[function(require,module,exports) {
var define;
},{}],"na1T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){this.address=e}return e.prototype.setColor=function(e,t,s){console.log("setting sensehat color");var o=new XMLHttpRequest;o.open("GET","http://"+this.address+"/color?r="+e+"&g="+t+"&b="+s),o.send()},e.prototype.clear=function(){console.log("clearing sensehat");var e=new XMLHttpRequest;e.open("GET","http://"+this.address+"/clear"),e.send()},e.prototype.test=function(){console.log("running sensehat tests");var e=new XMLHttpRequest;e.open("GET","http://"+this.address+"/test"),e.send()},e}();exports.default=e;
},{}],"hNRT":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var n={};if(null!=r)for(var o in r)"default"!==o&&Object.prototype.hasOwnProperty.call(r,o)&&e(n,r,o);return t(n,r),n},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var o=r(require("ml5")),u=n(require("./sensehat")),i=new u.default("192.168.0.24");i.test();var a=document.querySelectorAll("p"),c="";a&&a.length>0&&a.forEach(function(e){c+=e.textContent});var l=o.sentiment("movieReviews",s);function s(){console.log("model ready");var e=f(c).score;e=Math.round(100*e)/100,chrome.storage.local.set({key:e},function(){return console.log("storage has been set to "+e)})}function f(e){return l.predict(e)}
},{"ml5":"EB4j","./sensehat":"na1T"}]},{},["hNRT"], null)
//# sourceMappingURL=/content.js.map
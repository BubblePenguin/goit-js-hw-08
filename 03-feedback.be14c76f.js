function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(w,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function w(){var e=g();if(h(e))return T(e);u=setTimeout(w,function(e){var n=t-(e-f);return d?m(n,i-(e-c)):n}(e))}function T(e){return u=void 0,v&&o?b(e):(o=r=void 0,a)}function S(){var e=g(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(d)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},S.flush=function(){return void 0===u?a:T(g())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};let b=localStorage.getItem("email"),j=localStorage.getItem("message");b&&(document.querySelector('.feedback-form [name="email"]').value=b),j&&(document.querySelector('.feedback-form [name="message"]').value=j),document.querySelector(".feedback-form").addEventListener("input",e(t)((e=>{console.log(e.target.name,e.target.value),localStorage.setItem(e.target.name,e.target.value)})),500);
//# sourceMappingURL=03-feedback.be14c76f.js.map

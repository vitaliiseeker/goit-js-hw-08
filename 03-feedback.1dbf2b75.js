!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(S,t),s?y(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=g();if(x(e))return O(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&i?y(e):(i=o=void 0,u)}function T(){var e=g(),n=x(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:O(g())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},x="feedback-form-state",S={};j.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(x,JSON.stringify(S)),O(e.target)}),500)),j.form.addEventListener("submit",(function(e){if(e.preventDefault(),function(){if(!S.email||!S.message)return O(j.input),O(j.textarea),alert("Please fill in all the fields."),!0;return}())return;localStorage.removeItem(x),console.log(S),function(e){e.currentTarget.reset(),j.input.classList.remove("valid","invalid"),j.textarea.classList.remove("valid","invalid")}(e)}));try{S=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""}}catch(e){}function O(e){e.value?(e.classList.remove("invalid"),e.classList.add("valid")):(e.classList.remove("valid"),e.classList.add("invalid"))}j.input.value=S.email,j.textarea.value=S.message}();
//# sourceMappingURL=03-feedback.1dbf2b75.js.map

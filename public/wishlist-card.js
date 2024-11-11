(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function i(t){var e="function"==typeof Map?new Map:void 0;return i=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(c())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(t.bind.apply(t,r));return n&&o(i,n.prototype),i}(t,arguments,r(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},i(t)}function l(e,n,o){return n=r(n),function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,a()?Reflect.construct(n,o||[],r(e).constructor):n.apply(e,o))}function a(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(a=function(){return!!t})()}var u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(e,t),r=e,(c=[{key:"connectedCallback",value:function(){var t=this;if(!this.product)return salla.logger.warn("custom-wishlist-card:: product does not exist!");salla.onReady((function(){return t.render()}))}},{key:"render",value:function(){var t;this.setAttribute("id","wishlist-product-".concat(this.product.id)),this.classList.add("product-entry","product-entry--wishlist"),this.innerHTML='\n        <div class="flex items-center mb-4 sm:mb-0">\n          <a href="'.concat(this.product.url,'" class="product-entry__image">\n            <img class="object-cover w-full h-full lazy" data-src="').concat(this.product.image.url,'" alt="').concat(this.product.image.alt,'" />\n          </a>\n          <div class="flex-1 rtl:pr-5 ltr:pl-5">\n            <h3 class="text-sm text-gray-800 leading-6 mb-1.5 rtl:pl-5 ltr:pr-5 rtl:md:pl-8 ltr:md:pr-8 line-clamp-1">\n              <a href="').concat(this.product.url,'">').concat(this.product.name,'</a>\n            </h3>\n            <div class="w-full center-between">\n              ').concat(this.product.is_on_sale?'\n                <div class="space-x-1 rtl:space-x-reverse">\n                  <h4 class="inline-block text-sm font-bold text-red-400">'.concat(salla.money(this.product.sale_price),'</h4>\n                  <span class="text-sm text-gray-500 line-through">').concat(salla.money(this.product.regular_price),"</span>\n                </div>\n              "):'\n                <h4 class="text-sm font-bold">'.concat(salla.money(this.product.price),"</h4>\n              "),'\n            </div>\n          </div>\n        </div>\n        <div class="flex items-center space-x-4 rtl:space-x-reverse">\n          <salla-add-product-button product-status="').concat(this.product.status,'" product-id="').concat(this.product.id,'" product-type="').concat(this.product.type,'" loader-position="center" fill="outline" class="flex-grow w-full sm:grow-0 md:w-40">\n          </salla-add-product-button>\n          <salla-button loader-position="center" shape="icon" size="small" color="danger" class="btn--delete" onclick="salla.wishlist.remove(').concat(this.product.id,')">\n            <i class="sicon-cancel"></i>\n          </salla-button>\n        </div>\n  '),null===(t=document.lazyLoadInstance)||void 0===t||t.update(this.querySelectorAll(".lazy"))}}])&&n(r.prototype,c),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,c}(i(HTMLElement));customElements.define("custom-wishlist-card",u)})();
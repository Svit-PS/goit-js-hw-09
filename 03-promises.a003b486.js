function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=i);var r=i("1GAPJ");function l(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const{delay:n,step:t,amount:i}=o.currentTarget.elements,u=Number(n.value),f=Number(t.value),s=Number(i.value);for(let o=0;o<s;o++)l(o+1,u+o*f).then((({position:o,delay:n})=>{e(r).Notify.init({useIcon:!1,info:{textColor:"#212121",background:"chartreuse"}}),e(r).Notify.info(`✅ Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.init({useIcon:!1,info:{textColor:"#fff",background:"firebrick"}}),e(r).Notify.info(`❌ Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.a003b486.js.map
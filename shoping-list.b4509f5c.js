var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("hai3r"),o("bUb57");const s=[],i={booksContainerShop:document.querySelector(".books-container-shop-list"),containerShopList:document.querySelector(".container-shop-list"),shoppingWrapDesk:document.querySelector(".shopping-wrap-desk")};function l(e){if(!e.target.classList.contains("delete-btn-shop-list"))return;const n=e.target.closest(".book-card-shop-list"),t=n.getAttribute("data-title");n.remove();const o=s.findIndex((e=>e.title===t));-1!==o&&(s.splice(o,1),localStorage.setItem("booksShopingList",JSON.stringify(s))),0===s.length&&(localStorage.removeItem("booksShopingList"),i.containerShopList.classList.add("visually-hidden"),i.shoppingWrapDesk.classList.remove("visually-hidden"))}!function(e){const n=localStorage.getItem(e);n&&s.push(...JSON.parse(n))}("booksShopingList"),0===s.length?i.containerShopList.classList.add("visually-hidden"):(i.shoppingWrapDesk.classList.add("visually-hidden"),function(e){const n=e.map((({img:e,title:n,category:t,description:o,author:s,amazon:i,apple:l})=>`\n        <li class="book-card-shop-list" data-title="${n}">\n          <img class="img-shop-list" src="${e}" alt="${n}" loading="lazy" />\n          <div class="right-card-part">\n            <div class="card-top-shop-list">\n              <p class="title-shop-list">${n}</p>\n              <p class="category-shop-list">${t}</p>\n              <p class="description-shop-list">${o}</p>\n            </div>\n            <div class="card-bottom-shop-list">\n              <p class="author-shop-list">${s}</p>\n              <ul class="links-shop-list">\n                <li>\n                  <a\n                    href="${i}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    >amaz</a\n                  >\n                </li>\n                <li>\n                  <a\n                    href="${l}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    >app</a\n                  >\n                </li>\n              </ul>\n            </div>\n          </div>\n          <button class="delete-btn-shop-list" type="button"></button>\n        </li>\n      `)).join("");i.booksContainerShop.insertAdjacentHTML("beforeend",n),i.booksContainerShop.addEventListener("click",l)}(s));
//# sourceMappingURL=shoping-list.b4509f5c.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/sitemap.xml";
exports.ids = ["pages/sitemap.xml"];
exports.modules = {

/***/ "./pages/sitemap.xml.js":
/*!******************************!*\
  !*** ./pages/sitemap.xml.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//pages/sitemap.xml.js\nconst EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';\nfunction generateSiteMap(posts) {\n    return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n   <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n     <!--We manually set the two URLs we know already-->\n     <url>\n       <loc>https://jsonplaceholder.typicode.com</loc>\n     </url>\n     <url>\n       <loc>https://jsonplaceholder.typicode.com/guide</loc>\n     </url>\n     ${posts.map(({ id  })=>{\n        return `\n       <url>\n           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>\n       </url>\n     `;\n    }).join('')}\n   </urlset>\n `;\n}\nfunction SiteMap() {\n// getServerSideProps will do the heavy lifting\n}\nasync function getServerSideProps({ res  }) {\n    // We make an API call to gather the URLs for our site\n    const request = await fetch(EXTERNAL_DATA_URL);\n    const posts = await request.json();\n    // We generate the XML sitemap with the posts data\n    const sitemap = generateSiteMap(posts);\n    res.setHeader('Content-Type', 'text/xml');\n    // we send the XML to the browser\n    res.write(sitemap);\n    res.end();\n    return {\n        props: {}\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaXRlbWFwLnhtbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLEVBQXNCO0FBQ3RCLEtBQUssQ0FBQ0EsaUJBQWlCLEdBQUcsQ0FBNEM7U0FFN0RDLGVBQWUsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDL0IsTUFBTSxFQUFFOzs7Ozs7Ozs7S0FTTCxFQUFFQSxLQUFLLENBQ0pDLEdBQUcsRUFBRSxDQUFDLENBQUNDLEVBQUUsRUFBQyxDQUFDLEdBQUssQ0FBQztRQUNoQixNQUFNLEVBQUU7O2dCQUVELEtBQUtKLGlCQUFpQixDQUFDLENBQUMsRUFBRUksRUFBRSxHQUFHOztLQUUxQztJQUNFLENBQUMsRUFDQUMsSUFBSSxDQUFDLENBQUUsR0FBRTs7Q0FFaEI7QUFDRCxDQUFDO1NBRVFDLE9BQU8sR0FBRyxDQUFDO0FBQ2xCLEVBQStDO0FBQ2pELENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNDLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxFQUFzRDtJQUN0RCxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQ1YsaUJBQWlCO0lBQzdDLEtBQUssQ0FBQ0UsS0FBSyxHQUFHLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxJQUFJO0lBRWhDLEVBQWtEO0lBQ2xELEtBQUssQ0FBQ0MsT0FBTyxHQUFHWCxlQUFlLENBQUNDLEtBQUs7SUFFckNNLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDLENBQWMsZUFBRSxDQUFVO0lBQ3hDLEVBQWlDO0lBQ2pDTCxHQUFHLENBQUNNLEtBQUssQ0FBQ0YsT0FBTztJQUNqQkosR0FBRyxDQUFDTyxHQUFHO0lBRVAsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVWLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYXVnaHR5ZHJhZ29uLy4vcGFnZXMvc2l0ZW1hcC54bWwuanM/ZDY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3BhZ2VzL3NpdGVtYXAueG1sLmpzXHJcbmNvbnN0IEVYVEVSTkFMX0RBVEFfVVJMID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cydcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2l0ZU1hcChwb3N0cykge1xyXG4gIHJldHVybiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XHJcbiAgIDx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XHJcbiAgICAgPCEtLVdlIG1hbnVhbGx5IHNldCB0aGUgdHdvIFVSTHMgd2Uga25vdyBhbHJlYWR5LS0+XHJcbiAgICAgPHVybD5cclxuICAgICAgIDxsb2M+aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tPC9sb2M+XHJcbiAgICAgPC91cmw+XHJcbiAgICAgPHVybD5cclxuICAgICAgIDxsb2M+aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2d1aWRlPC9sb2M+XHJcbiAgICAgPC91cmw+XHJcbiAgICAgJHtwb3N0c1xyXG4gICAgICAgLm1hcCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICA8dXJsPlxyXG4gICAgICAgICAgIDxsb2M+JHtgJHtFWFRFUk5BTF9EQVRBX1VSTH0vJHtpZH1gfTwvbG9jPlxyXG4gICAgICAgPC91cmw+XHJcbiAgICAgYFxyXG4gICAgICAgfSlcclxuICAgICAgIC5qb2luKCcnKX1cclxuICAgPC91cmxzZXQ+XHJcbiBgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpdGVNYXAoKSB7XHJcbiAgLy8gZ2V0U2VydmVyU2lkZVByb3BzIHdpbGwgZG8gdGhlIGhlYXZ5IGxpZnRpbmdcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcyB9KSB7XHJcbiAgLy8gV2UgbWFrZSBhbiBBUEkgY2FsbCB0byBnYXRoZXIgdGhlIFVSTHMgZm9yIG91ciBzaXRlXHJcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKEVYVEVSTkFMX0RBVEFfVVJMKVxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuXHJcbiAgLy8gV2UgZ2VuZXJhdGUgdGhlIFhNTCBzaXRlbWFwIHdpdGggdGhlIHBvc3RzIGRhdGFcclxuICBjb25zdCBzaXRlbWFwID0gZ2VuZXJhdGVTaXRlTWFwKHBvc3RzKVxyXG5cclxuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC94bWwnKVxyXG4gIC8vIHdlIHNlbmQgdGhlIFhNTCB0byB0aGUgYnJvd3NlclxyXG4gIHJlcy53cml0ZShzaXRlbWFwKVxyXG4gIHJlcy5lbmQoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXRlTWFwIl0sIm5hbWVzIjpbIkVYVEVSTkFMX0RBVEFfVVJMIiwiZ2VuZXJhdGVTaXRlTWFwIiwicG9zdHMiLCJtYXAiLCJpZCIsImpvaW4iLCJTaXRlTWFwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwicmVxdWVzdCIsImZldGNoIiwianNvbiIsInNpdGVtYXAiLCJzZXRIZWFkZXIiLCJ3cml0ZSIsImVuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sitemap.xml.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sitemap.xml.js"));
module.exports = __webpack_exports__;

})();
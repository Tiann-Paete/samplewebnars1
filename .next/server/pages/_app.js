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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/CartContext.js":
/*!****************************!*\
  !*** ./src/CartContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children })=>{\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedCart = localStorage.getItem(\"cart\");\n        if (storedCart) {\n            setCartItems(JSON.parse(storedCart));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const addToCart = (product)=>{\n        setCartItems((prevItems)=>{\n            const existingItem = prevItems.find((item)=>item.id === product.id);\n            if (existingItem) {\n                const newQuantity = Math.min(existingItem.quantity + product.quantity, product.stock_quantity);\n                return prevItems.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: newQuantity\n                    } : item);\n            }\n            const newQuantity = Math.min(product.quantity, product.stock_quantity);\n            return [\n                ...prevItems,\n                {\n                    ...product,\n                    quantity: newQuantity\n                }\n            ];\n        });\n    };\n    const removeFromCart = (productId)=>{\n        setCartItems((prevItems)=>prevItems.filter((item)=>item.id !== productId));\n    };\n    const updateQuantity = (productId, newQuantity, stockQuantity)=>{\n        if (newQuantity < 1 || isNaN(newQuantity)) {\n            removeFromCart(productId);\n        } else {\n            setCartItems((prevItems)=>prevItems.map((item)=>item.id === productId ? {\n                        ...item,\n                        quantity: Math.min(Math.max(1, newQuantity), stockQuantity)\n                    } : item));\n        }\n    };\n    const clearCart = ()=>{\n        setCartItems([]);\n        localStorage.removeItem(\"cart\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\1Nars\\\\nars\\\\src\\\\CartContext.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FydENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4RTtBQUU5RSxNQUFNSyw0QkFBY0osb0RBQWFBO0FBRTFCLE1BQU1LLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3hDLElBQUlGLFlBQVk7WUFDZEQsYUFBYUksS0FBS0MsS0FBSyxDQUFDSjtRQUMxQjtJQUNGLEdBQUcsRUFBRTtJQUVMTixnREFBU0EsQ0FBQztRQUNSTyxhQUFhSSxPQUFPLENBQUMsUUFBUUYsS0FBS0csU0FBUyxDQUFDUjtJQUM5QyxHQUFHO1FBQUNBO0tBQVU7SUFFZCxNQUFNUyxZQUFZLENBQUNDO1FBQ2pCVCxhQUFhLENBQUNVO1lBQ1osTUFBTUMsZUFBZUQsVUFBVUUsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0wsUUFBUUssRUFBRTtZQUNwRSxJQUFJSCxjQUFjO2dCQUNoQixNQUFNSSxjQUFjQyxLQUFLQyxHQUFHLENBQUNOLGFBQWFPLFFBQVEsR0FBR1QsUUFBUVMsUUFBUSxFQUFFVCxRQUFRVSxjQUFjO2dCQUM3RixPQUFPVCxVQUFVVSxHQUFHLENBQUMsQ0FBQ1AsT0FDcEJBLEtBQUtDLEVBQUUsS0FBS0wsUUFBUUssRUFBRSxHQUNsQjt3QkFBRSxHQUFHRCxJQUFJO3dCQUFFSyxVQUFVSDtvQkFBWSxJQUNqQ0Y7WUFFUjtZQUNBLE1BQU1FLGNBQWNDLEtBQUtDLEdBQUcsQ0FBQ1IsUUFBUVMsUUFBUSxFQUFFVCxRQUFRVSxjQUFjO1lBQ3JFLE9BQU87bUJBQUlUO2dCQUFXO29CQUFFLEdBQUdELE9BQU87b0JBQUVTLFVBQVVIO2dCQUFZO2FBQUU7UUFDOUQ7SUFDRjtJQUVBLE1BQU1NLGlCQUFpQixDQUFDQztRQUN0QnRCLGFBQWEsQ0FBQ1UsWUFBY0EsVUFBVWEsTUFBTSxDQUFDLENBQUNWLE9BQVNBLEtBQUtDLEVBQUUsS0FBS1E7SUFDckU7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ0YsV0FBV1AsYUFBYVU7UUFDOUMsSUFBSVYsY0FBYyxLQUFLVyxNQUFNWCxjQUFjO1lBQ3pDTSxlQUFlQztRQUNqQixPQUFPO1lBQ0x0QixhQUFhLENBQUNVLFlBQ1pBLFVBQVVVLEdBQUcsQ0FBQyxDQUFDUCxPQUNiQSxLQUFLQyxFQUFFLEtBQUtRLFlBQ1I7d0JBQUUsR0FBR1QsSUFBSTt3QkFBRUssVUFBVUYsS0FBS0MsR0FBRyxDQUFDRCxLQUFLVyxHQUFHLENBQUMsR0FBR1osY0FBY1U7b0JBQWUsSUFDdkVaO1FBR1Y7SUFDRjtJQUdBLE1BQU1lLFlBQVk7UUFDaEI1QixhQUFhLEVBQUU7UUFDZkUsYUFBYTJCLFVBQVUsQ0FBQztJQUMxQjtJQUVBLHFCQUNFLDhEQUFDakMsWUFBWWtDLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEM7WUFBV1M7WUFBV2E7WUFBZ0JHO1lBQWdCSTtRQUFVO2tCQUM1RjlCOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTWtDLFVBQVUsSUFBTXRDLGlEQUFVQSxDQUFDRSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFycy8uL3NyYy9DYXJ0Q29udGV4dC5qcz9mZTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGlmIChzdG9yZWRDYXJ0KSB7XHJcbiAgICAgIHNldENhcnRJdGVtcyhKU09OLnBhcnNlKHN0b3JlZENhcnQpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xyXG4gIH0sIFtjYXJ0SXRlbXNdKTtcclxuXHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHNldENhcnRJdGVtcygocHJldkl0ZW1zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHByZXZJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gTWF0aC5taW4oZXhpc3RpbmdJdGVtLnF1YW50aXR5ICsgcHJvZHVjdC5xdWFudGl0eSwgcHJvZHVjdC5zdG9ja19xdWFudGl0eSk7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJdGVtcy5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICBpdGVtLmlkID09PSBwcm9kdWN0LmlkXHJcbiAgICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eTogbmV3UXVhbnRpdHkgfVxyXG4gICAgICAgICAgICA6IGl0ZW1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5ld1F1YW50aXR5ID0gTWF0aC5taW4ocHJvZHVjdC5xdWFudGl0eSwgcHJvZHVjdC5zdG9ja19xdWFudGl0eSk7XHJcbiAgICAgIHJldHVybiBbLi4ucHJldkl0ZW1zLCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiBuZXdRdWFudGl0eSB9XTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKChwcmV2SXRlbXMpID0+IHByZXZJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2R1Y3RJZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gKHByb2R1Y3RJZCwgbmV3UXVhbnRpdHksIHN0b2NrUXVhbnRpdHkpID0+IHtcclxuICAgIGlmIChuZXdRdWFudGl0eSA8IDEgfHwgaXNOYU4obmV3UXVhbnRpdHkpKSB7XHJcbiAgICAgIHJlbW92ZUZyb21DYXJ0KHByb2R1Y3RJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDYXJ0SXRlbXMoKHByZXZJdGVtcykgPT5cclxuICAgICAgICBwcmV2SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdElkIFxyXG4gICAgICAgICAgICA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IE1hdGgubWluKE1hdGgubWF4KDEsIG5ld1F1YW50aXR5KSwgc3RvY2tRdWFudGl0eSkgfSBcclxuICAgICAgICAgICAgOiBpdGVtXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoW10pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhcnQnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnRJdGVtcywgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlUXVhbnRpdHksIGNsZWFyQ2FydCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB1c2VDb250ZXh0KENhcnRDb250ZXh0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInN0b3JlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwcmV2SXRlbXMiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiaXRlbSIsImlkIiwibmV3UXVhbnRpdHkiLCJNYXRoIiwibWluIiwicXVhbnRpdHkiLCJzdG9ja19xdWFudGl0eSIsIm1hcCIsInJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwiZmlsdGVyIiwidXBkYXRlUXVhbnRpdHkiLCJzdG9ja1F1YW50aXR5IiwiaXNOYU4iLCJtYXgiLCJjbGVhckNhcnQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CartContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CartContext */ \"./src/CartContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const navigateToCart = ()=>{\n        router.push(\"/cart\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps,\n            navigateToCart: navigateToCart\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\1Nars\\\\nars\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\1Nars\\\\nars\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0I7QUFDTjtBQUV6QixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QixNQUFNSyxpQkFBaUI7UUFDckJELE9BQU9FLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNQLHNEQUFZQTtrQkFDWCw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTO1lBQUVFLGdCQUFnQkE7Ozs7Ozs7Ozs7O0FBR2hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFycy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4uL0NhcnRDb250ZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBuYXZpZ2F0ZVRvQ2FydCA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL2NhcnQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IG5hdmlnYXRlVG9DYXJ0PXtuYXZpZ2F0ZVRvQ2FydH0gLz5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwidXNlUm91dGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwibmF2aWdhdGVUb0NhcnQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();
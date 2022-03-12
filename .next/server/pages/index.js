"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/HeaderItem.js

function HeaderItem({ Icon , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "h-8 mb-1 group-hover:animate-bounce"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "opacity-0 group-hover:opacity-100 tracking-widest",
                children: title
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "flex flex-col sm:flex-row m-5 justify-between items-center h-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-grow justify-evenly max-w-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "HOME",
                        Icon: solid_namespaceObject.HomeIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "TRENDING",
                        Icon: solid_namespaceObject.LightningBoltIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "VERIFIED",
                        Icon: solid_namespaceObject.BadgeCheckIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "COLLECTIONS",
                        Icon: solid_namespaceObject.CollectionIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "SEARCH",
                        Icon: solid_namespaceObject.SearchIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                        title: "ACCOUNT",
                        Icon: solid_namespaceObject.UserIcon
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "https://links.papareact.com/ua6",
                width: 200,
                height: 100,
                className: "object-contain"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./requests.js
const API_KEY = "da1b9b5cb92c815b694817e5e5db9683";
/* harmony default export */ const requests = ({
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: "TV Movie",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Navbar.js



function Nav() {
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide",
                children: Object.entries(requests).map(([key, { title , url  }])=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        onClick: ()=>router.push(`/?genre=${key}`)
                        ,
                        className: "last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500",
                        children: [
                            " ",
                            title
                        ]
                    }, key)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"
            })
        ]
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Thumbnail.js




const Thumbnail = /*#__PURE__*/ (0,external_react_.forwardRef)(({ result  }, ref)=>{
    Thumbnail.displayName = "Thumbnail";
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        className: "p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                layout: "responsive",
                src: `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`,
                height: 1080,
                width: 1920
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "truncate max-w-md",
                        children: result.overview
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
                        children: result.title || result.orginal_name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center opacity-0 group-hover:opacity-100",
                        children: [
                            result.media_type && `${result.media_type} •`,
                            " ",
                            result.release_date || result.first_air_date,
                            " •",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ThumbUpIcon, {
                                className: "h-5 mx-2"
                            }),
                            " ",
                            result.vote_count
                        ]
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const components_Thumbnail = (Thumbnail);

;// CONCATENATED MODULE: external "react-flip-move"
const external_react_flip_move_namespaceObject = require("react-flip-move");
var external_react_flip_move_default = /*#__PURE__*/__webpack_require__.n(external_react_flip_move_namespaceObject);
;// CONCATENATED MODULE: ./components/Results.js



function Results({ results  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_flip_move_default()), {
        className: "px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center",
        children: results.map((result)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Thumbnail, {
                result: result
            }, result.id)
        )
    }));
};

;// CONCATENATED MODULE: ./pages/index.js







function Home({ results  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Hulu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Results, {
                results: results
            })
        ]
    }));
};
async function getServerSideProps(context) {
    var ref;
    const genre = context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3${((ref = requests[genre]) === null || ref === void 0 ? void 0 : ref.url) || requests.fetchTrending.url}`).then((res)=>res.json()
    );
    return {
        props: {
            results: request.results
        }
    };
}


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(878)));
module.exports = __webpack_exports__;

})();
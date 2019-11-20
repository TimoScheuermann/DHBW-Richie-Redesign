(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/app/scss/styles.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/app/scss/styles.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n:root {\n  --background: #f0f0f0;\n  --paragraph: #fff;\n  --color: #111;\n  --color-rgb: 17, 17, 17;\n  --background-filter: brightness(100%);\n}\n:roots {\n  --background: #000;\n  --paragraph: #111;\n  --color: #eee;\n  --color-rgb: 238, 238, 238;\n  --background-filter: brightness(50%);\n}\n@supports (top: constant(safe-area-inset-top)) {\n  :root {\n    --safe-area-inset-top: constant(safe-area-inset-top);\n    --safe-area-inset-right: constant(safe-area-inset-right);\n    --safe-area-inset-bottom: constant(safe-area-inset-bottom);\n    --safe-area-inset-left: constant(safe-area-inset-left);\n  }\n}\n@supports (top: env(safe-area-inset-top)) {\n  :root {\n    --safe-area-inset-top: env(safe-area-inset-top);\n    --safe-area-inset-right: env(safe-area-inset-right);\n    --safe-area-inset-bottom: env(safe-area-inset-bottom);\n    --safe-area-inset-left: env(safe-area-inset-left);\n  }\n}\nhtml {\n  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  scroll-behavior: smooth;\n  min-height: 100vh;\n  background: var(--background);\n  color: var(--color);\n}\nbody {\n  margin: 0;\n  min-height: 100vh;\n  position: relative;\n}\nh1 {\n  text-align: center;\n}\nh2 {\n  opacity: 0.8;\n}\n.richie-header-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n@media only screen and (min-height: 400px) {\n  .background {\n    height: 150px;\n  }\n\n  .background-spacer {\n    height: 100px;\n  }\n}\n@media only screen and (max-height: 399px) {\n  .background {\n    height: 120px;\n    margin-bottom: -30px;\n  }\n\n  .background-spacer {\n    height: 70px;\n  }\n}\n.background {\n  background-image: url('landing.jpg');\n  background-size: cover;\n  background-position: center;\n  margin-top: calc(-1 * env(safe-area-inset-top));\n  padding-top: calc(2 * env(safe-area-inset-top));\n  width: 100vw;\n  position: absolute;\n  top: 0px;\n  z-index: -1;\n  -webkit-filter: var(--background-filter);\n          filter: var(--background-filter);\n}\n.background.full {\n  height: 100vh;\n}\n.ti.ti-user-card::before {\n  -webkit-mask-image: url('user-card.svg');\n          mask-image: url('user-card.svg');\n}\na[richie] {\n  position: relative;\n  text-decoration: none;\n  color: #0088ff;\n  white-space: pre-line;\n}\na[richie]::before {\n  content: \"\";\n  transition: 0.3s ease;\n  position: absolute;\n  background: #0088ff;\n  width: 0%;\n  left: 50%;\n  transform: translate(-50%);\n  height: 1px;\n  bottom: 0;\n}\na[richie]:hover::before, a[richie]:active::before {\n  width: 100%;\n}\na[richie]:not(:last-child) {\n  margin-right: 15px;\n}\na[richie] i {\n  margin-right: 5px;\n  top: 2px;\n}\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n  position: absolute !important;\n  border-radius: 4px;\n  transition: 0.2s ease;\n}\n::-webkit-scrollbar:hover {\n  width: 4px;\n}\n::-webkit-scrollbar-track {\n  background: #ccc;\n  border-radius: 4px;\n}\n::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 4px;\n  transition: 0.2s ease;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #888;\n  transition: 0.2s ease;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n@media only screen and (max-width: 849px) {\n  .loginbox {\n    top: calc(50% + 25px);\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: calc( 100% - 10px - env(safe-area-inset-right) - env(safe-area-inset-left) );\n  }\n  .loginbox h1 {\n    padding-top: 10px;\n  }\n  .loginbox .services .service {\n    width: calc(40%);\n  }\n  .loginbox .services .service:not(ODD) {\n    margin-right: 10px;\n  }\n\n  .reasons {\n    display: none;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .loginbox .services .service {\n    width: calc(100% - 14px);\n    margin-right: 0px !important;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .loginbox {\n    width: 450px;\n    right: 10vw;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .loginbox .services .service {\n    width: calc(100% - 14px);\n  }\n}\n.loginbox {\n  position: absolute;\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  border-radius: 10px;\n}\n.loginbox * {\n  text-align: center;\n  color: #fff;\n}\n.loginbox h1 {\n  margin: 0px;\n  margin-top: 20px;\n}\n.loginbox p {\n  margin: 10px 0px;\n}\n.loginbox .services {\n  margin: 30px 50px;\n}\n.loginbox .services .service {\n  display: inline-block;\n  padding: 7px;\n  border: 2px solid #fff;\n  border-radius: 1000px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.loginbox .services .service:not(:last-child) {\n  margin-bottom: 15px;\n}\n.loginbox .services .service:hover, .loginbox .services .service:focus {\n  color: #111;\n  background: #fff;\n}\n.loginbox .services .service:hover i, .loginbox .services .service:focus i {\n  color: #111;\n}\n.loginbox .services .service i {\n  transition: 0.2s ease;\n  margin-left: 10px;\n  top: 1px;\n}\n.loginbox .services .service::before {\n  content: \"Sign in with\";\n}\n.reasons {\n  position: absolute;\n  left: 50px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 45vw;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.reasons h1 {\n  font-size: 2.2em;\n  overflow: hidden;\n  position: relative;\n}\n.reasons h1::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0));\n  z-index: -1;\n}\n.reasons p {\n  font-size: 1.3em;\n}\n.searchBar {\n  position: absolute;\n  width: 80%;\n  left: 50%;\n  top: 50%;\n  height: 40px;\n  border-radius: 100px;\n  transform: translate(-50%, -50%);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  color: #fff;\n}\nform {\n  z-index: 2;\n  min-width: 100%;\n  display: flex;\n  border-radius: 200px;\n  justify-content: space-between;\n}\nform input {\n  color: inherit, var(--color);\n  background: transparent;\n  display: inline-flex;\n}\nform input[type=text] {\n  width: calc(100% - 40px);\n  font-size: 1.2em;\n  padding: 0;\n  color: inherit, currentColor;\n  padding-left: 25px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\nform input::-webkit-input-placeholder {\n  color: currentColor;\n  opacity: 0.7;\n}\nform input::-moz-placeholder {\n  color: currentColor;\n  opacity: 0.7;\n}\nform input::-ms-input-placeholder {\n  color: currentColor;\n  opacity: 0.7;\n}\nform input::placeholder {\n  color: currentColor;\n  opacity: 0.7;\n}\nform input[type=submit] {\n  cursor: pointer;\n  background: currentColor;\n  -webkit-mask-image: url(\"https://cdn.jsdelivr.net/gh/TimoScheuermann/Timos-Icons@latest/docs/iconSet/svg/search.svg\");\n          mask-image: url(\"https://cdn.jsdelivr.net/gh/TimoScheuermann/Timos-Icons@latest/docs/iconSet/svg/search.svg\");\n  width: 30px;\n  height: 30px;\n  margin-top: 5px;\n  margin-right: 5px;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n          mask-position: center;\n}\nform input[type=submit][isSearching=true] {\n  -webkit-animation: search 1.5s ease-in-out infinite both;\n          animation: search 1.5s ease-in-out infinite both;\n}\n@-webkit-keyframes search {\n  0%, 100% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(90deg) scale(0.8);\n  }\n}\n@keyframes search {\n  0%, 100% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(90deg) scale(0.8);\n  }\n}\n@media only screen and (min-height: 400px) {\n  .seperator {\n    height: 100px;\n  }\n}\n.seperator {\n  position: -webkit-sticky;\n  position: sticky;\n  top: calc(50px + env(safe-area-inset-top));\n  z-index: 5;\n  min-height: 70px;\n  width: 80%;\n  padding: 0px 10%;\n  background: var(--paragraph);\n  display: flex;\n  justify-content: space-between;\n  margin-top: calc(50px + env(safe-area-inset-top));\n  align-items: center;\n  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.1);\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.seperator * {\n  display: inline-flex;\n}\n.seperator *:first-child {\n  margin-right: 20px;\n}\n.filter {\n  padding: 5px 25px;\n  border: 1px solid rgba(var(--color-rgb), 0.5);\n  border-radius: 10px;\n  opacity: 0.8;\n  transition: 0.2s ease;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.filter:hover {\n  opacity: 1;\n}\n.filter i {\n  margin-left: 10px;\n  top: 2px;\n}\n.filter:not(:last-child) {\n  margin-right: 25px;\n}\n@media only screen and (max-width: 849px) {\n  .results {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .results {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n.results {\n  padding: 0px 10%;\n  display: block;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n  margin: 20px 0px;\n}\n.results .result {\n  margin-top: 30px;\n  display: inline-block;\n  background: var(--paragraph);\n  padding: 20px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);\n}\n.results .result .question {\n  font-weight: 600;\n  font-size: 1.1em;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.results .result .answer {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  padding-bottom: 10px;\n}\n.results .result .actions {\n  padding-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.results .result .actions .action {\n  cursor: pointer;\n  font-weight: 600;\n  display: inline-flex;\n  opacity: 0.8;\n  transition: 0.2s ease;\n}\n.results .result .actions .action:hover {\n  opacity: 1;\n}\n.results .result .actions .action i {\n  margin-right: 5px;\n}\n.results .result .actions .action:nth-child(4) {\n  color: rgba(var(--color), 0.5);\n}\n@media only screen and (max-width: 849px) {\n  .popUp .card {\n    padding: 0px 10px;\n    width: calc(100vw - 20px);\n    border-radius: 10px 10px 5px 5px;\n    max-height: calc(100vh - 50px);\n    transition: all 1s ease-in-out;\n  }\n  .popUp .card .iconButton {\n    margin: 0;\n    margin-bottom: 10px;\n  }\n  .popUp .card .close {\n    z-index: 201;\n    position: fixed;\n    top: inherit;\n    margin-top: 20px;\n  }\n  .popUp.opened .card {\n    bottom: 0%;\n  }\n  .popUp.closed .card {\n    bottom: -100%;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .popUp .card {\n    padding: 0px 40px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    top: 50%;\n    left: 50%;\n    border-radius: 5px;\n    transition: all 0.3s ease-in-out;\n  }\n  .popUp.opened .card {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  .popUp.closed .card {\n    transform: translate(-50%, -50%) scale(0);\n  }\n}\n.popUp {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  transition: background 1s ease-in-out;\n  z-index: 400;\n}\n.popUp.closed {\n  background: transparent;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n.popUp.opened {\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n}\n.popUp .card {\n  position: absolute;\n  background: var(--paragraph);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.popUp .card::-webkit-scrollbar {\n  display: none;\n}\n.popUp .card .type {\n  position: absolute;\n  top: 25px;\n}\n.popUp .card h1 {\n  background: var(--paragraph);\n  z-index: 200;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 20px 40px 0px 20px;\n}\n.popUp .card * {\n  margin: 0;\n  margin-bottom: 10px;\n}\n.popUp .card .filter {\n  display: block;\n  max-height: 20px;\n  display: flex;\n  justify-content: center;\n  align-self: center;\n}\n.popUp .card .filter * {\n  display: inline-flex;\n}\n.popUp .card .filter i {\n  margin-left: 10px;\n}\n.popUp .card .buttons {\n  text-align: center;\n}\n.popUp .card .buttons .iconButton i {\n  margin-right: 24px;\n}\ntextarea {\n  width: 100%;\n  padding: 0;\n  font: inherit;\n  background: transparent;\n  border: none;\n  resize: none;\n  outline: none;\n  opacity: 0.7;\n  transition: 0.3s ease;\n  color: var(--color);\n}\ntextarea:focus {\n  opacity: 1;\n}\n.grid {\n  display: grid;\n  grid-gap: 20px;\n}\n@media only screen and (max-width: 849px) {\n  .grid-3-1 {\n    grid-template-columns: 1fr;\n  }\n\n  .grid-1-1-1-1 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .grid-1-1 {\n    grid-template-columns: 1fr;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .grid-3-1 {\n    grid-template-columns: 3fr 1fr;\n  }\n\n  .grid-1-1-1-1 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .grid-1-1 {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media only screen and (min-height: 400px) {\n  .blurTitle {\n    top: calc(100px + env(safe-area-inset-top));\n  }\n}\n@media only screen and (max-height: 399px) {\n  .blurTitle {\n    top: calc(85px + env(safe-area-inset-top));\n  }\n}\n.blurTitle {\n  position: absolute;\n  width: 80%;\n  left: 50%;\n  height: 40px;\n  font-weight: 600;\n  font-size: 2em;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  z-index: 1;\n}\n.iconButton {\n  color: #0088ff;\n  border: 1px solid #0088ff;\n  z-index: 1;\n  display: inline-block;\n  background: transparent;\n  position: relative;\n  font-size: inherit, 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 20px;\n  padding-left: 10px;\n  border-radius: 40px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  width: auto;\n  max-height: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  transition: color 0.4s ease-in-out;\n}\n.iconButton i {\n  margin-right: 10px;\n  top: 1px;\n  font-weight: 400;\n}\n.iconButton:not(:last-child) {\n  margin-right: 20px;\n}\n.iconButton::before {\n  content: \"\";\n  z-index: -1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0px;\n  height: 0px;\n  border-radius: 100px;\n  transform-origin: center;\n  background-color: #0088ff;\n  transform: translate3d(-50%, -50%, 0);\n  transition: 0.35s ease-in-out;\n}\n.iconButton:active {\n  -webkit-filter: brightness(120%);\n          filter: brightness(120%);\n}\n.iconButton:hover, .iconButton:focus {\n  color: #fff !important;\n  box-shadow: none;\n  outline: none;\n}\n.iconButton:hover::before, .iconButton:focus::before {\n  width: calc(100% + 10px);\n  height: calc(100% + 10px);\n  border-radius: 0;\n}\n.red {\n  color: #ff375f;\n}\n.green {\n  color: #30d158;\n}\n.blue {\n  color: #0088ff;\n}\n@media only screen and (min-width: 850px) {\n  .paragraph {\n    margin: 50px 10%;\n  }\n  .paragraph .paragraph {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 849px) {\n  .paragraph {\n    margin: 50px 0px;\n  }\n  .paragraph .paragraph {\n    margin: 0px -40px;\n  }\n}\n.paragraph {\n  position: relative;\n  background: var(--paragraph);\n  padding: 20px 40px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n}\n.paragraph * {\n  margin: 0;\n  margin-bottom: 10px;\n}\n.paragraph p {\n  text-align: justify;\n}\n.socialMediaAccounts {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 40px;\n  overflow: auto;\n}\n.socialMediaAccounts .socialAccount {\n  margin-top: 10px;\n  display: inline-grid;\n  text-align: center;\n  opacity: 0.8;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.socialMediaAccounts .socialAccount:not(:hover) {\n  color: unset;\n}\n.socialMediaAccounts .socialAccount:hover {\n  opacity: 1;\n}\n.socialMediaAccounts .socialAccount * {\n  margin: 0;\n}\n.socialMediaAccounts .socialAccount i {\n  margin: auto;\n  font-size: 3em;\n}\n.socialMediaAccounts .socialAccount .account {\n  margin-top: 10px;\n  font-weight: 700;\n  font-size: 0.8em;\n}\n.type {\n  opacity: 0.5;\n  transition: 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  margin-bottom: 0px;\n  align-items: center;\n  font-weight: 700;\n}\n.type * {\n  display: inline-flex;\n}\n.type:hover {\n  opacity: 1;\n}\n.type[active=true] {\n  opacity: 1;\n}\n.type[active=true] .name {\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\n}\n.type:not(:last-child) {\n  margin-right: 20px;\n}\n.type .name {\n  padding: 5px 10px;\n  font-size: 0.8em;\n  border-radius: 20px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 0px;\n}\n.type .new {\n  background: #30d158;\n}\n.type .new::before {\n  content: \"Neu\";\n}\n.type .delete {\n  background: #ff375f;\n}\n.type .delete::before {\n  content: \"Löschen\";\n}\n.type .feedback {\n  background: #0088ff;\n}\n.type .feedback::before {\n  content: \"Feedback\";\n}\n.type .amount {\n  margin-left: 10px;\n}\n.type .amount::before {\n  content: \"x\";\n}\n.tableWrapper {\n  width: 100%;\n  overflow-x: auto;\n}\n.tableWrapper table {\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n.tableWrapper table tr {\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.tableWrapper table tr:nth-child(odd) td {\n  background: var(--background);\n}\n.tableWrapper table tr:hover td {\n  background: rgba(0, 136, 255, 0.5);\n}\n.tableWrapper table tr:hover .lecture {\n  border-color: #0088ff;\n  color: #0088ff;\n}\n.tableWrapper table tr th,\n.tableWrapper table tr td {\n  padding: 10px;\n  transition: 0.2s ease;\n}\n.tableWrapper table tr th {\n  border-bottom: 1px solid black;\n}\n.tableWrapper table tr .lecture {\n  border: 1px solid rgba(var(--color-rgb), 0.6);\n  padding: 5px 10px;\n  border-radius: 5px;\n  transition: 0.2s ease;\n}\n.tableWrapper table tr .amount {\n  font-weight: 600;\n  color: rgba(var(--color), 0.8);\n}\n.tableWrapper table tr .amount i {\n  top: 1px;\n  margin: 0px 5px;\n}\n.tableWrapper table tr td {\n  white-space: nowrap;\n}\n.tableWrapper table tr td .name {\n  box-shadow: none !important;\n}\n.tableWrapper table tr td img {\n  height: 40px;\n  border-radius: 100px;\n  margin: 0;\n}\n.signedInWith {\n  border: 1px solid rgba(var(--color-rgb), 0.8);\n  border-radius: 10px;\n  padding: 5px 15px;\n  font-weight: 600;\n  margin-right: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.signedInWith::before {\n  content: \"Signed in with\";\n}\n.signedInWith i {\n  margin-left: 7px;\n  top: 1px;\n}\n.chart {\n  background: conic-gradient(#ff375f 10%, #30d158 10% 20%, #0088ff 0);\n  border-radius: 10000px;\n  width: 200px;\n  height: 200px;\n}\n.close {\n  width: 40px;\n  height: 40px;\n  right: 5px;\n  top: 5px;\n  border-radius: 40px;\n  position: absolute;\n  font-size: 38px;\n  line-height: 40px;\n  text-align: center;\n  transition: 0.1s ease;\n  transition: transform 0.5s ease;\n  cursor: pointer;\n  opacity: 0.4;\n}\n.close:hover {\n  opacity: 0.8;\n}\n.close[active=false] {\n  transform: rotate(45deg);\n}\n.close:before, .close:after {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  height: 40px;\n  background: var(--color);\n}\n.close:before {\n  transform: rotate(45deg) scale(0.7);\n}\n.close:after {\n  transform: rotate(-45deg) scale(0.7);\n}\n.forOfor {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  color: #fff;\n  padding: 20px 30px;\n  border-radius: 10px;\n  text-align: center;\n}\n.forOfor * {\n  margin: 0;\n}\n.forOfor p {\n  margin: 10px 0px;\n}\n.forOfor .iconButton {\n  color: #fff;\n  border-color: #fff;\n}\n.forOfor .iconButton:hover, .forOfor .iconButton:focus {\n  color: #111 !important;\n}\n.forOfor .iconButton::before {\n  background: #fff;\n}\n.forOfor .iconButton i {\n  margin-right: 20px;\n}\n.stat {\n  background: var(--background);\n  padding: 20px 10px;\n  border-radius: 5px;\n}\n.stat * {\n  display: inline-block;\n  width: 100%;\n  margin: 0 !important;\n  text-align: center;\n}\n.stat p {\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.1em;\n  opacity: 0.8;\n}\n.stat .icon {\n  padding-top: 10px;\n  font-size: 50px;\n}\n.stat .number,\n.stat .text {\n  color: #0088ff;\n  font-size: 1.6em;\n}\n.stat .number {\n  font-weight: 800;\n}\n.stat .text {\n  font-weight: 600;\n}\n.anchor {\n  position: absolute;\n  margin-top: -150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nzcy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2Nzcy9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXHNjc3NcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9zY3NzL0M6XFxVc2Vyc1xcdGltb3NcXERlc2t0b3BcXFdlYnNpdGVzXFxkaGJ3LXJpY2hpZS1yZWRlc2lnbi12Mi9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBREFGO0FDR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QURBRjtBQ0lFO0VBREY7SUFFSSxvREFBQTtJQUNBLHdEQUFBO0lBQ0EsMERBQUE7SUFDQSxzREFBQTtFREFGO0FBQ0Y7QUNDRTtFQVBGO0lBUUksK0NBQUE7SUFDQSxtREFBQTtJQUNBLHFEQUFBO0lBQ0EsaURBQUE7RURFRjtBQUNGO0FDQ0E7RUFDRSxrS0FBQTtFQUdBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FEQUY7QUNHQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEQUY7QUNHQTtFQUNFLGtCQUFBO0FEQUY7QUNFQTtFQUNFLFlBQUE7QURDRjtBQ0VBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7QURDRjtBQ0VBO0VBQ0U7SUFDRSxhQUFBO0VEQ0Y7O0VDQ0E7SUFDRSxhQUFBO0VERUY7QUFDRjtBQ0FBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esb0JBQUE7RURFRjs7RUNBQTtJQUNFLFlBQUE7RURHRjtBQUNGO0FDQUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FERUY7QUNERTtFQUNFLGFBQUE7QURHSjtBQ0NBO0VBQ0Usd0NBQUE7VUFBQSxnQ0FBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NsR0s7RURtR0wscUJBQUE7QURFRjtBQ0RFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkN4R0c7RUR5R0gsU0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FER0o7QUNDSTtFQUNFLFdBQUE7QURDTjtBQ0VFO0VBQ0Usa0JBQUE7QURBSjtBQ0VFO0VBQ0UsaUJBQUE7RUFDQSxRQUFBO0FEQUo7QUNJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEREY7QUNJQTtFQUNFLFVBQUE7QURERjtBQ0lBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBRERGO0FDSUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURERjtBQ0VFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURBSjtBQ2tOQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxTQUFBO0lBQ0EsZ0NBQUE7SUFDQSxtRkFBQTtFRC9NRjtFQ2tORTtJQUNFLGlCQUFBO0VEaE5KO0VDbU5JO0lBQ0UsZ0JBQUE7RURqTk47RUNrTk07SUFDRSxrQkFBQTtFRGhOUjs7RUNxTkE7SUFDRSxhQUFBO0VEbE5GO0FBQ0Y7QUNxTkE7RUFHTTtJQUNFLHdCQUFBO0lBQ0EsNEJBQUE7RURyTk47QUFDRjtBQzBOQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUR4TkY7RUMwTkk7SUFDRSx3QkFBQTtFRHhOTjtBQUNGO0FDNk5BO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUQzTkY7QUM2TkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUQzTko7QUM4TkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUQ1Tko7QUM4TkU7RUFDRSxnQkFBQTtBRDVOSjtBQzhORTtFQUNFLGlCQUFBO0FENU5KO0FDNk5JO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUtBLHFCQUFBO0FEL05OO0FDMk5NO0VBQ0UsbUJBQUE7QUR6TlI7QUM2Tk07RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUQ1TlI7QUM2TlE7RUFDRSxXQUFBO0FEM05WO0FDK05NO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7QUQ3TlI7QUMrTk07RUFDRSx1QkFBQTtBRDdOUjtBQ21PQTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QURqT0Y7QUNtT0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURqT0o7QUNrT0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkZBQUE7RUFNQSxXQUFBO0FEck9OO0FDd09FO0VBQ0UsZ0JBQUE7QUR0T0o7QUMwT0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUR2T0Y7QUN5T0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FEdE9GO0FDdU9FO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtFQWdCQSxvQkFBQTtBRHBQSjtBQ3FPSTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FEbk9OO0FDcU9JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEbk9OO0FDaU9JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEbk9OO0FDaU9JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEbk9OO0FDaU9JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEbk9OO0FDdU9JO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUhBQUE7VUFBQSw2R0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FEck9OO0FDdU9NO0VBQ0Usd0RBQUE7VUFBQSxnREFBQTtBRHJPUjtBQ3lPSTtFQUNFO0lBRUUsZ0NBQUE7RUR4T047RUMwT0k7SUFDRSxtQ0FBQTtFRHhPTjtBQUNGO0FDaU9JO0VBQ0U7SUFFRSxnQ0FBQTtFRHhPTjtFQzBPSTtJQUNFLG1DQUFBO0VEeE9OO0FBQ0Y7QUM2T0E7RUFDRTtJQUNFLGFBQUE7RUQxT0Y7QUFDRjtBQzZPQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaURBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBT0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEbFBGO0FDME9FO0VBQ0Usb0JBQUE7QUR4T0o7QUN5T0k7RUFDRSxrQkFBQTtBRHZPTjtBQytPQTtFQUNFLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRDVPRjtBQzhPRTtFQUNFLFVBQUE7QUQ1T0o7QUMrT0U7RUFDRSxpQkFBQTtFQUNBLFFBQUE7QUQ3T0o7QUMrT0U7RUFDRSxrQkFBQTtBRDdPSjtBQ2lQQTtFQUNFO0lBQ0UsZUFBQTtTQUFBLFVBQUE7RUQ5T0Y7QUFDRjtBQ2dQQTtFQUNFO0lBQ0UsZUFBQTtTQUFBLFVBQUE7RUQ5T0Y7QUFDRjtBQ2lQQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxnQkFBQTtBRC9PRjtBQ2lQRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUQvT0o7QUNpUEk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRC9PTjtBQ2tQSTtFQUNFLDJDQUFBO0VBQ0Esb0JBQUE7QURoUE47QUNtUEk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FEalBOO0FDbVBNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QURqUFI7QUNrUFE7RUFDRSxVQUFBO0FEaFBWO0FDa1BRO0VBQ0UsaUJBQUE7QURoUFY7QUNrUFE7RUFDRSw4QkFBQTtBRGhQVjtBQ3VQQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGdDQUFBO0lBQ0EsOEJBQUE7SUFjQSw4QkFBQTtFRGxRSjtFQ3NQSTtJQUNFLFNBQUE7SUFDQSxtQkFBQTtFRHBQTjtFQ3VQSTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VEclBOO0VDMlBJO0lBQ0UsVUFBQTtFRHpQTjtFQzZQSTtJQUNFLGFBQUE7RUQzUE47QUFDRjtBQytQQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0NBQUE7RUQ5UEo7RUNpUUk7SUFDRSx5Q0FBQTtFRC9QTjtFQ21RSTtJQUNFLHlDQUFBO0VEalFOO0FBQ0Y7QUNzUUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFTQSxZQUFBO0FENVFGO0FDb1FFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FEbFFKO0FDb1FFO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FEbFFKO0FDcVFFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBRG5RSjtBQ3FRSTtFQUNFLGFBQUE7QURuUU47QUNzUUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QURwUU47QUN1UUk7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0FEclFOO0FDd1FJO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FEdFFOO0FDd1FJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUR0UU47QUN1UU07RUFDRSxvQkFBQTtBRHJRUjtBQ3VRTTtFQUNFLGlCQUFBO0FEclFSO0FDd1FJO0VBQ0Usa0JBQUE7QUR0UU47QUN3UVE7RUFDRSxrQkFBQTtBRHRRVjtBQzZRQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUQxUUY7QUMyUUU7RUFDRSxVQUFBO0FEelFKO0FDNlFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUQxUUY7QUM2UUE7RUFDRTtJQUNFLDBCQUFBO0VEMVFGOztFQzRRQTtJQUNFLHFDQUFBO0VEelFGOztFQzRRQTtJQUNFLDBCQUFBO0VEelFGO0FBQ0Y7QUMyUUE7RUFDRTtJQUNFLDhCQUFBO0VEelFGOztFQzJRQTtJQUNFLHFDQUFBO0VEeFFGOztFQzBRQTtJQUNFLDhCQUFBO0VEdlFGO0FBQ0Y7QUMwUUE7RUFDRTtJQUNFLDJDQUFBO0VEeFFGO0FBQ0Y7QUMwUUE7RUFDRTtJQUNFLDBDQUFBO0VEeFFGO0FBQ0Y7QUMyUUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRHpRRjtBQzRRQTtFQUNFLGNDNzJCSztFRDgyQkwseUJBQUE7RUFFQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FEM1FGO0FDNlFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUQzUUo7QUM4UUU7RUFDRSxrQkFBQTtBRDVRSjtBQytRRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQ3Y1Qkc7RUR5NUJILHFDQUFBO0VBQ0EsNkJBQUE7QUQ5UUo7QUNpUkU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FEL1FKO0FDa1JFO0VBRUUsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURqUko7QUNrUkk7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QURoUk47QUNxUkE7RUFDRSxjQ2o3Qkk7QUYrcEJOO0FDb1JBO0VBQ0UsY0NuN0JNO0FGa3FCUjtBQ21SQTtFQUNFLGNDcjdCSztBRnFxQlA7QUNtUkE7RUFDRTtJQUNFLGdCQUFBO0VEaFJGO0VDaVJFO0lBQ0UsU0FBQTtFRC9RSjtBQUNGO0FDbVJBO0VBQ0U7SUFDRSxnQkFBQTtFRGpSRjtFQ2tSRTtJQUNFLGlCQUFBO0VEaFJKO0FBQ0Y7QUNvUkE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEbFJGO0FDbVJFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FEalJKO0FDbVJFO0VBQ0UsbUJBQUE7QURqUko7QUNxUkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRGxSRjtBQ21SRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURqUko7QUNtUkk7RUFDRSxZQUFBO0FEalJOO0FDbVJJO0VBQ0UsVUFBQTtBRGpSTjtBQ21SSTtFQUNFLFNBQUE7QURqUk47QUNtUkk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBRGpSTjtBQ21SSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRGpSTjtBQ3NSQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0FEcFJGO0FDc1JFO0VBQ0Usb0JBQUE7QURwUko7QUN1UkU7RUFDRSxVQUFBO0FEclJKO0FDd1JFO0VBQ0UsVUFBQTtBRHRSSjtBQ3VSSTtFQUNFLDJDQUFBO0FEclJOO0FDeVJFO0VBQ0Usa0JBQUE7QUR2Uko7QUMwUkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FEeFJKO0FDMlJFO0VBQ0UsbUJDbGlDSTtBRnl3QlI7QUMwUkk7RUFDRSxjQUFBO0FEeFJOO0FDMlJFO0VBQ0UsbUJDemlDRTtBRmd4Qk47QUMwUkk7RUFDRSxrQkFBQTtBRHhSTjtBQzJSRTtFQUNFLG1CQzdpQ0c7QUZveEJQO0FDMFJJO0VBQ0UsbUJBQUE7QUR4Uk47QUM0UkU7RUFDRSxpQkFBQTtBRDFSSjtBQzJSSTtFQUNFLFlBQUE7QUR6Uk47QUM4UkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUQzUkY7QUM2UkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRDNSSjtBQzRSSTtFQUNFLGVBQUE7RUFPQSxxQkFBQTtBRGhTTjtBQzRSUTtFQUNFLDZCQUFBO0FEMVJWO0FDZ1NRO0VBQ0Usa0NBQUE7QUQ5UlY7QUNpU1E7RUFDRSxxQkNubENIO0VEb2xDRyxjQ3BsQ0g7QUZxekJQO0FDbVNNOztFQUVFLGFBQUE7RUFDQSxxQkFBQTtBRGpTUjtBQ21TTTtFQUNFLDhCQUFBO0FEalNSO0FDb1NNO0VBQ0UsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURsU1I7QUNxU007RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0FEblNSO0FDb1NRO0VBQ0UsUUFBQTtFQUNBLGVBQUE7QURsU1Y7QUNzU007RUFDRSxtQkFBQTtBRHBTUjtBQ3NTUTtFQUNFLDJCQUFBO0FEcFNWO0FDdVNRO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBRHJTVjtBQzRTQTtFQUNFLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUR6U0Y7QUMyU0U7RUFDRSx5QkFBQTtBRHpTSjtBQzJTRTtFQUNFLGdCQUFBO0VBQ0EsUUFBQTtBRHpTSjtBQzZTQTtFQUNFLG1FQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRDFTRjtBQzZTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUQxU0Y7QUMyU0U7RUFDRSxZQUFBO0FEelNKO0FDNFNFO0VBQ0Usd0JBQUE7QUQxU0o7QUM2U0U7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FENVNKO0FDOFNFO0VBQ0UsbUNBQUE7QUQ1U0o7QUM4U0U7RUFDRSxvQ0FBQTtBRDVTSjtBQ2dUQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FEOVNGO0FDK1NFO0VBQ0UsU0FBQTtBRDdTSjtBQytTRTtFQUNFLGdCQUFBO0FEN1NKO0FDK1NFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEN1NKO0FDOFNJO0VBRUUsc0JBQUE7QUQ3U047QUMrU0k7RUFDRSxnQkFBQTtBRDdTTjtBQytTSTtFQUNFLGtCQUFBO0FEN1NOO0FDa1RBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEL1NGO0FDZ1RFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRDlTSjtBQ2dURTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUQ5U0o7QUNnVEU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUQ5U0o7QUNnVEU7O0VBRUUsY0N4dkNHO0VEeXZDSCxnQkFBQTtBRDlTSjtBQ2dURTtFQUNFLGdCQUFBO0FEOVNKO0FDZ1RFO0VBQ0UsZ0JBQUE7QUQ5U0o7QUNrVEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FEL1NGIiwiZmlsZSI6InNyYy9hcHAvc2Nzcy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpyb290IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAtLXBhcmFncmFwaDogI2ZmZjtcbiAgLS1jb2xvcjogIzExMTtcbiAgLS1jb2xvci1yZ2I6IDE3LCAxNywgMTc7XG4gIC0tYmFja2dyb3VuZC1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG59XG5cbjpyb290cyB7XG4gIC0tYmFja2dyb3VuZDogIzAwMDtcbiAgLS1wYXJhZ3JhcGg6ICMxMTE7XG4gIC0tY29sb3I6ICNlZWU7XG4gIC0tY29sb3ItcmdiOiAyMzgsIDIzOCwgMjM4O1xuICAtLWJhY2tncm91bmQtZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XG59XG5cbkBzdXBwb3J0cyAodG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICA6cm9vdCB7XG4gICAgLS1zYWZlLWFyZWEtaW5zZXQtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLXNhZmUtYXJlYS1pbnNldC1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgICAtLXNhZmUtYXJlYS1pbnNldC1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0tc2FmZS1hcmVhLWluc2V0LWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgfVxufVxuQHN1cHBvcnRzICh0b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICA6cm9vdCB7XG4gICAgLS1zYWZlLWFyZWEtaW5zZXQtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1zYWZlLWFyZWEtaW5zZXQtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICAgIC0tc2FmZS1hcmVhLWluc2V0LWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0tc2FmZS1hcmVhLWluc2V0LWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gIH1cbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNGIFBybyBEaXNwbGF5LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ucmljaGllLWhlYWRlci1zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KSB7XG4gIC5iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLmJhY2tncm91bmQtc3BhY2VyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzOTlweCkge1xuICAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgfVxuXG4gIC5iYWNrZ3JvdW5kLXNwYWNlciB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sYW5kaW5nLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMiAqIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogLTE7XG4gIGZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1maWx0ZXIpO1xufVxuLmJhY2tncm91bmQuZnVsbCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi50aS50aS11c2VyLWNhcmQ6OmJlZm9yZSB7XG4gIG1hc2staW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy91c2VyLWNhcmQuc3ZnXCIpO1xufVxuXG5hW3JpY2hpZV0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDg4ZmY7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbmFbcmljaGllXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDg4ZmY7XG4gIHdpZHRoOiAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvdHRvbTogMDtcbn1cbmFbcmljaGllXTpob3Zlcjo6YmVmb3JlLCBhW3JpY2hpZV06YWN0aXZlOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbmFbcmljaGllXTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuYVtyaWNoaWVdIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgdG9wOiAycHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xuICAubG9naW5ib3gge1xuICAgIHRvcDogY2FsYyg1MCUgKyAyNXB4KTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxMHB4IC0gZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgLSBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICk7XG4gIH1cbiAgLmxvZ2luYm94IGgxIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAubG9naW5ib3ggLnNlcnZpY2VzIC5zZXJ2aWNlIHtcbiAgICB3aWR0aDogY2FsYyg0MCUpO1xuICB9XG4gIC5sb2dpbmJveCAuc2VydmljZXMgLnNlcnZpY2U6bm90KE9ERCkge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5yZWFzb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5sb2dpbmJveCAuc2VydmljZXMgLnNlcnZpY2Uge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XG4gIC5sb2dpbmJveCB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHJpZ2h0OiAxMHZ3O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICAubG9naW5ib3ggLnNlcnZpY2VzIC5zZXJ2aWNlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gIH1cbn1cbi5sb2dpbmJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmxvZ2luYm94ICoge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmxvZ2luYm94IGgxIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubG9naW5ib3ggcCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubG9naW5ib3ggLnNlcnZpY2VzIHtcbiAgbWFyZ2luOiAzMHB4IDUwcHg7XG59XG4ubG9naW5ib3ggLnNlcnZpY2VzIC5zZXJ2aWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ubG9naW5ib3ggLnNlcnZpY2VzIC5zZXJ2aWNlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvZ2luYm94IC5zZXJ2aWNlcyAuc2VydmljZTpob3ZlciwgLmxvZ2luYm94IC5zZXJ2aWNlcyAuc2VydmljZTpmb2N1cyB7XG4gIGNvbG9yOiAjMTExO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmxvZ2luYm94IC5zZXJ2aWNlcyAuc2VydmljZTpob3ZlciBpLCAubG9naW5ib3ggLnNlcnZpY2VzIC5zZXJ2aWNlOmZvY3VzIGkge1xuICBjb2xvcjogIzExMTtcbn1cbi5sb2dpbmJveCAuc2VydmljZXMgLnNlcnZpY2UgaSB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRvcDogMXB4O1xufVxuLmxvZ2luYm94IC5zZXJ2aWNlcyAuc2VydmljZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJTaWduIGluIHdpdGhcIjtcbn1cblxuLnJlYXNvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA0NXZ3O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5yZWFzb25zIGgxIHtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlYXNvbnMgaDE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbiAgei1pbmRleDogLTE7XG59XG4ucmVhc29ucyBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLnNlYXJjaEJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuZm9ybSB7XG4gIHotaW5kZXg6IDI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmZvcm0gaW5wdXQge1xuICBjb2xvcjogaW5oZXJpdCwgdmFyKC0tY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5mb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiBpbmhlcml0LCBjdXJyZW50Q29sb3I7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIG9wYWNpdHk6IDAuNztcbn1cbmZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIG1hc2staW1hZ2U6IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9UaW1vU2NoZXVlcm1hbm4vVGltb3MtSWNvbnNAbGF0ZXN0L2RvY3MvaWNvblNldC9zdmcvc2VhcmNoLnN2Z1wiKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFzay1zaXplOiBjb250YWluO1xuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5mb3JtIGlucHV0W3R5cGU9c3VibWl0XVtpc1NlYXJjaGluZz10cnVlXSB7XG4gIGFuaW1hdGlvbjogc2VhcmNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbn1cbkBrZXlmcmFtZXMgc2VhcmNoIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDAuOCk7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDAwcHgpIHtcbiAgLnNlcGVyYXRvciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuLnNlcGVyYXRvciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogY2FsYyg1MHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgei1pbmRleDogNTtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMHB4IDEwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFyYWdyYXBoKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwcHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiA0cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uc2VwZXJhdG9yICoge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5zZXBlcmF0b3IgKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmZpbHRlciB7XG4gIHBhZGRpbmc6IDVweCAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLXJnYiksIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZpbHRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVyIGkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdG9wOiAycHg7XG59XG4uZmlsdGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcbiAgLnJlc3VsdHMge1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLnJlc3VsdHMge1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi5yZXN1bHRzIHtcbiAgcGFkZGluZzogMHB4IDEwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4ucmVzdWx0cyAucmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXJhZ3JhcGgpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnJlc3VsdHMgLnJlc3VsdCAucXVlc3Rpb24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVzdWx0cyAucmVzdWx0IC5hbnN3ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5yZXN1bHRzIC5yZXN1bHQgLmFjdGlvbnMge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlc3VsdHMgLnJlc3VsdCAuYWN0aW9ucyAuYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4ucmVzdWx0cyAucmVzdWx0IC5hY3Rpb25zIC5hY3Rpb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlc3VsdHMgLnJlc3VsdCAuYWN0aW9ucyAuYWN0aW9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5yZXN1bHRzIC5yZXN1bHQgLmFjdGlvbnMgLmFjdGlvbjpudGgtY2hpbGQoNCkge1xuICBjb2xvcjogcmdiYSh2YXIoLS1jb2xvciksIDAuNSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcbiAgLnBvcFVwIC5jYXJkIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA1cHggNXB4O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnBvcFVwIC5jYXJkIC5pY29uQnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucG9wVXAgLmNhcmQgLmNsb3NlIHtcbiAgICB6LWluZGV4OiAyMDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5wb3BVcC5vcGVuZWQgLmNhcmQge1xuICAgIGJvdHRvbTogMCU7XG4gIH1cbiAgLnBvcFVwLmNsb3NlZCAuY2FyZCB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xuICAucG9wVXAgLmNhcmQge1xuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5wb3BVcC5vcGVuZWQgLmNhcmQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB9XG4gIC5wb3BVcC5jbG9zZWQgLmNhcmQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICB9XG59XG4ucG9wVXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiA0MDA7XG59XG4ucG9wVXAuY2xvc2VkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbn1cbi5wb3BVcC5vcGVuZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xufVxuLnBvcFVwIC5jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXJhZ3JhcGgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuLnBvcFVwIC5jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucG9wVXAgLmNhcmQgLnR5cGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbn1cbi5wb3BVcCAuY2FyZCBoMSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhcmFncmFwaCk7XG4gIHotaW5kZXg6IDIwMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAyMHB4IDQwcHggMHB4IDIwcHg7XG59XG4ucG9wVXAgLmNhcmQgKiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wb3BVcCAuY2FyZCAuZmlsdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucG9wVXAgLmNhcmQgLmZpbHRlciAqIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ucG9wVXAgLmNhcmQgLmZpbHRlciBpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucG9wVXAgLmNhcmQgLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9wVXAgLmNhcmQgLmJ1dHRvbnMgLmljb25CdXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbn1cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xuICAuZ3JpZC0zLTEge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmdyaWQtMS0xLTEtMSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIC5ncmlkLTEtMSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLmdyaWQtMy0xIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gIH1cblxuICAuZ3JpZC0xLTEtMS0xIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG5cbiAgLmdyaWQtMS0xIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KSB7XG4gIC5ibHVyVGl0bGUge1xuICAgIHRvcDogY2FsYygxMDBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDM5OXB4KSB7XG4gIC5ibHVyVGl0bGUge1xuICAgIHRvcDogY2FsYyg4NXB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgfVxufVxuLmJsdXJUaXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cblxuLmljb25CdXR0b24ge1xuICBjb2xvcjogIzAwODhmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwODhmZjtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IGluaGVyaXQsIDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uaWNvbkJ1dHRvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pY29uQnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uaWNvbkJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gIHRyYW5zaXRpb246IDAuMzVzIGVhc2UtaW4tb3V0O1xufVxuLmljb25CdXR0b246YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xufVxuLmljb25CdXR0b246aG92ZXIsIC5pY29uQnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pY29uQnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5pY29uQnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICB3aWR0aDogY2FsYygxMDAlICsgMTBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2ZmMzc1Zjtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMzMGQxNTg7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMwMDg4ZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLnBhcmFncmFwaCB7XG4gICAgbWFyZ2luOiA1MHB4IDEwJTtcbiAgfVxuICAucGFyYWdyYXBoIC5wYXJhZ3JhcGgge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xuICAucGFyYWdyYXBoIHtcbiAgICBtYXJnaW46IDUwcHggMHB4O1xuICB9XG4gIC5wYXJhZ3JhcGggLnBhcmFncmFwaCB7XG4gICAgbWFyZ2luOiAwcHggLTQwcHg7XG4gIH1cbn1cbi5wYXJhZ3JhcGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhcmFncmFwaCk7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYXJhZ3JhcGggKiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wYXJhZ3JhcGggcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zb2NpYWxNZWRpYUFjY291bnRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC1nYXA6IDQwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnNvY2lhbE1lZGlhQWNjb3VudHMgLnNvY2lhbEFjY291bnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvY2lhbE1lZGlhQWNjb3VudHMgLnNvY2lhbEFjY291bnQ6bm90KDpob3Zlcikge1xuICBjb2xvcjogdW5zZXQ7XG59XG4uc29jaWFsTWVkaWFBY2NvdW50cyAuc29jaWFsQWNjb3VudDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uc29jaWFsTWVkaWFBY2NvdW50cyAuc29jaWFsQWNjb3VudCAqIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNvY2lhbE1lZGlhQWNjb3VudHMgLnNvY2lhbEFjY291bnQgaSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAzZW07XG59XG4uc29jaWFsTWVkaWFBY2NvdW50cyAuc29jaWFsQWNjb3VudCAuYWNjb3VudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi50eXBlIHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnR5cGUgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnR5cGU6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnR5cGVbYWN0aXZlPXRydWVdIHtcbiAgb3BhY2l0eTogMTtcbn1cbi50eXBlW2FjdGl2ZT10cnVlXSAubmFtZSB7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4udHlwZTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnR5cGUgLm5hbWUge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnR5cGUgLm5ldyB7XG4gIGJhY2tncm91bmQ6ICMzMGQxNTg7XG59XG4udHlwZSAubmV3OjpiZWZvcmUge1xuICBjb250ZW50OiBcIk5ldVwiO1xufVxuLnR5cGUgLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZjM3NWY7XG59XG4udHlwZSAuZGVsZXRlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkzDtnNjaGVuXCI7XG59XG4udHlwZSAuZmVlZGJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMDA4OGZmO1xufVxuLnR5cGUgLmZlZWRiYWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkZlZWRiYWNrXCI7XG59XG4udHlwZSAuYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udHlwZSAuYW1vdW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcInhcIjtcbn1cblxuLnRhYmxlV3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnRhYmxlV3JhcHBlciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLnRhYmxlV3JhcHBlciB0YWJsZSB0ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLnRhYmxlV3JhcHBlciB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xufVxuLnRhYmxlV3JhcHBlciB0YWJsZSB0cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTM2LCAyNTUsIDAuNSk7XG59XG4udGFibGVXcmFwcGVyIHRhYmxlIHRyOmhvdmVyIC5sZWN0dXJlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA4OGZmO1xuICBjb2xvcjogIzAwODhmZjtcbn1cbi50YWJsZVdyYXBwZXIgdGFibGUgdHIgdGgsXG4udGFibGVXcmFwcGVyIHRhYmxlIHRyIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLnRhYmxlV3JhcHBlciB0YWJsZSB0ciB0aCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi50YWJsZVdyYXBwZXIgdGFibGUgdHIgLmxlY3R1cmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLXJnYiksIDAuNik7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbi50YWJsZVdyYXBwZXIgdGFibGUgdHIgLmFtb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWNvbG9yKSwgMC44KTtcbn1cbi50YWJsZVdyYXBwZXIgdGFibGUgdHIgLmFtb3VudCBpIHtcbiAgdG9wOiAxcHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cbi50YWJsZVdyYXBwZXIgdGFibGUgdHIgdGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnRhYmxlV3JhcHBlciB0YWJsZSB0ciB0ZCAubmFtZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi50YWJsZVdyYXBwZXIgdGFibGUgdHIgdGQgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lnbmVkSW5XaXRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jb2xvci1yZ2IpLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNpZ25lZEluV2l0aDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJTaWduZWQgaW4gd2l0aFwiO1xufVxuLnNpZ25lZEluV2l0aCBpIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgdG9wOiAxcHg7XG59XG5cbi5jaGFydCB7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KCNmZjM3NWYgMTAlLCAjMzBkMTU4IDEwJSAyMCUsICMwMDg4ZmYgMCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNsb3NlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLmNsb3NlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNsb3NlW2FjdGl2ZT1mYWxzZV0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY2xvc2U6YmVmb3JlLCAuY2xvc2U6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xufVxuLmNsb3NlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcpO1xufVxuLmNsb3NlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcpO1xufVxuXG4uZm9yT2ZvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvck9mb3IgKiB7XG4gIG1hcmdpbjogMDtcbn1cbi5mb3JPZm9yIHAge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmZvck9mb3IgLmljb25CdXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuLmZvck9mb3IgLmljb25CdXR0b246aG92ZXIsIC5mb3JPZm9yIC5pY29uQnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICMxMTEgIWltcG9ydGFudDtcbn1cbi5mb3JPZm9yIC5pY29uQnV0dG9uOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmZvck9mb3IgLmljb25CdXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnN0YXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3RhdCAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdGF0IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5zdGF0IC5pY29uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5zdGF0IC5udW1iZXIsXG4uc3RhdCAudGV4dCB7XG4gIGNvbG9yOiAjMDA4OGZmO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuLnN0YXQgLm51bWJlciB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uc3RhdCAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hbmNob3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcclxuXHJcbjpyb290IHtcclxuICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgLS1wYXJhZ3JhcGg6ICNmZmY7XHJcbiAgLS1jb2xvcjogIzExMTtcclxuICAtLWNvbG9yLXJnYjogMTcsIDE3LCAxNztcclxuICAtLWJhY2tncm91bmQtZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xyXG59XHJcblxyXG46cm9vdHMge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMDtcclxuICAtLXBhcmFncmFwaDogIzExMTtcclxuICAtLWNvbG9yOiAjZWVlO1xyXG4gIC0tY29sb3ItcmdiOiAyMzgsIDIzOCwgMjM4O1xyXG4gIC0tYmFja2dyb3VuZC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIEBzdXBwb3J0cyAodG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xyXG4gICAgLS1zYWZlLWFyZWEtaW5zZXQtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICAgIC0tc2FmZS1hcmVhLWluc2V0LXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xyXG4gICAgLS1zYWZlLWFyZWEtaW5zZXQtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIC0tc2FmZS1hcmVhLWluc2V0LWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcclxuICB9XHJcbiAgQHN1cHBvcnRzICh0b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xyXG4gICAgLS1zYWZlLWFyZWEtaW5zZXQtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XHJcbiAgICAtLXNhZmUtYXJlYS1pbnNldC1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XHJcbiAgICAtLXNhZmUtYXJlYS1pbnNldC1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIC0tc2FmZS1hcmVhLWluc2V0LWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcbiAgfVxyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTRiBQcm8gRGlzcGxheSwgU2Vnb2UgVUksXHJcbiAgICBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSxcclxuICAgIFNlZ29lIFVJIFN5bWJvbDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmgyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5yaWNoaWUtaGVhZGVyLXN0aWNreSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KSB7XHJcbiAgLmJhY2tncm91bmQge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgLmJhY2tncm91bmQtc3BhY2VyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDM5OXB4KSB7XHJcbiAgLmJhY2tncm91bmQge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gIH1cclxuICAuYmFja2dyb3VuZC1zcGFjZXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sYW5kaW5nLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcclxuICBwYWRkaW5nLXRvcDogY2FsYygyICogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGZpbHRlcjogdmFyKC0tYmFja2dyb3VuZC1maWx0ZXIpO1xyXG4gICYuZnVsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG5cclxuLnRpLnRpLXVzZXItY2FyZDo6YmVmb3JlIHtcclxuICBtYXNrLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdXNlci1jYXJkLnN2Z1wiKTtcclxufVxyXG5cclxuYVtyaWNoaWVdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAkYmx1ZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUge1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XHJcbiAgd2lkdGg6IDRweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG4vLyAgIG5hdiB7XHJcbi8vICAgICAubWVudSB7XHJcbi8vICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGlua3Mge1xyXG4vLyAgICAgICAuYWN0aXZlIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtM3B4IDBweCAkYmx1ZTtcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgKiB7XHJcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHJcbi8vICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4vLyAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuXHJcbi8vICAgICAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuLy8gICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIC51c2VyIHtcclxuLy8gICAgICAgLmljb24ge1xyXG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4vLyAgIG5hdiB7XHJcbi8vICAgICAubGlua3Mge1xyXG4vLyAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA4MHB4KTtcclxuLy8gICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgICAgbWF4LWhlaWdodDogMHZoO1xyXG4vLyAgICAgICB6LWluZGV4OiAxMDE7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbi8vICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICYub3BlbiB7XHJcbi8vICAgICAgICAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xyXG4vLyAgICAgICAgIGFuaW1hdGlvbjogb3Blbk5hdiAxLjVzIGVhc2UtaW4tb3V0IGJvdGg7XHJcbi8vICAgICAgICAgKiB7XHJcbi8vICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzIGVhc2U7XHJcbi8vICAgICAgICAgICBhbmltYXRpb246IGl0ZW1OYXYgMS41cyBlYXNlLWluLW91dCBib3RoO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgKiB7XHJcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIC51c2VyIHtcclxuLy8gICAgICAgLm5hbWUge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIEBrZXlmcmFtZXMgb3Blbk5hdiB7XHJcbi8vICAgZnJvbSB7XHJcbi8vICAgICBtYXgtaGVpZ2h0OiAwdmg7XHJcbi8vICAgICBwYWRkaW5nOiAwcHggNDBweCAwcHg7XHJcbi8vICAgfVxyXG4vLyAgIHRvIHtcclxuLy8gICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4vLyAgICAgcGFkZGluZzogNTBweCA0MHB4IDBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gQGtleWZyYW1lcyBpdGVtTmF2IHtcclxuLy8gICAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xyXG4vLyAgIH1cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIG5hdiB7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgcG9zaXRpb246IHN0aWNreTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4vLyAgIHBhZGRpbmc6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSAwXHJcbi8vICAgICBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xyXG5cclxuLy8gICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4vLyAgIHotaW5kZXg6IDEwMDtcclxuXHJcbi8vICAgKiB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnRpdGxlIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gICAgIHotaW5kZXg6IDEwMjtcclxuLy8gICB9XHJcblxyXG4vLyAgIC51c2VyIHtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgLm5hbWUge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAubmFtZSB7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgIG9wYWNpdHk6IDAuODtcclxuLy8gICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmljb24ge1xyXG4vLyAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbi8vICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAubWVudSB7XHJcbi8vICAgei1pbmRleDogMTAyO1xyXG4vLyAgICZbYWN0aXZlPVwidHJ1ZVwiXSB7XHJcbi8vICAgICAuaGFtYnVyZ2VyIHtcclxuLy8gICAgICAgc3BhbiB7XHJcbi8vICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4vLyAgICAgICAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgICAgICAgdG9wOiA1MCU7XHJcbi8vICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbi8vICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbi8vICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICAgICAgICB0b3A6IDUwJTtcclxuLy8gICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuaGFtYnVyZ2VyIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDE3cHg7XHJcbi8vICAgICBtYXJnaW46IGNhbGMoKDQwcHggLSAxN3B4KSAvIDIpIGNhbGMoKDQwcHggLSAyMHB4KSAvIDIpO1xyXG5cclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcblxyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgIGhlaWdodDogMnB4O1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbi8vICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuLy8gICAgICAgICB0b3A6IDJweDtcclxuLy8gICAgICAgICBsZWZ0OiAwJTtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgICAgIHRvcDogNTAlO1xyXG4vLyAgICAgICAgIGxlZnQ6IDAlO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbi8vICAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAycHgpO1xyXG4vLyAgICAgICAgIGxlZnQ6IDAlO1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4gIC5sb2dpbmJveCB7XHJcbiAgICB0b3A6IGNhbGMoNTAlICsgMjVweCk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiBjYWxjKFxyXG4gICAgICAxMDAlIC0gMTBweCAtIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpIC0gZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KVxyXG4gICAgKTtcclxuICAgIGgxIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXMge1xyXG4gICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNDAlKTtcclxuICAgICAgICAmOm5vdChPREQpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlYXNvbnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAubG9naW5ib3gge1xyXG4gICAgLnNlcnZpY2VzIHtcclxuICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLmxvZ2luYm94IHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIHJpZ2h0OiAxMHZ3O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAuc2VydmljZXMge1xyXG4gICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW5ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgKiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIH1cclxuICAuc2VydmljZXMge1xyXG4gICAgbWFyZ2luOiAzMHB4IDUwcHg7XHJcbiAgICAuc2VydmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogIzExMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB0b3A6IDFweDtcclxuICAgICAgfVxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiU2lnbiBpbiB3aXRoXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZWFzb25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHdpZHRoOiA0NXZ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgI2ZmZixcclxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcclxuICAgICAgKTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hCYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbmZvcm0ge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGlucHV0IHtcclxuICAgIGNvbG9yOiBpbmhlcml0LCB2YXIoLS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICZbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0LCBjdXJyZW50Q29sb3I7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cclxuICAgICZbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xyXG4gICAgICBtYXNrLWltYWdlOiB1cmwoXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvVGltb1NjaGV1ZXJtYW5uL1RpbW9zLUljb25zQGxhdGVzdC9kb2NzL2ljb25TZXQvc3ZnL3NlYXJjaC5zdmdcIik7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIG1hc2stc2l6ZTogY29udGFpbjtcclxuICAgICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgICAgJltpc1NlYXJjaGluZz1cInRydWVcIl0ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2VhcmNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc2VhcmNoIHtcclxuICAgICAgMCUsXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDAuOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KSB7XHJcbiAgLnNlcGVyYXRvciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlcGVyYXRvciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IGNhbGMoNTBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XHJcbiAgei1pbmRleDogNTtcclxuICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMHB4IDEwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXJhZ3JhcGgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoNTBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogNHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAqIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jb2xvci1yZ2IpLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDJweDtcclxuICB9XHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcclxuICAucmVzdWx0cyB7XHJcbiAgICBjb2x1bW5zOiAxO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLnJlc3VsdHMge1xyXG4gICAgY29sdW1uczogMjtcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICBwYWRkaW5nOiAwcHggMTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgLnJlc3VsdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFyYWdyYXBoKTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgLnF1ZXN0aW9uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnN3ZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuYWN0aW9uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tY29sb3IpLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDg0OXB4KSB7XHJcbiAgLnBvcFVwIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA1cHggNXB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XHJcblxyXG4gICAgICAuaWNvbkJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgei1pbmRleDogMjAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IGluaGVyaXQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgJi5vcGVuZWQge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5jbG9zZWQge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm90dG9tOiAtMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAucG9wVXAge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgJi5vcGVuZWQge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuY2xvc2VkIHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wVXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgJi5jbG9zZWQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgfVxyXG4gICYub3BlbmVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gIH1cclxuICB6LWluZGV4OiA0MDA7XHJcbiAgLmNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFyYWdyYXBoKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudHlwZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFyYWdyYXBoKTtcclxuICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNDBweCAwcHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAqIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgfVxyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5pY29uQnV0dG9uIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAmOmZvY3VzIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4gIC5ncmlkLTMtMSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgLmdyaWQtMS0xLTEtMSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtMS0xIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLmdyaWQtMy0xIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcclxuICB9XHJcbiAgLmdyaWQtMS0xLTEtMSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIH1cclxuICAuZ3JpZC0xLTEge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDAwcHgpIHtcclxuICAuYmx1clRpdGxlIHtcclxuICAgIHRvcDogY2FsYygxMDBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LWhlaWdodDogMzk5cHgpIHtcclxuICAuYmx1clRpdGxlIHtcclxuICAgIHRvcDogY2FsYyg4NXB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcclxuICB9XHJcbn1cclxuXHJcbi5ibHVyVGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmljb25CdXR0b24ge1xyXG4gIGNvbG9yOiAkYmx1ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcclxuXHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdCwgMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjBweDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiAkcmVkO1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6ICRncmVlbjtcclxufVxyXG4uYmx1ZSB7XHJcbiAgY29sb3I6ICRibHVlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLnBhcmFncmFwaCB7XHJcbiAgICBtYXJnaW46IDUwcHggMTAlO1xyXG4gICAgLnBhcmFncmFwaCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcclxuICAucGFyYWdyYXBoIHtcclxuICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICAucGFyYWdyYXBoIHtcclxuICAgICAgbWFyZ2luOiAwcHggLTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyYWdyYXBoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFyYWdyYXBoKTtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxufVxyXG5cclxuLnNvY2lhbE1lZGlhQWNjb3VudHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICBncmlkLWdhcDogNDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAuc29jaWFsQWNjb3VudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpub3QoOmhvdmVyKSB7XHJcbiAgICAgIGNvbG9yOiB1bnNldDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgKiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgfVxyXG4gICAgLmFjY291bnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnR5cGUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAmW2FjdGl2ZT1cInRydWVcIl0ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC5uYW1lIHtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoI2ZmZiwgMC44KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIC5uZXcge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJOZXVcIjtcclxuICAgIH1cclxuICB9XHJcbiAgLmRlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJMw7ZzY2hlblwiO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmVlZGJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIkZlZWRiYWNrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW1vdW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJ4XCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGVXcmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgdHIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOm50aC1jaGlsZChPREQpIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAycHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGJsdWUsIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGVjdHVyZSB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGgsXHJcbiAgICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGVjdHVyZSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jb2xvci1yZ2IpLCAwLjYpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbW91bnQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tY29sb3IpLCAwLjgpO1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNpZ25lZEluV2l0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jb2xvci1yZ2IpLCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJTaWduZWQgaW4gd2l0aFwiO1xyXG4gIH1cclxuICBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICB0b3A6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoJHJlZCAxMCUsICRncmVlbiAxMCUgMjAlLCAkYmx1ZSAwKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICByaWdodDogNXB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gICZbYWN0aXZlPVwiZmFsc2VcIl0ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcclxuICB9XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNyk7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcpO1xyXG4gIH1cclxufVxyXG5cclxuLmZvck9mb3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICB9XHJcbiAgLmljb25CdXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjMTExICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGF0IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgLmljb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIC5udW1iZXIsXHJcbiAgLnRleHQge1xyXG4gICAgY29sb3I6ICRibHVlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICB9XHJcbiAgLm51bWJlciB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFuY2hvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxufVxyXG4iLCIkbW9iaWxlOiA4NDlweDtcclxuJGJyb3dzZXI6IDg1MHB4O1xyXG4kcmVkOiByZ2IoMjU1LCA1NSwgOTUpO1xyXG4kZ3JlZW46IHJnYig0OCwgMjA5LCA4OCk7XHJcbiRibHVlOiByZ2IoMCwgMTM2LCAyNTUpO1xyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");


const ɵ0 = { title: "Richie | Not Found" };
const routes = [
    {
        path: "",
        redirectTo: "/search",
        pathMatch: "full"
    },
    {
        path: "**",
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"],
        data: ɵ0
    }
];
class AppRoutingModule {
}



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_richie_header_richie_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/richie-header/richie-header.component.ngfactory */ "./src/app/shared/richie-header/richie-header.component.ngfactory.js");
/* harmony import */ var _shared_richie_header_richie_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/richie-header/richie-header.component */ "./src/app/shared/richie-header/richie-header.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_notification_notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/notification/notification.component.ngfactory */ "./src/app/shared/notification/notification.component.ngfactory.js");
/* harmony import */ var _shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/notification/notification.component */ "./src/app/shared/notification/notification.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _shared_richie_cookie_richie_cookie_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/richie-cookie/richie-cookie.component.ngfactory */ "./src/app/shared/richie-cookie/richie-cookie.component.ngfactory.js");
/* harmony import */ var _shared_richie_cookie_richie_cookie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/richie-cookie/richie-cookie.component */ "./src/app/shared/richie-cookie/richie-cookie.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _shared_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/theme.service */ "./src/app/shared/theme.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-header", [], null, null, null, _shared_richie_header_richie_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RichieHeaderComponent_0"], _shared_richie_header_richie_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RichieHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_richie_header_richie_header_component__WEBPACK_IMPORTED_MODULE_3__["RichieHeaderComponent"], [_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "richie-notification", [], null, null, null, _shared_notification_notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NotificationComponent_0"], _shared_notification_notification_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NotificationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, null, 0, _shared_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "richie-cookie", [], null, null, null, _shared_richie_cookie_richie_cookie_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_RichieCookieComponent_0"], _shared_richie_cookie_richie_cookie_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_RichieCookieComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _shared_richie_cookie_richie_cookie_component__WEBPACK_IMPORTED_MODULE_10__["RichieCookieComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).stopPropa($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"], _shared_theme_service__WEBPACK_IMPORTED_MODULE_13__["ThemeService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class AppComponent {
    constructor(breakpointObserver, themeService) {
        this.breakpointObserver = breakpointObserver;
        this.themeService = themeService;
    }
    ngOnInit() {
        this.subcription = this.breakpointObserver
            .observe(['(prefers-color-scheme: dark)'])
            .subscribe((state) => {
            this.themeService.setTheme(state.matches ? 'dark' : 'light');
        });
    }
    stopPropa(event) {
        event.stopPropagation();
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _search_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search/search.component.ngfactory */ "./src/app/search/search/search.component.ngfactory.js");
/* harmony import */ var _information_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information/home/home.component.ngfactory */ "./src/app/information/home/home.component.ngfactory.js");
/* harmony import */ var _information_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information/about/about.component.ngfactory */ "./src/app/information/about/about.component.ngfactory.js");
/* harmony import */ var _information_legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information/legal/legal.component.ngfactory */ "./src/app/information/legal/legal.component.ngfactory.js");
/* harmony import */ var _information_impressum_impressum_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./information/impressum/impressum.component.ngfactory */ "./src/app/information/impressum/impressum.component.ngfactory.js");
/* harmony import */ var _management_admin_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./management/admin/admin.component.ngfactory */ "./src/app/management/admin/admin.component.ngfactory.js");
/* harmony import */ var _management_settings_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./management/settings/settings.component.ngfactory */ "./src/app/management/settings/settings.component.ngfactory.js");
/* harmony import */ var _management_feedback_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./management/feedback/feedback.component.ngfactory */ "./src/app/management/feedback/feedback.component.ngfactory.js");
/* harmony import */ var _management_review_review_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./management/review/review.component.ngfactory */ "./src/app/management/review/review.component.ngfactory.js");
/* harmony import */ var _management_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./management/login/login.component.ngfactory */ "./src/app/management/login/login.component.ngfactory.js");
/* harmony import */ var _question_question_question_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question/question/question.component.ngfactory */ "./src/app/question/question/question.component.ngfactory.js");
/* harmony import */ var _question_add_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question/add/add.component.ngfactory */ "./src/app/question/add/add.component.ngfactory.js");
/* harmony import */ var _not_found_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component.ngfactory */ "./src/app/not-found/not-found.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth.interceptor.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _question_question_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./question/question.service */ "./src/app/question/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _search_search_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./search/search/search.component */ "./src/app/search/search/search.component.ts");
/* harmony import */ var _search_search_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search/search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _information_home_home_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./information/home/home.component */ "./src/app/information/home/home.component.ts");
/* harmony import */ var _information_information_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./information/information.module */ "./src/app/information/information.module.ts");
/* harmony import */ var _information_about_about_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./information/about/about.component */ "./src/app/information/about/about.component.ts");
/* harmony import */ var _information_legal_legal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./information/legal/legal.component */ "./src/app/information/legal/legal.component.ts");
/* harmony import */ var _information_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./information/impressum/impressum.component */ "./src/app/information/impressum/impressum.component.ts");
/* harmony import */ var _management_admin_admin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./management/admin/admin.component */ "./src/app/management/admin/admin.component.ts");
/* harmony import */ var _management_auth_guard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./management/auth.guard */ "./src/app/management/auth.guard.ts");
/* harmony import */ var _management_management_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./management/management.module */ "./src/app/management/management.module.ts");
/* harmony import */ var _management_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./management/settings/settings.component */ "./src/app/management/settings/settings.component.ts");
/* harmony import */ var _management_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./management/feedback/feedback.component */ "./src/app/management/feedback/feedback.component.ts");
/* harmony import */ var _management_review_review_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./management/review/review.component */ "./src/app/management/review/review.component.ts");
/* harmony import */ var _management_login_login_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./management/login/login.component */ "./src/app/management/login/login.component.ts");
/* harmony import */ var _question_question_question_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./question/question/question.component */ "./src/app/question/question/question.component.ts");
/* harmony import */ var _question_question_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./question/question.module */ "./src/app/question/question.module.ts");
/* harmony import */ var _question_add_add_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./question/add/add.component */ "./src/app/question/add/add.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _shared_theme_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared/theme.service */ "./src/app/shared/theme.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _search_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SearchComponentNgFactory"], _information_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HomeComponentNgFactory"], _information_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AboutComponentNgFactory"], _information_legal_legal_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["LegalComponentNgFactory"], _information_impressum_impressum_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ImpressumComponentNgFactory"], _management_admin_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AdminComponentNgFactory"], _management_settings_settings_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SettingsComponentNgFactory"], _management_feedback_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponentNgFactory"], _management_review_review_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ReviewComponentNgFactory"], _management_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["LoginComponentNgFactory"], _question_question_question_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["QuestionComponentNgFactory"], _question_add_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["AddComponentNgFactory"], _not_found_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, new _auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"](p1_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_h"], _shared_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_notification_service__WEBPACK_IMPORTED_MODULE_26__["NotificationService"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_26__["NotificationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _question_question_service__WEBPACK_IMPORTED_MODULE_27__["QuestionService"], _question_question_service__WEBPACK_IMPORTED_MODULE_27__["QuestionService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_26__["NotificationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_28__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_28__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_28__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_28__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_29__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwRegistrationOptions"], { enabled: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _shared_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_c"](p2_0, p2_1, p2_2, p2_3), _app_module__WEBPACK_IMPORTED_MODULE_1__["checkAuth"](p3_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _shared_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_28__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTER_CONFIGURATION"], { anchorScrolling: "enabled" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTES"], function () { return [[{ path: "search", component: _search_search_search_component__WEBPACK_IMPORTED_MODULE_31__["SearchComponent"], data: _search_search_routing_module__WEBPACK_IMPORTED_MODULE_32__["ɵ0"] }], [{ path: "home", component: _information_home_home_component__WEBPACK_IMPORTED_MODULE_33__["HomeComponent"], data: _information_information_module__WEBPACK_IMPORTED_MODULE_34__["ɵ0"] }, { path: "about", component: _information_about_about_component__WEBPACK_IMPORTED_MODULE_35__["AboutComponent"], data: _information_information_module__WEBPACK_IMPORTED_MODULE_34__["ɵ1"] }, { path: "legal", component: _information_legal_legal_component__WEBPACK_IMPORTED_MODULE_36__["LegalComponent"], data: _information_information_module__WEBPACK_IMPORTED_MODULE_34__["ɵ2"] }, { path: "impressum", component: _information_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_37__["ImpressumComponent"], data: _information_information_module__WEBPACK_IMPORTED_MODULE_34__["ɵ3"] }], [{ path: "admin", component: _management_admin_admin_component__WEBPACK_IMPORTED_MODULE_38__["AdminComponent"], canActivate: [_management_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]], data: _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ɵ0"] }, { path: "settings", component: _management_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__["SettingsComponent"], canActivate: [_management_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]], data: _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ɵ1"] }, { path: "feedback", component: _management_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_42__["FeedbackComponent"], canActivate: [_management_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]], data: _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ɵ2"] }, { path: "review", component: _management_review_review_component__WEBPACK_IMPORTED_MODULE_43__["ReviewComponent"], canActivate: [_management_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]], data: _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ɵ3"] }, { path: "login", component: _management_login_login_component__WEBPACK_IMPORTED_MODULE_44__["LoginComponent"], data: _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ɵ4"] }], [{ path: "question/:id", component: _question_question_question_component__WEBPACK_IMPORTED_MODULE_45__["QuestionComponent"], data: _question_question_module__WEBPACK_IMPORTED_MODULE_46__["ɵ0"] }, { path: "add", component: _question_add_add_component__WEBPACK_IMPORTED_MODULE_47__["AddComponent"], canActivate: [_management_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]], data: _question_question_module__WEBPACK_IMPORTED_MODULE_46__["ɵ1"] }], [{ path: "", redirectTo: "/search", pathMatch: "full" }, { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_48__["NotFoundComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["ɵ0"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_28__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _search_search_routing_module__WEBPACK_IMPORTED_MODULE_32__["SearchRoutingModule"], _search_search_routing_module__WEBPACK_IMPORTED_MODULE_32__["SearchRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_50__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_50__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _search_search_module__WEBPACK_IMPORTED_MODULE_51__["SearchModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_51__["SearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _information_information_module__WEBPACK_IMPORTED_MODULE_34__["InformationModule"], _information_information_module__WEBPACK_IMPORTED_MODULE_34__["InformationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ManagementModule"], _management_management_module__WEBPACK_IMPORTED_MODULE_40__["ManagementModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _question_question_module__WEBPACK_IMPORTED_MODULE_46__["QuestionModule"], _question_question_module__WEBPACK_IMPORTED_MODULE_46__["QuestionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _shared_theme_service__WEBPACK_IMPORTED_MODULE_52__["THEMES"], [{ name: "light", properties: { "--background": " #f0f0f0", "--paragraph": " #fff", "--color": " #111", "--color-rgb": " 17, 17, 17", "--background-filter": " brightness(100%)" } }, { name: "dark", properties: { "--background": " #f0f0f0", "--paragraph": " #fff", "--color": " #111", "--color-rgb": " 17, 17, 17", "--background-filter": " brightness(100%)" } }], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _shared_theme_service__WEBPACK_IMPORTED_MODULE_52__["ACTIVE_THEME"], "light", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: checkAuth, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/app/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");


function checkAuth(userService) {
    return () => userService.checkToken();
}
class AppModule {
}


/***/ }),

/***/ "./src/app/auth.interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
class AuthInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(req, next) {
        if (!req.url.includes('giphy')) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.userService.richieUser.token || ''}`)
            });
        }
        return next.handle(req);
    }
}


/***/ }),

/***/ "./src/app/information/about/about.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/information/about/about.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function() { return RenderType_AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function() { return View_AboutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function() { return View_AboutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function() { return AboutComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ "./src/app/information/about/about.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_AboutComponent = [];
var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AboutComponent, data: {} });

function View_AboutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 9, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Kapitel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "a", [["href", "#admins"], ["richie", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "a", [["href", "#revs"], ["richie", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "i", [["class", "ti ti-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["FAQ"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "div", [["class", "anchor"], ["id", "about"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 8, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Was ist DHBW-Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Vernunft f\u00E4ngt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu bl\u00FChn; Man sehnt sich nach des Lebens goldner Baum. Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet gro\u00DF und klein, Hier bin ich nicht; doch viel ist mir bewusst. Es irrt der Mensch, wenn er sie beim Kragen h\u00E4tte. Vernunft f\u00E4ngt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu bl\u00FChn; Man sehnt sich nach des Lebens Quelle hin. Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er nur Worte h\u00F6rt, Es m\u00FCsse sich dabei doch auch was denken lassen. Vom Rechte, das mit Recht; denn alles, was ihr S\u00FCnde, Zerst\u00F6rung, kurz das B\u00F6se will und stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte h\u00F6rt, Es m\u00FCsse sich dabei doch auch was denken lassen. So schreitet in dem engen Bretterhaus (Theater, B\u00FChne) Den ganzen Kreis der Sch\u00F6pfung aus, Und wandelt mit bed\u00E4chtger Schnelle Vom Himmel durch die Welt zur H\u00F6lle. Dass ich erkenne, was die Welt zur H\u00F6lle! Vernunft f\u00E4ngt wieder an zu sprechen Und Hoffnung wieder an zu bl\u00FChn; Man sehnt sich nach des Lebens goldner Baum. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wer hat Richie Richwood auf die Welt gebracht"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Peter Poorwood"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "div", [["class", "anchor"], ["id", "faq"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 16, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["FAQ"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 5, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wie kann ich Fragen einreichen?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 0, "div", [["class", "close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit suscipit est voluptatum maiores excepturi repellendus, distinctio laudantium dolores culpa minima deserunt neque commodi possimus natus aut sed sint esse. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 3, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wie kann ich Fragen einreichen?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 0, "div", [["active", "false"], ["class", "close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 3, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wie kann ich Fragen einreichen?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 0, "div", [["active", "false"], ["class", "close"]], null, null, null, null, null))], null, null); }
function View_AboutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], [], null, null)], null, null); }
var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/information/about/about.component.ts":
/*!******************************************************!*\
  !*** ./src/app/information/about/about.component.ts ***!
  \******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
class AboutComponent {
}


/***/ }),

/***/ "./src/app/information/home/home.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/information/home/home.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/information/home/home.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_HomeComponent = [];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wissensdatenbank"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 9, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Du hast Fragen?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "div", [["class", "iconButton"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "i", [["class", "ti ti-telegram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Telegram"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "div", [["class", "iconButton"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "i", [["class", "ti ti-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Suche"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 25, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Richie Richwood"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Ich bin von je der Ordnung Freund gewesen. Vernunft f\u00E4ngt wieder an zu sprechen Und Hoffnung wieder an zu bl\u00FChn; Man sehnt sich nach des Lebens goldner Baum. Es irrt der Mensch, wenn er sie beim Kragen h\u00E4tte. Ich bin von je der Ordnung Freund gewesen. Ich h\u00F6re schon des Dorfs Get\u00FCmmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet gro\u00DF und klein, Hier bin ich nicht; doch viel ist mir bewusst. Wenn sich der Mensch, wenn er sie beim Kragen h\u00E4tte. Gew\u00F6hnlich glaubt der Mensch, wenn er sie beim Kragen h\u00E4tte. Es irrt der Mensch, wenn er nur Worte h\u00F6rt, Es m\u00FCsse sich dabei doch auch was denken lassen. So schreitet in dem engen Bretterhaus (Theater, B\u00FChne) Den ganzen Kreis der Sch\u00F6pfung aus, Und wandelt mit bed\u00E4cht'ger Schnelle Vom Himmel durch die Welt zur H\u00F6lle! So schreitet in dem engen Bretterhaus (Theater, B\u00FChne) Den ganzen Kreis der Sch\u00F6pfung aus, Und wandelt mit bed\u00E4chtger Schnelle Vom Himmel durch die Welt zur H\u00F6lle! Vernunft f\u00E4ngt wieder an zu sprechen Und Hoffnung wieder an zu bl\u00FChn; Man sehnt sich nach des Lebens Quelle hin. Vernunft f\u00E4ngt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu bl\u00FChn; Man sehnt sich nach des Lebens Quelle hin. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 20, "div", [["class", "socialMediaAccounts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "div", [["class", "blue socialAccount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 0, "i", [["class", "ti ti-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "div", [["class", "account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["@DHBW-Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 3, "div", [["class", "blue socialAccount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "i", [["class", "ti ti-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "div", [["class", "account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["@DHBW-Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "div", [["class", "blue socialAccount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 0, "i", [["class", "ti ti-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "div", [["class", "account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["@DHBW-Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 3, "div", [["class", "blue socialAccount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 0, "i", [["class", "ti ti-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "div", [["class", "account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["@DHBW-Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 3, "div", [["class", "blue socialAccount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 0, "i", [["class", "ti ti-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "div", [["class", "account"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["@DHBW-Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 8, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Go Pro, unterrichte Richie!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Richie lebt davon neue Sachen zu lernen, um damit anderen Studenten bei Fragen schnell und pr\u00E4zise helfen zu k\u00F6nnen. Ohne die Unterst\u00FCtzung eines Pros ist dies leider nicht m\u00F6glich. Er ist auf Deine Hilfe angewiesen! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn du m\u00F6chteste, dass Richie schlauer wird, um anderen zu Helfen, dann kannst du dich ganz einfach mit einem deiner bereits existierenden Accounts anmelden. Dadurch hast du dann die M\u00F6glichkeit neue Frage zu erstellen und durch einen kurzen Text zu beantworten. Gleichzeitig kannst du dich mit anderen Kommilitionen \u00FCber die Kommentarfunktion austauschen. Anderen wird es mit Sicherheit eine Hilfe sein! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "a", [["href", "#"], ["richie", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ich m\u00F6chte ein Pro werden!"]))], null, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_3__["SharedFunctions"]], null, null)], null, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/information/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/information/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");

class HomeComponent {
    constructor(userService, functions) {
        this.userService = userService;
        this.functions = functions;
        this.constants = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"];
    }
}


/***/ }),

/***/ "./src/app/information/impressum/impressum.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/information/impressum/impressum.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ImpressumComponent, View_ImpressumComponent_0, View_ImpressumComponent_Host_0, ImpressumComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ImpressumComponent", function() { return RenderType_ImpressumComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImpressumComponent_0", function() { return View_ImpressumComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImpressumComponent_Host_0", function() { return View_ImpressumComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponentNgFactory", function() { return ImpressumComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _impressum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impressum.component */ "./src/app/information/impressum/impressum.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_ImpressumComponent = [];
var RenderType_ImpressumComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ImpressumComponent, data: {} });

function View_ImpressumComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Impressum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Impressum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 37, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Angaben gem\u00E4\u00DF \u00A7 5 TMG"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Michael Spengler"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Zollhofgarten 8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Appartement 401"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 69115 Heidelberg"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Kontakt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Telefon: 004915167833869"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" E-Mail: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "a", [["href", "mailto:michael@spengler.biz"], ["richie", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["michael@spengler.biz"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Haftung f\u00FCr Inhalte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Als Diensteanbieter sind wir gem\u00E4\u00DF \u00A7 7 Abs.1 TMG f\u00FCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00A7\u00A7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00FCbermittelte oder gespeicherte fremde Informationen zu \u00FCberwachen oder nach Umst\u00E4nden zu forschen, die auf eine rechtswidrige T\u00E4tigkeit hinweisen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\u00FChrt. Eine diesbez\u00FCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00F6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Haftung f\u00FCr Links"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Unser Angebot enth\u00E4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00F6nnen wir f\u00FCr diese fremden Inhalte auch keine Gew\u00E4hr \u00FCbernehmen. F\u00FCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\u00F6gliche Rechtsverst\u00F6\u00DFe \u00FCberpr\u00FCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Urheberrecht"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00E4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00DFerhalb der Grenzen des Urheberrechtes bed\u00FCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\u00FCr den privaten, nicht kommerziellen Gebrauch gestattet. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. "]))], null, null); }
function View_ImpressumComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-impressum", [], null, null, null, View_ImpressumComponent_0, RenderType_ImpressumComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _impressum_component__WEBPACK_IMPORTED_MODULE_1__["ImpressumComponent"], [], null, null)], null, null); }
var ImpressumComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-impressum", _impressum_component__WEBPACK_IMPORTED_MODULE_1__["ImpressumComponent"], View_ImpressumComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/information/impressum/impressum.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/information/impressum/impressum.component.ts ***!
  \**************************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
class ImpressumComponent {
}


/***/ }),

/***/ "./src/app/information/information.module.ts":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationModule, ɵ0, ɵ1, ɵ2, ɵ3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModule", function() { return InformationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/information/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/information/home/home.component.ts");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/information/impressum/impressum.component.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/information/legal/legal.component.ts");





const ɵ0 = { title: 'Richie | Home' }, ɵ1 = { title: 'Richie | About' }, ɵ2 = { title: 'Richie | Legal' }, ɵ3 = { title: 'Richie | Impressum' };
const commonRoutes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: ɵ0
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
        data: ɵ1
    },
    {
        path: 'legal',
        component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__["LegalComponent"],
        data: ɵ2
    },
    {
        path: 'impressum',
        component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_3__["ImpressumComponent"],
        data: ɵ3
    }
];
class InformationModule {
}



/***/ }),

/***/ "./src/app/information/legal/legal.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/information/legal/legal.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_LegalComponent, View_LegalComponent_0, View_LegalComponent_Host_0, LegalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LegalComponent", function() { return RenderType_LegalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LegalComponent_0", function() { return View_LegalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LegalComponent_Host_0", function() { return View_LegalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponentNgFactory", function() { return LegalComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _legal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal.component */ "./src/app/information/legal/legal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_LegalComponent = [];
var RenderType_LegalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_LegalComponent, data: {} });

function View_LegalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Legal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datenschutzerkl\u00E4rung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 127, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["1. Datenschutz auf einen Blick"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Allgemeine Hinweise"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die folgenden Hinweise geben einen einfachen \u00DCberblick dar\u00FCber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\u00F6nlich identifiziert werden k\u00F6nnen. Ausf\u00FChrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\u00FChrten Datenschutzerkl\u00E4rung. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datenerfassung auf dieser Website"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wer ist verantwortlich f\u00FCr die Datenerfassung auf dieser Website?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\u00F6nnen Sie dem Impressum dieser Website entnehmen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wie erfassen wir Ihre Daten?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.\u00A0B. um Daten handeln, die Sie in ein Kontaktformular eingeben. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.\u00A0B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Wof\u00FCr nutzen wir Ihre Daten?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\u00E4hrleisten. Andere Daten k\u00F6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Welche Rechte haben Sie bez\u00FCglich Ihrer Daten?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sie haben jederzeit das Recht unentgeltlich Auskunft \u00FCber Herkunft, Empf\u00E4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\u00DFerdem ein Recht, die Berichtigung oder L\u00F6schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k\u00F6nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust\u00E4ndigen Aufsichtsbeh\u00F6rde zu. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Au\u00DFerdem haben Sie das Recht, unter bestimmten Umst\u00E4nden die Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerkl\u00E4rung unter \u201ERecht auf Einschr\u00E4nkung der Verarbeitung\u201C. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2. Hosting"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Externes Hosting"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die \u00FCber eine Website generiert werden, handeln. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf\u00FCllung gegen\u00FCber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf\u00FCllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Abschluss eines Vertrages \u00FCber Auftragsverarbeitung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Um die datenschutzkonforme Verarbeitung zu gew\u00E4hrleisten, haben wir einen Vertrag \u00FCber Auftragsverarbeitung mit unserem Hoster geschlossen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["3. Allgemeine Hinweise und Pflichtinformationen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Datenschutz"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\u00F6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\u00E4rung. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers\u00F6nlich identifiziert werden k\u00F6nnen. Die vorliegende Datenschutzerkl\u00E4rung erl\u00E4utert, welche Daten wir erheben und wof\u00FCr wir sie nutzen. Sie erl\u00E4utert auch, wie und zu welchem Zweck das geschieht. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wir weisen darauf hin, dass die Daten\u00FCbertragung im Internet (z.\u00A0B. bei der Kommunikation per E-Mail) Sicherheitsl\u00FCcken aufweisen kann. Ein l\u00FCckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\u00F6glich. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Hinweis zur verantwortlichen Stelle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die verantwortliche Stelle f\u00FCr die Datenverarbeitung auf dieser Website ist: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Michael Spengler"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Zollhofgarten 8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Appartement 401"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 69115 Heidelberg "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Telefon: 004915167833869"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" E-Mail: michael@spengler.biz "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Verantwortliche Stelle ist die nat\u00FCrliche oder juristische Person, die allein oder gemeinsam mit anderen \u00FCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.\u00A0B. Namen, E-Mail-Adressen o. \u00C4.) entscheidet. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Widerruf Ihrer Einwilligung zur Datenverarbeitung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Viele Datenverarbeitungsvorg\u00E4nge sind nur mit Ihrer ausdr\u00FCcklichen Einwilligung m\u00F6glich. Sie k\u00F6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm\u00E4\u00DFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\u00FChrt. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Widerspruchsrecht gegen die Datenerhebung in besonderen F\u00E4llen sowie gegen Direktwerbung (Art. 21 DSGVO) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR\u00DCNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F\u00DCR EIN AUF DIESE BESTIMMUNGEN GEST\u00DCTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL\u00C4RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K\u00D6NNEN ZWINGENDE SCHUTZW\u00DCRDIGE GR\u00DCNDE F\u00DCR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN \u00DCBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS\u00DCBUNG ODER VERTEIDIGUNG VON RECHTSANSPR\u00DCCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO). "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F\u00DCR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO). "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Beschwerderecht bei der zust\u00E4ndigen Aufsichtsbeh\u00F6rde"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Im Falle von Verst\u00F6\u00DFen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh\u00F6rde, insbesondere in dem Mitgliedstaat ihres gew\u00F6hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma\u00DFlichen Versto\u00DFes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recht auf Daten\u00FCbertragbarkeit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\u00FCllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\u00E4ngigen, maschinenlesbaren Format aush\u00E4ndigen zu lassen. Sofern Sie die direkte \u00DCbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SSL- bzw. TLS-Verschl\u00FCsselung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Diese Seite nutzt aus Sicherheitsgr\u00FCnden und zum Schutz der \u00DCbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl\u00FCsselung. Eine verschl\u00FCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Ehttp://\u201C auf \u201Ehttps://\u201C wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn die SSL- bzw. TLS-Verschl\u00FCsselung aktiviert ist, k\u00F6nnen die Daten, die Sie an uns \u00FCbermitteln, nicht von Dritten mitgelesen werden. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Auskunft, L\u00F6schung und Berichtigung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \u00FCber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\u00E4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L\u00F6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\u00F6nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recht auf Einschr\u00E4nkung der Verarbeitung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sie haben das Recht, die Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k\u00F6nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschr\u00E4nkung der Verarbeitung besteht in folgenden F\u00E4llen: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben\u00F6tigen wir in der Regel Zeit, um dies zu \u00FCberpr\u00FCfen. F\u00FCr die Dauer der Pr\u00FCfung haben Sie das Recht, die Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm\u00E4\u00DFig geschah/geschieht, k\u00F6nnen Sie statt der L\u00F6schung die Einschr\u00E4nkung der Datenverarbeitung verlangen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn wir Ihre personenbezogenen Daten nicht mehr ben\u00F6tigen, Sie sie jedoch zur Aus\u00FCbung, Verteidigung oder Geltendmachung von Rechtsanspr\u00FCchen ben\u00F6tigen, haben Sie das Recht, statt der L\u00F6schung die Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw\u00E4gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen \u00FCberwiegen, haben Sie das Recht, die Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr\u00E4nkt haben, d\u00FCrfen diese Daten \u2013 von ihrer Speicherung abgesehen \u2013 nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus\u00FCbung oder Verteidigung von Rechtsanspr\u00FCchen oder zum Schutz der Rechte einer anderen nat\u00FCrlichen oder juristischen Person oder aus Gr\u00FCnden eines wichtigen \u00F6ffentlichen Interesses der Europ\u00E4ischen Union oder eines Mitgliedstaats verarbeitet werden. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 1, "h2", [["id", "cookies"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["4. Datenerfassung auf dieser Website"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cookies"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Die meisten der von uns verwendeten Cookies sind so genannte \u201ESession-Cookies\u201C. Sie werden nach Ende Ihres Besuchs automatisch gel\u00F6scht. Andere Cookies bleiben auf Ihrem Endger\u00E4t gespeichert bis Sie diese l\u00F6schen. Diese Cookies erm\u00F6glichen es uns, Ihren Browser beim n\u00E4chsten Besuch wiederzuerkennen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sie k\u00F6nnen Ihren Browser so einstellen, dass Sie \u00FCber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f\u00FCr bestimmte F\u00E4lle oder generell ausschlie\u00DFen sowie das automatische L\u00F6schen der Cookies beim Schlie\u00DFen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit\u00E4t dieser Website eingeschr\u00E4nkt sein. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](131, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Cookies, die zur Durchf\u00FChrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erw\u00FCnschter Funktionen (z.\u00A0B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie\u00DFlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Soweit andere Cookies (z.\u00A0B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerkl\u00E4rung gesondert behandelt. "]))], null, null); }
function View_LegalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-legal", [], null, null, null, View_LegalComponent_0, RenderType_LegalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _legal_component__WEBPACK_IMPORTED_MODULE_1__["LegalComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LegalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-legal", _legal_component__WEBPACK_IMPORTED_MODULE_1__["LegalComponent"], View_LegalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/information/legal/legal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/information/legal/legal.component.ts ***!
  \******************************************************/
/*! exports provided: LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


class LegalComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe(s => {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const tree = this.router.parseUrl(this.router.url);
                if (tree.fragment) {
                    const element = document.querySelector('#' + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true);
                    }
                }
            }
        });
    }
}


/***/ }),

/***/ "./src/app/management/admin/admin.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/management/admin/admin.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_AdminComponent, View_AdminComponent_0, View_AdminComponent_Host_0, AdminComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdminComponent", function() { return RenderType_AdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminComponent_0", function() { return View_AdminComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminComponent_Host_0", function() { return View_AdminComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponentNgFactory", function() { return AdminComponentNgFactory; });
/* harmony import */ var _admin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component.scss.shim.ngstyle */ "./src/app/management/admin/admin.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/management/admin/admin.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_AdminComponent = [_admin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AdminComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AdminComponent, data: {} });

function View_AdminComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Administration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 23, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Verwaltung & Management"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "a", [["fragment", "stats"], ["richie", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "ti ti-rating"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Statistik"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "a", [["fragment", "search"], ["richie", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "i", [["class", "ti ti-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Benutzersuche"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "a", [["fragment", "admins"], ["richie", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](20, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "ti ti-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Admins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "a", [["fragment", "revs"], ["richie", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](25, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "ti ti-review"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "div", [["class", "anchor"], ["id", "stats"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 31, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Statistik"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 28, "div", [["class", "grid grid-1-1-1-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 6, "div", [["class", "stat"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Registrierte Benutzer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "i", [["class", "ti ti-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "div", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 6, "div", [["class", "stat"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragen eingereicht"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "i", [["class", "ti ti-book"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "div", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["234"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 6, "div", [["class", "stat"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragen gestellt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "i", [["class", "ti ti-questionmark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "div", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["45902"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 6, "div", [["class", "stat"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Telegram Channel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "i", [["class", "ti ti-telegram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "div", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["5"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 0, "div", [["class", "anchor"], ["id", "search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 34, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Benutzersuche"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 7, "div", [["class", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 6, "form", [["method", "GET"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 0, "input", [["placeholder", "Benutzer"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 0, "input", [["type", "submit"], ["value", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 23, "div", [["class", "tableWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 22, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 0, "i", [["class", "ti ti-user-active green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Admin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 0, "i", [["class", "ti ti-user-inactive red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 0, "div", [["class", "anchor"], ["id", "admins"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 3, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Administratoren"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 0, "div", [["active", "false"], ["class", "close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 0, "div", [["class", "anchor"], ["id", "revs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 60, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 0, "div", [["class", "close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 56, "div", [["class", "tableWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 55, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 0, "i", [["class", "ti ti-user-active green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 0, "i", [["class", "ti ti-user-active green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 0, "i", [["class", "ti ti-user-inactive red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 0, "i", [["class", "ti ti-user-active green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reviewer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 0, "i", [["class", "ti ti-user-active green"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "stats"; var currVal_3 = _ck(_v, 10, 0, "./"); _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_6 = "search"; var currVal_7 = _ck(_v, 15, 0, "./"); _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_10 = "admins"; var currVal_11 = _ck(_v, 20, 0, "./"); _ck(_v, 19, 0, currVal_10, currVal_11); var currVal_14 = "revs"; var currVal_15 = _ck(_v, 25, 0, "./"); _ck(_v, 24, 0, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).href; _ck(_v, 13, 0, currVal_4, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href; _ck(_v, 18, 0, currVal_8, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href; _ck(_v, 23, 0, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPending; _ck(_v, 66, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); }); }
function View_AdminComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-admin", [], null, null, null, View_AdminComponent_0, RenderType_AdminComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], [_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_9__["SharedFunctions"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdminComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-admin", _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], View_AdminComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/management/admin/admin.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/management/admin/admin.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".close[_ngcontent-%COMP%] {\n  top: 15px;\n}\n\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  top: -12px;\n}\n\nform[_ngcontent-%COMP%] {\n  font-size: 0.8em !important;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: var(--color);\n  margin-bottom: 0 !important;\n  height: 30px !important;\n}\n\nform[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  margin-top: 0px;\n  width: 25px;\n  height: 25px;\n}\n\n.bar[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  border: 1px solid rgba(var(--color-rgb), 0.4);\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlbWVudC9hZG1pbi9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXG1hbmFnZW1lbnRcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFuYWdlbWVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUNDRjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURBRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR047O0FEQ0E7RUFDRSxvQkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlbWVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcbnRkIHtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gIH1cclxufVxyXG5mb3JtIHtcclxuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XHJcbiAgaW5wdXQge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgJlt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYmFyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLXJnYiksIDAuNCk7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiIsIi5jbG9zZSB7XG4gIHRvcDogMTVweDtcbn1cblxudGQgaSB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIHRvcDogLTEycHg7XG59XG5cbmZvcm0ge1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG59XG5mb3JtIGlucHV0IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbmZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tY29sb3ItcmdiKSwgMC40KTtcbiAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/management/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/management/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");


class AdminComponent {
    constructor(userService, notificationService, router, httpClient, sharedFunctions) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.router = router;
        this.httpClient = httpClient;
        this.sharedFunctions = sharedFunctions;
        this.activeUser = {};
        this.overlayStyle = { display: "none" };
        this.isSearching = false;
        this.searchResults = {
            overflow: "hidden",
            transition: "40s ease",
            "max-height": "0"
        };
        this.userSearch = "";
        this.foundUsers = [];
        this.userList = [];
    }
    ngOnInit() {
        return;
        if (!this.userService.richieUser.isAdmin) {
            this.router.navigate(["/404"]);
            return;
        }
        this.getPlayersWithRank();
    }
    pushUserToList(list, user) {
        if (list.filter(x => x._id === user._id).length == 0) {
            list.push(user);
        }
    }
    filterByAdmin() {
        return this.userList.filter(x => x.isAdmin);
    }
    filterByReviewer() {
        return this.userList.filter(x => !x.isAdmin && x.isReviewer);
    }
    setGroupTo(group) {
        this.activeUser.isAdmin = group === "Admin";
        this.activeUser.isReviewer = group === "Reviewer";
        this.sendUpdatedUserToDB();
    }
    toggleUserActivation() {
        this.activeUser.enabled = !this.activeUser.enabled;
        this.sendUpdatedUserToDB();
    }
    sendUpdatedUserToDB() {
        // TODO: POST updated USER
    }
    onInputKeyDown(event) {
        if (event.key === "Enter")
            this.searchPlayer();
    }
    searchPlayer() {
        if (this.isSearching)
            return;
        this.searchResults["max-height"] = "0";
        this.isSearching = true;
        // TODO: ADD URL
        this.httpClient
            .get("https://raw.githubusercontent.com/TimoScheuermann/cdn/master/DHBW%20Richie/foundUsers.json")
            .subscribe(data => {
            JSON.parse(JSON.stringify(data)).forEach(user => {
                this.pushUserToList(this.foundUsers, user);
            });
            this.notificationService.sendNotification(`Die Suche nach ${this.userSearch} ergab folgende Treffer`, src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].SUCCESS);
            this.isSearching = false;
            this.searchResults["max-height"] = "80000px";
        }, error => {
            console.log("Error => ", error);
        });
    }
    openUserCard(userID, list) {
        this.overlayStyle = { display: "block" };
        this.activeUser = list.filter(x => x._id === userID)[0];
    }
    closeUserCard() {
        this.overlayStyle = { display: "none" };
    }
    getPlayersWithRank() {
        // TODO: ADD URL
        this.httpClient
            .get("https://raw.githubusercontent.com/TimoScheuermann/cdn/master/DHBW%20Richie/usersWithRanks.json")
            .subscribe(data => {
            JSON.parse(JSON.stringify(data)).forEach(user => {
                this.pushUserToList(this.userList, user);
            });
        }, error => {
            console.log("Error => ", error);
        });
    }
}


/***/ }),

/***/ "./src/app/management/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/management/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.checkLogin();
    }
    checkLogin() {
        // TODO: REMOVE
        return true;
        if (!this.userService.richieUser.signedIn) {
            this.router.navigate(["/login"]);
        }
        const date = new Date(this.userService.richieUser["exp"]);
        if (date >= new Date()) {
            this.router.navigate(["/login"]);
        }
        return true;
    }
}
AuthGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); }, token: AuthGuard, providedIn: "root" });


/***/ }),

/***/ "./src/app/management/feedback/feedback.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/management/feedback/feedback.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_FeedbackComponent, View_FeedbackComponent_0, View_FeedbackComponent_Host_0, FeedbackComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FeedbackComponent", function() { return RenderType_FeedbackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FeedbackComponent_0", function() { return View_FeedbackComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FeedbackComponent_Host_0", function() { return View_FeedbackComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponentNgFactory", function() { return FeedbackComponentNgFactory; });
/* harmony import */ var _feedback_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.component.scss.shim.ngstyle */ "./src/app/management/feedback/feedback.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/richie-textarea/richie-textarea.component.ngfactory */ "./src/app/shared/richie-textarea/richie-textarea.component.ngfactory.js");
/* harmony import */ var _shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/richie-textarea/richie-textarea.component */ "./src/app/shared/richie-textarea/richie-textarea.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_richie_select_richie_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/richie-select/richie-select.component.ngfactory */ "./src/app/shared/richie-select/richie-select.component.ngfactory.js");
/* harmony import */ var _shared_richie_select_richie_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/richie-select/richie-select.component */ "./src/app/shared/richie-select/richie-select.component.ts");
/* harmony import */ var _shared_richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/richie-iconbutton/richie-iconbutton.component.ngfactory */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ngfactory.js");
/* harmony import */ var _shared_richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/richie-iconbutton/richie-iconbutton.component */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ts");
/* harmony import */ var _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback.component */ "./src/app/management/feedback/feedback.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_FeedbackComponent = [_feedback_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FeedbackComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FeedbackComponent, data: {} });

function View_FeedbackComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "landing"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback geben"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Richie verbessern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Wie kann ich helfen Richie zu verbessern?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the bright void beyond the chain link. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the Sprawl\u2019s towers and ragged Fuller domes, dim figures moving toward him in the dark. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Its hands were holograms that altered to match the convolutions of the car\u2019s floor. Light from a service hatch at the rear of the room where Case waited. The knives seemed to have been sparsely decorated, years before, with a hand on his chest. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the drifting shoals of waste. Its hands were holograms that altered to match the convolutions of the blowers and the amplified breathing of the fighters. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his sleep, and wake alone in the center of his closed left eyelid. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 29, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Formular"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist dir aufgefallen?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "richie-textarea", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.feedback.feedback = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RichieTextareaComponent_0"], _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RichieTextareaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, null, 0, _shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RichieTextareaComponent"], [], { placeholder: [0, "placeholder"], tabindex: [1, "tabindex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RichieTextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Kann man dies verbessern, wenn ja wie?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 5, "richie-textarea", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.feedback.improvement = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RichieTextareaComponent_0"], _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RichieTextareaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 49152, null, 0, _shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RichieTextareaComponent"], [], { placeholder: [0, "placeholder"], tabindex: [1, "tabindex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RichieTextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback-Art"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "div", [["class", "selectWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "richie-select", [["heading", "Art"], ["placeholder", "Bitte w\u00E4hlen"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.selectionChanged($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_richie_select_richie_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_RichieSelectComponent_0"], _shared_richie_select_richie_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_RichieSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 49152, null, 0, _shared_richie_select_richie_select_component__WEBPACK_IMPORTED_MODULE_6__["RichieSelectComponent"], [], { heading: [0, "heading"], items: [1, "items"], tabindex: [2, "tabindex"], placeholder: [3, "placeholder"] }, { change: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](36, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "richie-iconbutton", [["icon", "ti ti-save"], ["text", "Feedback speichern"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submitFeedback() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RichieIconbuttonComponent_0"], _shared_richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RichieIconbuttonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 49152, null, 0, _shared_richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_8__["RichieIconbuttonComponent"], [_shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_9__["SharedFunctions"]], { icon: [0, "icon"], text: [1, "text"], tabindex: [2, "tabindex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "p", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "Das Hinzuf\u00FCgen neuer Fragen ist zu kompliziert"; var currVal_8 = 1; _ck(_v, 16, 0, currVal_7, currVal_8); var currVal_9 = _co.feedback.feedback; _ck(_v, 18, 0, currVal_9); var currVal_17 = "Felder kenntlicher machen"; var currVal_18 = 2; _ck(_v, 25, 0, currVal_17, currVal_18); var currVal_19 = _co.feedback.improvement; _ck(_v, 27, 0, currVal_19); var currVal_20 = "Art"; var currVal_21 = _ck(_v, 36, 0, "Verbesserung", "Fehler", "Hinweis"); var currVal_22 = 3; var currVal_23 = "Bitte w\u00E4hlen"; _ck(_v, 35, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = "ti ti-save"; var currVal_25 = "Feedback speichern"; var currVal_26 = 4; _ck(_v, 38, 0, currVal_24, currVal_25, currVal_26); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending; _ck(_v, 15, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); }); }
function View_FeedbackComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-feedback", [], null, null, null, View_FeedbackComponent_0, RenderType_FeedbackComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"]], null, null)], null, null); }
var FeedbackComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-feedback", _feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"], View_FeedbackComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/management/feedback/feedback.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/management/feedback/feedback.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".selectWrapper[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlbWVudC9mZWVkYmFjay9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXG1hbmFnZW1lbnRcXGZlZWRiYWNrXFxmZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFuYWdlbWVudC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0V3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbiIsIi5zZWxlY3RXcmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/management/feedback/feedback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/management/feedback/feedback.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");

class FeedbackComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.feedback = {
            feedback: '',
            categorie: '',
            improvement: ''
        };
    }
    selectionChanged(selection) {
        this.feedback.categorie = selection;
    }
    submitFeedback() {
        console.log(this.feedback);
        this.notificationService.sendNotification('Vielen Dank für dein Feedback!', src_app_models__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].SUCCESS);
    }
}


/***/ }),

/***/ "./src/app/management/login/login.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/management/login/login.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.scss.shim.ngstyle */ "./src/app/management/login/login.component.scss.shim.ngstyle.js");
/* harmony import */ var _search_search_search_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search/search/search.component.scss.shim.ngstyle */ "./src/app/search/search/search.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/management/login/login.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _search_search_search_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background full"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 4, "div", [["class", "reasons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Fragen bearbeiten"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, [" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, assumenda aliquid beatae dolorum, fuga consectetur iste quaerat sequi fugit, velit at! Assumenda, illo! Placeat labore illum minus, ipsam nobis hic. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, null, 13, "div", [["class", "loginbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Melde dich mit deinem lieblings Service an"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, null, 8, "div", [["class", "services"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, null, 1, "div", [["class", "service"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, null, 0, "i", [["class", "ti ti-apple"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, null, 1, "div", [["class", "service"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, null, 0, "i", [["class", "ti ti-telegram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, null, 1, "div", [["class", "service"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, null, 0, "i", [["class", "ti ti-github"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, null, 1, "div", [["class", "service"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, null, 0, "i", [["class", "ti ti-google"]], null, null, null, null, null))], null, null); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4440064, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], [_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/management/login/login.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/management/login/login.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".signInWiths[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.signInWiths[_ngcontent-%COMP%]   .signInWith[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200px;\n  margin: 0px 5px 10px 5px;\n  transition: 0.2s ease;\n  border: 1px solid transparent;\n}\n.signInWiths[_ngcontent-%COMP%]   .signInWith[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n}\n.signInWiths[_ngcontent-%COMP%]   .signInWith[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 1px solid var(--input-border);\n  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);\n}\n@-webkit-keyframes slider-anim {\n  0% {\n    top: 110vh;\n    opacity: 0;\n    transform: scale(0) translateY(-50%);\n  }\n  10% {\n    top: 50%;\n    opacity: 0.7;\n    transform: scale(0.5) translateY(-50%);\n  }\n  15%, 85% {\n    top: 50%;\n    opacity: 1;\n    transform: scale(1) translateY(-50%);\n  }\n  90% {\n    top: -50%;\n    opacity: 0.7;\n    transform: scale(0.5) translateY(-50%);\n  }\n  100% {\n    top: -110vh;\n    opacity: 0;\n    transform: scale(0) translateY(-50%);\n  }\n}\n@keyframes slider-anim {\n  0% {\n    top: 110vh;\n    opacity: 0;\n    transform: scale(0) translateY(-50%);\n  }\n  10% {\n    top: 50%;\n    opacity: 0.7;\n    transform: scale(0.5) translateY(-50%);\n  }\n  15%, 85% {\n    top: 50%;\n    opacity: 1;\n    transform: scale(1) translateY(-50%);\n  }\n  90% {\n    top: -50%;\n    opacity: 0.7;\n    transform: scale(0.5) translateY(-50%);\n  }\n  100% {\n    top: -110vh;\n    opacity: 0;\n    transform: scale(0) translateY(-50%);\n  }\n}\n@media only screen and (min-width: 850px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n}\n@media only screen and (max-width: 849px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-rows: minmax(100px, -webkit-max-content) 1fr;\n  grid-template-rows: minmax(100px, max-content) 1fr;\n  grid-gap: 0;\n}\n@-webkit-keyframes zoom-bg {\n  0%, 20%, 80%, 100% {\n    top: -100px;\n    left: -100px;\n    width: calc(100% + 200px);\n    height: calc(100% + 200px);\n  }\n  30%, 70% {\n    top: 0px;\n    left: 0px;\n    width: calc(100%);\n    height: calc(100%);\n  }\n}\n@keyframes zoom-bg {\n  0%, 20%, 80%, 100% {\n    top: -100px;\n    left: -100px;\n    width: calc(100% + 200px);\n    height: calc(100% + 200px);\n  }\n  30%, 70% {\n    top: 0px;\n    left: 0px;\n    width: calc(100%);\n    height: calc(100%);\n  }\n}\n@-webkit-keyframes move-bg {\n  0% {\n    width: 50%;\n    height: 50%;\n    transform: translate3d(-50%, 200vh, 0px);\n  }\n  100% {\n    width: 50%;\n    height: 50%;\n    transform: translate3d(-50%, -200vh, 0px);\n  }\n  20%, 80% {\n    width: 50%;\n    height: 50%;\n    transform: translate3d(-50%, -50%, 0px);\n  }\n  30%, 70% {\n    width: 100%;\n    height: 100%;\n    transform: translate3d(-50%, -50%, 0px);\n  }\n}\n@keyframes move-bg {\n  0% {\n    width: 50%;\n    height: 50%;\n    transform: translate3d(-50%, 200vh, 0px);\n  }\n  100% {\n    width: 50%;\n    height: 50%;\n    transform: translate3d(-50%, -200vh, 0px);\n  }\n  20%, 80% {\n    width: 50%;\n    height: 50%;\n    transform: translate3d(-50%, -50%, 0px);\n  }\n  30%, 70% {\n    width: 100%;\n    height: 100%;\n    transform: translate3d(-50%, -50%, 0px);\n  }\n}\n@-webkit-keyframes move-txt {\n  0% {\n    transform: translateY(100vh);\n  }\n  10%, 80% {\n    transform: translateY(-50%);\n  }\n  100% {\n    transform: translateY(-100vh);\n  }\n}\n@keyframes move-txt {\n  0% {\n    transform: translateY(100vh);\n  }\n  10%, 80% {\n    transform: translateY(-50%);\n  }\n  100% {\n    transform: translateY(-100vh);\n  }\n}\n.slider[_ngcontent-%COMP%] {\n  display: inline-grid;\n}\n@media only screen and (max-width: 849px) {\n  .slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0px 20px;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0px 100px;\n  }\n}\n.slide[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.slide[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  overflow: hidden;\n  z-index: -1;\n  -webkit-animation: move-bg 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;\n          animation: move-bg 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;\n}\n.slide[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  overflow: hidden;\n  background: inherit;\n  background-position: center;\n  background-size: cover;\n  overflow: hidden;\n  -webkit-animation: zoom-bg 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;\n          animation: zoom-bg 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;\n}\n.slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  top: 50%;\n  position: relative;\n  transform: translateY(-50%);\n  -webkit-animation: move-txt 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;\n          animation: move-txt 5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: 900;\n  margin: 0;\n}\n.slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 10px;\n  font-size: 1.3em;\n  font-weight: 500;\n}\n.slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .slide[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 16px rgba(0, 0, 0, 0.8);\n}\n.blurBackground[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n}\n.blurBackground[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -25px;\n  left: -25px;\n  overflow: hidden;\n  width: calc(100% + 50px);\n  height: calc(100% + 50px);\n  background: var(--landing-bg);\n  background-position: center;\n  background-size: cover;\n  -webkit-filter: blur(17px);\n          filter: blur(17px);\n  overflow: hidden;\n}\n.loginArea[_ngcontent-%COMP%] {\n  display: inline-grid;\n  position: relative;\n  padding: 0px 20px;\n  padding-top: 50px;\n  overflow: hidden;\n  min-height: 130px;\n  color: #fff;\n}\n.loginArea[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  text-align: center;\n}\n@media only screen and (max-width: 523px) {\n  .loginService[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 524px) {\n  .loginService[_ngcontent-%COMP%] {\n    display: inline-block;\n    min-width: 200px;\n  }\n}\n.loginServices[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.loginServices[_ngcontent-%COMP%]   .loginService[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.4s ease;\n  padding: 5px 10px;\n  border-radius: 10px;\n  margin: 0px 10px;\n  margin-bottom: 15px;\n  height: 30px;\n  line-height: 30px;\n  background: rgba(255, 255, 255, 0.3);\n  border: 1px solid transparent;\n}\n.loginServices[_ngcontent-%COMP%]   .loginService[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  top: 5px;\n  margin-right: 28px;\n}\n.loginServices[_ngcontent-%COMP%]   .loginService[_ngcontent-%COMP%]   .serviceName[_ngcontent-%COMP%] {\n  display: inline-block;\n  opacity: 0.8;\n  font-weight: 600;\n  font-size: 16px;\n  margin-right: 5px;\n}\n.loginServices[_ngcontent-%COMP%]   .loginService[_ngcontent-%COMP%]   .serviceName[_ngcontent-%COMP%]:before {\n  content: \"Sign in with \";\n}\n.loginServices[_ngcontent-%COMP%]   .loginService[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n  background: #fff;\n  color: #222;\n}\n.loginServices[_ngcontent-%COMP%]   .loginService[_ngcontent-%COMP%]:hover   .serviceName[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlbWVudC9sb2dpbi9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXG1hbmFnZW1lbnRcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFuYWdlbWVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0NKO0FEQ0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7QUNFUjtBRElBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsVUFBQTtJQUNBLG9DQUFBO0VDREY7RURHQTtJQUNFLFFBQUE7SUFDQSxZQUFBO0lBQ0Esc0NBQUE7RUNERjtFREdBO0lBRUUsUUFBQTtJQUNBLFVBQUE7SUFDQSxvQ0FBQTtFQ0ZGO0VESUE7SUFDRSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHNDQUFBO0VDRkY7RURJQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0Esb0NBQUE7RUNGRjtBQUNGO0FEeEJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsVUFBQTtJQUNBLG9DQUFBO0VDREY7RURHQTtJQUNFLFFBQUE7SUFDQSxZQUFBO0lBQ0Esc0NBQUE7RUNERjtFREdBO0lBRUUsUUFBQTtJQUNBLFVBQUE7SUFDQSxvQ0FBQTtFQ0ZGO0VESUE7SUFDRSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHNDQUFBO0VDRkY7RURJQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0Esb0NBQUE7RUNGRjtBQUNGO0FES0E7RUFDRTtJQUNFLGlCQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxnQkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwwREFBQTtFQUFBLGtEQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7RUFDRTtJQUlFLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtFQ1JGO0VEVUE7SUFFRSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNURjtBQUNGO0FEUEE7RUFDRTtJQUlFLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtFQ1JGO0VEVUE7SUFFRSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNURjtBQUNGO0FEV0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0Esd0NBQUE7RUNURjtFRFdBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSx5Q0FBQTtFQ1RGO0VEV0E7SUFFRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHVDQUFBO0VDVkY7RURZQTtJQUVFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUNBQUE7RUNYRjtBQUNGO0FEWEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0Esd0NBQUE7RUNURjtFRFdBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSx5Q0FBQTtFQ1RGO0VEV0E7SUFFRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHVDQUFBO0VDVkY7RURZQTtJQUVFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUNBQUE7RUNYRjtBQUNGO0FEY0E7RUFDRTtJQUNFLDRCQUFBO0VDWkY7RURjQTtJQUVFLDJCQUFBO0VDYkY7RURlQTtJQUNFLDZCQUFBO0VDYkY7QUFDRjtBREdBO0VBQ0U7SUFDRSw0QkFBQTtFQ1pGO0VEY0E7SUFFRSwyQkFBQTtFQ2JGO0VEZUE7SUFDRSw2QkFBQTtFQ2JGO0FBQ0Y7QURnQkE7RUFDRSxvQkFBQTtBQ2RGO0FEaUJBO0VBRUk7SUFDRSxnQkFBQTtFQ2ZKO0FBQ0Y7QURrQkE7RUFFSTtJQUNFLGlCQUFBO0VDakJKO0FBQ0Y7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJGO0FEcUJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtFQUFBO1VBQUEsdUVBQUE7QUNuQko7QURxQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0VBQUE7VUFBQSx1RUFBQTtBQ25CTjtBRHNCRTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDcEJKO0FEcUJJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ25CTjtBRHFCSTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNuQk47QURxQkk7O0VBRUUsV0FBQTtFQUNBLDRDQUFBO0FDbkJOO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDckJGO0FEdUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNyQko7QUR5QkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDdEJGO0FEdUJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDckJKO0FEeUJBO0VBQ0U7SUFDRSxjQUFBO0VDdEJGO0FBQ0Y7QUR3QkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsZ0JBQUE7RUN0QkY7QUFDRjtBRHlCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3ZCRjtBRHdCRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUN0Qko7QUR3Qkk7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDdEJOO0FEd0JJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN0Qk47QUR1Qk07RUFDRSx3QkFBQTtBQ3JCUjtBRHdCSTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN0Qk47QUR1Qk07RUFDRSxVQUFBO0FDckJSIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlbWVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduSW5XaXRocyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5zaWduSW5XaXRoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMHB4IDVweCAxMHB4IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVyLWFuaW0ge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMTEwdmg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgMTUlLFxyXG4gIDg1JSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB0b3A6IC01MCU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IC0xMTB2aDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMDBweCwgbWF4LWNvbnRlbnQpIDFmcjtcclxuICBncmlkLWdhcDogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tLWJnIHtcclxuICAwJSxcclxuICAyMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbiAgICBsZWZ0OiAtMTAwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjAwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyMDBweCk7XHJcbiAgfVxyXG4gIDMwJSxcclxuICA3MCUge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlLWJnIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDIwMHZoLCAwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTIwMHZoLCAwcHgpO1xyXG4gIH1cclxuICAyMCUsXHJcbiAgODAlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMHB4KTtcclxuICB9XHJcbiAgMzAlLFxyXG4gIDcwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZS10eHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XHJcbiAgfVxyXG4gIDEwJSxcclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcclxuICAuc2xpZGUge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5zbGlkZSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBtYXJnaW46IDBweCAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlLWJnIDVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGluZmluaXRlIGJvdGg7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGFuaW1hdGlvbjogem9vbS1iZyA1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBpbmZpbml0ZSBib3RoO1xyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBhbmltYXRpb246IG1vdmUtdHh0IDVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGluZmluaXRlIGJvdGg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgaDEsXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ibHVyQmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IC0xO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBsZWZ0OiAtMjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNTBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDUwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGFuZGluZy1iZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBibHVyKDE3cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbkFyZWEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGgyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIzcHgpIHtcclxuICAubG9naW5TZXJ2aWNlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyNHB4KSB7XHJcbiAgLmxvZ2luU2VydmljZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luU2VydmljZXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAubG9naW5TZXJ2aWNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZU5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdTaWduIGluIHdpdGggJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgIC5zZXJ2aWNlTmFtZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2lnbkluV2l0aHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2lnbkluV2l0aHMgLnNpZ25JbldpdGgge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwcHggNXB4IDEwcHggNXB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnNpZ25JbldpdGhzIC5zaWduSW5XaXRoIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNpZ25JbldpdGhzIC5zaWduSW5XaXRoIGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlci1hbmltIHtcbiAgMCUge1xuICAgIHRvcDogMTEwdmg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgMTAlIHtcbiAgICB0b3A6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgMTUlLCA4NSUge1xuICAgIHRvcDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIDkwJSB7XG4gICAgdG9wOiAtNTAlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0xMTB2aDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xuICAud3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTAwcHgsIG1heC1jb250ZW50KSAxZnI7XG4gIGdyaWQtZ2FwOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHpvb20tYmcge1xuICAwJSwgMjAlLCA4MCUsIDEwMCUge1xuICAgIHRvcDogLTEwMHB4O1xuICAgIGxlZnQ6IC0xMDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjAwcHgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlICsgMjAwcHgpO1xuICB9XG4gIDMwJSwgNzAlIHtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtYmcge1xuICAwJSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDIwMHZoLCAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtMjAwdmgsIDBweCk7XG4gIH1cbiAgMjAlLCA4MCUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwcHgpO1xuICB9XG4gIDMwJSwgNzAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtdHh0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgMTAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZoKTtcbiAgfVxufVxuLnNsaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XG4gIC5zbGlkZSAudGl0bGUge1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLnNsaWRlIC50aXRsZSB7XG4gICAgbWFyZ2luOiAwcHggMTAwcHg7XG4gIH1cbn1cbi5zbGlkZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZSAuYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogbW92ZS1iZyA1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBpbmZpbml0ZSBib3RoO1xufVxuLnNsaWRlIC5iYWNrZ3JvdW5kOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHpvb20tYmcgNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgaW5maW5pdGUgYm90aDtcbn1cbi5zbGlkZSAudGl0bGUge1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGFuaW1hdGlvbjogbW92ZS10eHQgNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgaW5maW5pdGUgYm90aDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc2xpZGUgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbjogMDtcbn1cbi5zbGlkZSAudGl0bGUgaDIge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2xpZGUgLnRpdGxlIGgxLFxuLnNsaWRlIC50aXRsZSBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLmJsdXJCYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xufVxuLmJsdXJCYWNrZ3JvdW5kOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogLTI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA1MHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA1MHB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGFuZGluZy1iZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDE3cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9naW5BcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubG9naW5BcmVhIGgyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIzcHgpIHtcbiAgLmxvZ2luU2VydmljZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTI0cHgpIHtcbiAgLmxvZ2luU2VydmljZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gIH1cbn1cbi5sb2dpblNlcnZpY2VzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpblNlcnZpY2VzIC5sb2dpblNlcnZpY2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubG9naW5TZXJ2aWNlcyAubG9naW5TZXJ2aWNlIGkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59XG4ubG9naW5TZXJ2aWNlcyAubG9naW5TZXJ2aWNlIC5zZXJ2aWNlTmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxvZ2luU2VydmljZXMgLmxvZ2luU2VydmljZSAuc2VydmljZU5hbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJTaWduIGluIHdpdGggXCI7XG59XG4ubG9naW5TZXJ2aWNlcyAubG9naW5TZXJ2aWNlOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzIyMjtcbn1cbi5sb2dpblNlcnZpY2VzIC5sb2dpblNlcnZpY2U6aG92ZXIgLnNlcnZpY2VOYW1lIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/management/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/management/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        // Neue Fragen einreichen & anderen Helfen
        // Fragen favorisieren, um sie später leichter zu finden
        // Fragen bearbeiten, solltest du eine einfachere Antwort haben
        // Fragen & Antworten bewerten
        // Kommentare unter Fragen posten
        // Mit anderen <span class="gradient">Pros</span> diskutieren
        this.currentSlide = 0;
        this.slides = [
            {
                title: 'Fragen einreichen',
                subtitle: 'Durch das einreichen neuer Fragen hilfst du deinen Kommilitonen und vergrößerst Richies Wissen',
                img: {
                    background: "url('https://i.giphy.com/media/iFU36VwXUd2O43gdcr/source.gif')"
                }
            },
            {
                title: 'Fragen favorisieren',
                subtitle: 'Hierduch kannst du ganz schnell gespeicherte Fragen abrufen und benötigst keine Lesezeichen in deinem Browser',
                img: {
                    background: "url('https://i.giphy.com/media/XreQmk7ETCak0/source.gif')"
                }
            },
            {
                title: 'Fragen bearbeiten',
                subtitle: 'Du kennst eine verständlichere Antwort? Dann kannst du bereits existierende Fragen bearbeiten und so deinen Kommilitonen beim Lernen helfen',
                img: {
                    background: "url('https://i.giphy.com/media/3o6ZsV3A5DdPm0e5bO/giphy.webp')"
                }
            },
            {
                title: 'Fragen kommentieren & diskutieren',
                subtitle: 'Verfasse Kommentare unter Fragen und diskutiere mit deinen Kommilitonen über Lösungsansätze oder führe die Antwort weiter aus, um zu einem leichteren Verständnis beizutragen',
                img: {
                    background: "url('https://i.giphy.com/media/lz67zZWfWPsWnuGH0s/source.gif')"
                }
            }
        ];
    }
    ngOnInit() {
        this.startSlider();
    }
    ngAfterViewInit() {
        if (this.userService.richieUser.signedIn) {
            this.router.navigate(['/settings']);
            return;
        }
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
    startSlider() {
        this.interval = setInterval(() => {
            this.currentSlide = ++this.currentSlide % this.slides.length;
        }, 5000);
    }
}


/***/ }),

/***/ "./src/app/management/management.module.ts":
/*!*************************************************!*\
  !*** ./src/app/management/management.module.ts ***!
  \*************************************************/
/*! exports provided: ManagementModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/management/admin/admin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/management/auth.guard.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/management/feedback/feedback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/management/login/login.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/management/review/review.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/management/settings/settings.component.ts");







const ɵ0 = { title: 'Richie | Admin' }, ɵ1 = { title: 'Richie | Settings' }, ɵ2 = { title: 'Richie | Feedback' }, ɵ3 = { title: 'Richie | Review' }, ɵ4 = { title: 'Richie | Login' };
const adminRoutes = [
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: ɵ0
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: ɵ1
    },
    {
        path: 'feedback',
        component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: ɵ2
    },
    {
        path: 'review',
        component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: ɵ3
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: ɵ4
    }
];
class ManagementModule {
}



/***/ }),

/***/ "./src/app/management/review/review.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/management/review/review.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_ReviewComponent, View_ReviewComponent_0, View_ReviewComponent_Host_0, ReviewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ReviewComponent", function() { return RenderType_ReviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReviewComponent_0", function() { return View_ReviewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ReviewComponent_Host_0", function() { return View_ReviewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponentNgFactory", function() { return ReviewComponentNgFactory; });
/* harmony import */ var _review_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.component.scss.shim.ngstyle */ "./src/app/management/review/review.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _review_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review.component */ "./src/app/management/review/review.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _question_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../question/question.service */ "./src/app/question/question.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ReviewComponent = [_review_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ReviewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ReviewComponent, data: {} });

function View_ReviewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Review"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 15, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00DCbersicht"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "feedback name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "div", [["class", "new name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["17"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "div", [["class", "delete name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 75, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Offene Tickets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 72, "div", [["class", "tableWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 71, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Frage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Antwort"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "div", [["class", "delete name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "div", [["class", "delete name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "div", [["class", "delete name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "div", [["class", "feedback name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 0, "div", [["class", "delete name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "div", [["class", "new name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 42. f**king boomer Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam, minima ipsum vitae eius fugiat asperiores accusantium molestias dicta a omnis totam quidem atque quis, iure eos beatae possimus laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae officia maxime nam reprehenderit odio quaerat ipsa aut et eaque dicta repellendus, culpa nesciunt laudantium, non error rerum, unde earum! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 0, "div", [["class", "new name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 1, "div", [["active", "true"], ["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 0, "div", [["class", "feedback name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. f**king boomer"]))], null, null); }
function View_ReviewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-review", [], null, null, null, View_ReviewComponent_0, RenderType_ReviewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _review_component__WEBPACK_IMPORTED_MODULE_2__["ReviewComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _question_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ReviewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-review", _review_component__WEBPACK_IMPORTED_MODULE_2__["ReviewComponent"], View_ReviewComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/management/review/review.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/management/review/review.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n@media only screen and (max-width: 650px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: calc(100vw - 40px);\n    height: calc(100vh - 40px);\n    margin-top: 0px !important;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .iconButton[_ngcontent-%COMP%] {\n    margin: 30px 10px;\n    margin-bottom: 0;\n  }\n\n  .selectionWrapper[_ngcontent-%COMP%] {\n    margin-left: -90px !important;\n    margin-top: -150px !important;\n  }\n}\n@media only screen and (max-width: 849px) {\n  #delete[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n\n  #accept[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .selectionWrapper[_ngcontent-%COMP%] {\n    margin-left: calc(50% - 100px);\n  }\n}\n.Neu[_ngcontent-%COMP%], .\u00C4nderung[_ngcontent-%COMP%], .Feedback[_ngcontent-%COMP%], .L\u00F6schen[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  float: left;\n  text-transform: capitalize;\n  color: #fff;\n  transform: scale(1.1);\n}\n.Neu[_ngcontent-%COMP%]::before {\n  content: \"Neu\";\n  background: #34c759;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.\u00C4nderung[_ngcontent-%COMP%]::before {\n  content: \"\u00C4nderung\";\n  background: #ff9500;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.Feedback[_ngcontent-%COMP%]::before {\n  content: \"Feedback\";\n  background: #007aff;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.L\u00F6schen[_ngcontent-%COMP%]::before {\n  content: \"L\u00F6schen\";\n  background: #ff3b30;\n  border-radius: 20px;\n  padding: 2px 10px;\n}\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  z-index: 15000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: var(--paragraph);\n  padding: 20px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  max-height: 100%;\n  overflow-y: auto;\n  margin-top: 20px;\n}\n.close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  right: 5px;\n  top: 5px;\n  border-radius: 40px;\n  position: absolute;\n  font-size: 38px;\n  line-height: 40px;\n  text-align: center;\n  transition: 0.1s ease;\n  cursor: pointer;\n  opacity: 0.4;\n}\n.close[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.close[_ngcontent-%COMP%]::before, .close[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  height: 40px;\n  background: var(--font-color);\n}\n.close[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg) scale(0.7);\n}\n.close[_ngcontent-%COMP%]::after {\n  transform: rotate(-45deg) scale(0.7);\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: darkgray;\n}\n@-webkit-keyframes animatetop {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\ntextarea[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid var(--input-border);\n  background: var(--paragraph);\n  padding: 5px 10px;\n  width: 100%;\n  color: var(--font-color);\n  transition: 0.2s ease;\n  font-size: 1em;\n  font-family: \"SF Pro Display\", sans-serif;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 1px;\n  box-sizing: border-box;\n  border-color: #08f;\n  position: relative;\n  border-radius: 8px;\n}\n#sourceInput[_ngcontent-%COMP%] {\n  position: relative;\n}\n#lectureInput[_ngcontent-%COMP%] {\n  float: inline-end;\n  z-index: 1;\n}\n#addButton[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff;\n  border-radius: 50px;\n  outline: none;\n  border: 1px solid #08f;\n  padding: 5px 20px;\n  color: #08f;\n  cursor: pointer;\n  transition: 0.2s ease;\n  font-weight: 600;\n  position: absolute;\n  right: 2.5cm;\n  top: 7.5cm;\n}\nlegend[_ngcontent-%COMP%] {\n  color: #08f;\n  border: solid 1px #08f;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.8em;\n  padding: 3px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlbWVudC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2VtZW50L3Jldmlldy9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXG1hbmFnZW1lbnRcXHJldmlld1xccmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtJQUNBLDBCQUFBO0VERUY7QUFDRjtBQ0NBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VEQ0Y7O0VDQ0E7SUFDRSw2QkFBQTtJQUNBLDZCQUFBO0VERUY7QUFDRjtBQ0FBO0VBQ0U7SUFDRSxnQkFBQTtFREVGOztFQ0FBO0lBQ0UsZ0JBQUE7RURHRjs7RUNEQTtJQUNFLDhCQUFBO0VESUY7QUFDRjtBQ0RBOzs7O0VBSUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURHRjtBQ0FBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREdGO0FDQUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREdGO0FDQUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREdGO0FDQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREdGO0FDQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxjQUFBO0FER0Y7QUNBQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURHRjtBQ0FBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURHRjtBQ0FBO0VBQ0UsWUFBQTtBREdGO0FDQUE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBREdGO0FDQUE7RUFDRSxtQ0FBQTtBREdGO0FDQUE7RUFDRSxvQ0FBQTtBREdGO0FDQUE7RUFDRSxlQUFBO0FER0Y7QUNBQTtFQUNFO0lBQ0UsVUFBQTtFREdGO0VDREE7SUFDRSxVQUFBO0VER0Y7QUFDRjtBQ0FBO0VBQ0U7SUFDRSxVQUFBO0VERUY7RUNBQTtJQUNFLFVBQUE7RURFRjtBQUNGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7QURDRjtBQ0VBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VtZW50L3Jldmlldy9yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XG4gIC5pY29uQnV0dG9uIHtcbiAgICBtYXJnaW46IDMwcHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnNlbGVjdGlvbldyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtOTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0xNTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XG4gICNkZWxldGUge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICAjYWNjZXB0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLnNlbGVjdGlvbldyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgfVxufVxuLk5ldSxcbi7DhG5kZXJ1bmcsXG4uRmVlZGJhY2ssXG4uTMO2c2NoZW4ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5OZXU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiTmV1XCI7XG4gIGJhY2tncm91bmQ6ICMzNGM3NTk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuXG4uw4RuZGVydW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOEbmRlcnVuZ1wiO1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cblxuLkZlZWRiYWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkZlZWRiYWNrXCI7XG4gIGJhY2tncm91bmQ6ICMwMDdhZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuXG4uTMO2c2NoZW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiTMO2c2NoZW5cIjtcbiAgYmFja2dyb3VuZDogI2ZmM2IzMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xuICB6LWluZGV4OiAxNTAwMDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcmFncmFwaCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2xvc2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNsb3NlOjpiZWZvcmUsXG4uY2xvc2U6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uY2xvc2U6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcpO1xufVxuXG4uY2xvc2U6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcpO1xufVxuXG4uY2xvc2UtYnRuOmhvdmVyIHtcbiAgY29sb3I6IGRhcmtncmF5O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFyYWdyYXBoKTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItY29sb3I6ICMwOGY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzb3VyY2VJbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2xlY3R1cmVJbnB1dCB7XG4gIGZsb2F0OiBpbmxpbmUtZW5kO1xuICB6LWluZGV4OiAxO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDhmO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgY29sb3I6ICMwOGY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMi41Y207XG4gIHRvcDogNy41Y207XG59XG5cbmxlZ2VuZCB7XG4gIGNvbG9yOiAjMDhmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDhmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5pY29uQnV0dG9uIHtcclxuICAgIG1hcmdpbjogMzBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNlbGVjdGlvbldyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4gICNkZWxldGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgI2FjY2VwdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuc2VsZWN0aW9uV3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uTmV1LFxyXG4uw4RuZGVydW5nLFxyXG4uRmVlZGJhY2ssXHJcbi5Mw7ZzY2hlbiB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5OZXU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ05ldSc7XHJcbiAgYmFja2dyb3VuZDogcmdiKDUyLCAxOTksIDg5KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG59XHJcblxyXG4uw4RuZGVydW5nOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICfDhG5kZXJ1bmcnO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE0OSwgMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxufVxyXG5cclxuLkZlZWRiYWNrOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdGZWVkYmFjayc7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDEyMiwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG59XHJcblxyXG4uTMO2c2NoZW46OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ0zDtnNjaGVuJztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA1OSwgNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcclxuICB6LWluZGV4OiAxNTAwMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXJhZ3JhcGgpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNsb3NlOjpiZWZvcmUsXHJcbi5jbG9zZTo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuLmNsb3NlOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcpO1xyXG59XHJcblxyXG4uY2xvc2U6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNyk7XHJcbn1cclxuXHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXBhcmFncmFwaCk7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDhmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbiNzb3VyY2VJbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGVjdHVyZUlucHV0IHtcclxuICBmbG9hdDogaW5saW5lLWVuZDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jYWRkQnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4ZjtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBjb2xvcjogIzA4ZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyLjVjbTtcclxuICB0b3A6IDcuNWNtO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIGNvbG9yOiAjMDhmO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMwOGY7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBwYWRkaW5nOiAzcHggMTVweDtcclxufVxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/management/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/management/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");



class ReviewComponent {
    constructor(notificationService, questionService) {
        this.notificationService = notificationService;
        this.questionService = questionService;
        this.lectures = [
            "Einführung IT",
            "Logik & Algebra",
            "Finanzmathe",
            "Programmieren I",
            "Programmieren II",
            "Bilanzierung",
            "Vertrags-Recht",
            "Was auch immer",
            "soll mir das",
            "Backend schicken"
        ];
        this.currentQuestion = {};
        this.questions = [];
        this.overlayStyle = { display: "none" };
    }
    ngOnInit() {
        this.getUnansweredQuestions();
    }
    selectionChanged(selected) {
        this.currentQuestion.lecture = selected;
    }
    togglePopUp(question) {
        this.currentQuestion = question;
        this.overlayStyle = {
            display: this.overlayStyle.display == "none" ? "block" : "none"
        };
    }
    closePopUp() {
        this.overlayStyle = { display: "none" };
    }
    buttonKeydown(name, event) {
        if (event.key === "Enter") {
            if (name === "del")
                this.deleteQuestion();
            if (name === "add")
                this.acceptQuestion();
        }
    }
    acceptQuestion() {
        this.closePopUp();
        this.notificationService.sendNotification("Frage wurde eingetragen", src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].SUCCESS);
    }
    deleteQuestion() {
        this.closePopUp();
        this.notificationService.sendNotification("Frage wurde gelöscht", src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].ERROR);
    }
    getUnansweredQuestions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.questions = yield this.questionService.getQuestionsInReviewState();
        });
    }
}


/***/ }),

/***/ "./src/app/management/settings/settings.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/management/settings/settings.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_SettingsComponent, View_SettingsComponent_0, View_SettingsComponent_Host_0, SettingsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SettingsComponent", function() { return RenderType_SettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SettingsComponent_0", function() { return View_SettingsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SettingsComponent_Host_0", function() { return View_SettingsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponentNgFactory", function() { return SettingsComponentNgFactory; });
/* harmony import */ var _settings_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.scss.shim.ngstyle */ "./src/app/management/settings/settings.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ "./src/app/management/settings/settings.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _question_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../question/question.service */ "./src/app/question/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_SettingsComponent = [_settings_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SettingsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SettingsComponent, data: {} });

function View_SettingsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Einstellungen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Guten Tag, Max Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "signedInWith"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "ti ti-apple"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "iconButton"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "ti ti-logout"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Abmelden"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 35, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 34, "div", [["class", "grid grid-1-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 29, "div", [["id", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Informationen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 26, "div", [["class", "tableWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 25, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorname"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nachname"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["E-Mail"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["max.mustermann@mail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mitglied seit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["16.10.2019"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Rang"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Admin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "div", [["id", "stats"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Statistik"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "div", [["class", "chart"], ["comments", "80%"], ["dislikes", "10%"], ["likes", "10%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 33, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragen die ich mag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 0, "div", [["active", "true"], ["class", "close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 29, "div", [["class", "tableWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 28, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "i", [["class", "ti ti-remove red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. Ganz klar. Was anderes ist falsch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "i", [["class", "ti ti-remove red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. Ganz klar. Was anderes ist falsch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 0, "i", [["class", "ti ti-remove red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. Ganz klar. Was anderes ist falsch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 0, "i", [["class", "ti ti-remove red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["42. Ganz klar. Was anderes ist falsch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 3, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fragen die ich nicht mag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 0, "div", [["active", "false"], ["class", "close"]], null, null, null, null, null))], null, null); }
function View_SettingsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-settings", [], null, null, null, View_SettingsComponent_0, RenderType_SettingsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _question_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_7__["SharedFunctions"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SettingsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-settings", _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], View_SettingsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/management/settings/settings.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/management/settings/settings.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: -8px;\n  opacity: 0.8;\n}\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.close[_ngcontent-%COMP%] {\n  top: 15px;\n}\n@media only screen and (max-width: 849px) {\n  .seperator[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding-bottom: 10px;\n  }\n\n  .seperator[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlbWVudC9zZXR0aW5ncy9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXG1hbmFnZW1lbnRcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFuYWdlbWVudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNFLFVBQUE7QUNDTjtBREdBO0VBQ0UsU0FBQTtBQ0FGO0FERUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxtQkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VtZW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xyXG4gIGkge1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jbG9zZSB7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcclxuICAuc2VwZXJhdG9yIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLnNlcGVyYXRvciBkaXYge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuIiwidGQgaSB7XG4gIHRvcDogLThweDtcbiAgb3BhY2l0eTogMC44O1xufVxudGQgaTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jbG9zZSB7XG4gIHRvcDogMTVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xuICAuc2VwZXJhdG9yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5zZXBlcmF0b3IgZGl2IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/management/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/management/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");



class SettingsComponent {
    constructor(notificationService, userService, questionService, router, sharedFunctions) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.questionService = questionService;
        this.router = router;
        this.sharedFunctions = sharedFunctions;
        this.dislikedQuestions = [];
        this.likedQuestions = [];
    }
    ngOnInit() {
        this.loadQuestions();
    }
    removeQuestion(question, wasLike) {
        this[`${wasLike ? '' : 'dis'}likedQuestions`] = this[`${wasLike ? '' : 'dis'}likedQuestions`].filter((x) => x.id !== question.id);
        // TODO: ADD HTTP CALL
        this.notificationService.sendNotification('Eintrag gelöscht', _models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].SUCCESS);
    }
    logOut() {
        this.userService.logOut();
        this.router.navigate(['/home'], { replaceUrl: true });
    }
    loadQuestions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { likedQuestions, dislikedQuestions } = yield this.questionService.getReactedQuestions();
            this.likedQuestions = likedQuestions;
            this.dislikedQuestions = dislikedQuestions;
        });
    }
}


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notificationTyp_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _notificationTyp_enum__WEBPACK_IMPORTED_MODULE_0__["NotificationType"]; });




/***/ }),

/***/ "./src/app/models/notificationTyp.enum.ts":
/*!************************************************!*\
  !*** ./src/app/models/notificationTyp.enum.ts ***!
  \************************************************/
/*! exports provided: NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
const NotificationType = {
    INFORMATION: {
        icon: 'ti ti-info',
        class: 'inf'
    },
    ERROR: {
        icon: 'ti ti-error',
        class: 'err'
    },
    SUCCESS: {
        icon: 'ti ti-success',
        class: 'suc'
    }
};


/***/ }),

/***/ "./src/app/models/question.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/question.model.ts ***!
  \******************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
class Question {
    constructor({ question, answer, source, lecture } = {
        question: '',
        answer: '',
        source: '',
        lecture: ''
    }) {
        this.likedBy = [];
        this.dislikedBy = [];
        this.question = question;
        this.answer = answer;
        this.source = source;
        this.lecture = lecture;
    }
    get likes() {
        return this.likedBy.length;
    }
    get dislikes() {
        return this.dislikedBy.length;
    }
    reset() {
        this.question = '';
        this.answer = '';
        this.source = '';
        this.lecture = '';
        return this;
    }
    isValid() {
        return this.answer.length && this.question.length;
    }
}


/***/ }),

/***/ "./src/app/not-found/not-found.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/not-found/not-found.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_NotFoundComponent, View_NotFoundComponent_0, View_NotFoundComponent_Host_0, NotFoundComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotFoundComponent", function() { return RenderType_NotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotFoundComponent_0", function() { return View_NotFoundComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotFoundComponent_Host_0", function() { return View_NotFoundComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponentNgFactory", function() { return NotFoundComponentNgFactory; });
/* harmony import */ var _not_found_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.scss.shim.ngstyle */ "./src/app/not-found/not-found.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_NotFoundComponent = [_not_found_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NotFoundComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NotFoundComponent, data: {} });

function View_NotFoundComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background full"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "forOfor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["404 Not Found"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Diese Seite konnte nicht gefunden werden"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "iconButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "ti ti-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Back home "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 8, 0, "/home"); _ck(_v, 7, 0, currVal_0); }, null); }
function View_NotFoundComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-not-found", [], null, null, null, View_NotFoundComponent_0, RenderType_NotFoundComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null)], null, null); }
var NotFoundComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-not-found", _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], View_NotFoundComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".background-gif[_ngcontent-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  background-position: bottom;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 20px;\n  padding-bottom: 15px;\n  border-radius: 10px;\n  background: var(--fourOfour-tile);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 40;\n  display: block;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.5s ease;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n  display: inline-block;\n  width: 100%;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n  margin-bottom: 15px;\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0M6XFxVc2Vyc1xcdGltb3NcXERlc2t0b3BcXFdlYnNpdGVzXFxkaGJ3LXJpY2hpZS1yZWRlc2lnbi12Mi9zcmNcXGFwcFxcbm90LWZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtZ2lmIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZm91ck9mb3VyLXRpbGUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiA0MDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuYmFja2dyb3VuZC1naWYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm91ck9mb3VyLXRpbGUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDQwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"];



/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class NotFoundComponent {
    constructor(httpClient, ngZone) {
        this.httpClient = httpClient;
        this.ngZone = ngZone;
        this.backgroundImage = {};
    }
    ngAfterViewInit() {
        this.httpClient
            .get('https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=wolf%20of%20wall%20street&rating=R')
            .subscribe(data => {
            this.ngZone.run(() => {
                this.backgroundImage = {
                    'background-image': `url('${data['data'].image_original_url}')`
                };
            });
        });
    }
}


/***/ }),

/***/ "./src/app/question/add/add.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/question/add/add.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_AddComponent, View_AddComponent_0, View_AddComponent_Host_0, AddComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AddComponent", function() { return RenderType_AddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddComponent_0", function() { return View_AddComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AddComponent_Host_0", function() { return View_AddComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponentNgFactory", function() { return AddComponentNgFactory; });
/* harmony import */ var _add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.component.scss.shim.ngstyle */ "./src/app/question/add/add.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.component */ "./src/app/question/add/add.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../question.service */ "./src/app/question/question.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AddComponent = [_add_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AddComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AddComponent, data: {} });

function View_AddComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "blurTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Frage einreichen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Formular"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 35, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Frage"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "textarea", [["placeholder", "Beispiel: Was ist die Antwort auf alles?"], ["rows", "5"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.question.question = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Antwort"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "textarea", [["placeholder", "Beispiel: 42"], ["rows", "5"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.question.answer = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 15, "div", [["class", "grid grid-3-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quelle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 5, "textarea", [["placeholder", "Vorlesungs Skript"], ["rows", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.question.source = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorlesung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "div", [["class", "filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorlesung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "i", [["class", "ti ti-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "div", [["class", "iconButton"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "i", [["class", "ti ti-reply"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Frage einreichen"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.question.question; _ck(_v, 13, 0, currVal_7); var currVal_15 = _co.question.answer; _ck(_v, 21, 0, currVal_15); var currVal_23 = _co.question.source; _ck(_v, 31, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending; _ck(_v, 28, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); }); }
function View_AddComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add", [], null, null, null, View_AddComponent_0, RenderType_AddComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]], null, null)], null, null); }
var AddComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add", _add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], View_AddComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/question/add/add.component.scss.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/question/add/add.component.scss.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".iconButton[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.iconButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vYWRkL0M6XFxVc2Vyc1xcdGltb3NcXERlc2t0b3BcXFdlYnNpdGVzXFxkaGJ3LXJpY2hpZS1yZWRlc2lnbi12Mi9zcmNcXGFwcFxccXVlc3Rpb25cXGFkZFxcYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbi9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdXR0b24ge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5pY29uQnV0dG9uIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uaWNvbkJ1dHRvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/question/add/add.component.ts":
/*!***********************************************!*\
  !*** ./src/app/question/add/add.component.ts ***!
  \***********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");
/* harmony import */ var src_app_models_question_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/question.model */ "./src/app/models/question.model.ts");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");




const { lectures } = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["constants"];
class AddComponent {
    constructor(notificationService, userService, questionService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.questionService = questionService;
        this.question = new src_app_models_question_model__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        this.lectures = lectures;
    }
    selectionChanged(selection) {
        this.question.lecture = selection;
    }
    onInputKeyDown(event) {
        if (event.key === "Enter")
            this.submitQuestion();
    }
    submitQuestion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.question.isValid()) {
                try {
                    yield this.questionService.addQuestion(this.question);
                    this.notificationService.sendNotification("Deine Frage wurde eingereicht. Danke!", src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].SUCCESS);
                    this.question = this.question.reset();
                }
                catch (_a) {
                    this.notificationService.sendNotification("Upps, da ist was schiefgelaufen!", src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].ERROR);
                }
                return;
            }
            this.notificationService.sendNotification("Bitte fülle alle Felder aus!", src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].ERROR);
        });
    }
}


/***/ }),

/***/ "./src/app/question/question.module.ts":
/*!*********************************************!*\
  !*** ./src/app/question/question.module.ts ***!
  \*********************************************/
/*! exports provided: QuestionModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _management_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../management/auth.guard */ "./src/app/management/auth.guard.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/question/add/add.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question/question.component.ts");




const ɵ0 = { title: 'Richie | Question' }, ɵ1 = { title: 'Richie | Add' };
const questionRoutes = [
    {
        path: 'question/:id',
        component: _question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"],
        data: ɵ0
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"],
        canActivate: [_management_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: ɵ1
    }
];
class QuestionModule {
}



/***/ }),

/***/ "./src/app/question/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/question/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _models_question_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/question.model */ "./src/app/models/question.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");









const backend_url = 'https://raw.githubusercontent.com/TimoScheuermann/cdn/master/DHBW%20Richie';
class QuestionService {
    constructor(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
    }
    getQuestionById(id = '') {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend}/api/question/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], x)))
            .toPromise();
    }
    searchForKeyword(keyword = '') {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend}/api/question`, {
            params: {
                q: keyword
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(qs => qs.map(q => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], q))));
    }
    addQuestion(question) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend}/api/question`, question)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], x)))
            .toPromise();
    }
    getReactedQuestions() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend}/api/question/reacted`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.notificationService.sendNotification('Fehler beim Laden', _models__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].ERROR);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                likedQuestions: [],
                dislikedQuestions: []
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
            return {
                likedQuestions: x.likedQuestions.map(q => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], q)),
                dislikedQuestions: x.dislikedQuestions.map(q => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], q))
            };
        }))
            .toPromise();
    }
    getQuestionsInReviewState() {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend}/api/question/review`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.map(q => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], q))))
            .toPromise();
    }
    likeOrDislikeQuestion(questionId, type) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend}/api/question/${questionId}/${type}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["plainToClass"])(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["Question"], x)))
            .toPromise();
    }
}
QuestionService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ factory: function QuestionService_Factory() { return new QuestionService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"])); }, token: QuestionService, providedIn: "root" });


/***/ }),

/***/ "./src/app/question/question/question.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/question/question/question.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_QuestionComponent, View_QuestionComponent_0, View_QuestionComponent_Host_0, QuestionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_QuestionComponent", function() { return RenderType_QuestionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_QuestionComponent_0", function() { return View_QuestionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_QuestionComponent_Host_0", function() { return View_QuestionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponentNgFactory", function() { return QuestionComponentNgFactory; });
/* harmony import */ var _question_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.component.scss.shim.ngstyle */ "./src/app/question/question/question.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/richie-iconbutton/richie-iconbutton.component.ngfactory */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/richie-iconbutton/richie-iconbutton.component */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ts");
/* harmony import */ var _shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/richie-textarea/richie-textarea.component.ngfactory */ "./src/app/shared/richie-textarea/richie-textarea.component.ngfactory.js");
/* harmony import */ var _shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/richie-textarea/richie-textarea.component */ "./src/app/shared/richie-textarea/richie-textarea.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/richie-comment/richie-comment.component.ngfactory */ "./src/app/shared/richie-comment/richie-comment.component.ngfactory.js");
/* harmony import */ var _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/richie-comment/richie-comment.component */ "./src/app/shared/richie-comment/richie-comment.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./question.component */ "./src/app/question/question/question.component.ts");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../question.service */ "./src/app/question/question.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_QuestionComponent = [_question_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_QuestionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_QuestionComponent, data: {} });

function View_QuestionComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null); }
function View_QuestionComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "landing"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Diese Frage existiert nicht"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["#", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "iconButtonHeading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["M\u00F6glicherweise wurde sie gel\u00F6scht"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "richie-iconbutton", [["icon", "ti ti-search"], ["text", "Neue Antwort suchen"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RichieIconbuttonComponent_0"], _shared_richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RichieIconbuttonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](11, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 0, _shared_richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_4__["RichieIconbuttonComponent"], [_shared_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_5__["SharedFunctions"]], { icon: [0, "icon"], text: [1, "text"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Solltest du dennoch weitere Fragen haben, kannst du "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["hier"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ganz einfach nach einer Antwort suchen "]))], function (_ck, _v) { var currVal_1 = _ck(_v, 11, 0, "../../search"); _ck(_v, 10, 0, currVal_1); var currVal_2 = "ti ti-search"; var currVal_3 = "Neue Antwort suchen"; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_6 = _ck(_v, 17, 0, "../../search"); _ck(_v, 16, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.question.id; _ck(_v, 4, 0, currVal_0); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href; _ck(_v, 15, 0, currVal_4, currVal_5); }); }
function View_QuestionComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "landing"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["#", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 11, "div", [["class", "answerHead"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Antwort"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "action"], ["style", "color: rgb(52, 199, 89)"]], [[1, "amount", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.likeOrDislikeQuestion("like") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "action"], ["style", "color: rgb(255, 59, 48)"]], [[1, "amount", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.likeOrDislikeQuestion("dislike") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Teilen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 23, "div", [["class", "paragraph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Kommentare"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "richie-textarea", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "cancel"], [null, "submit"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.publicComment = $event) !== false);
        ad = (pd_0 && ad);
    } if (("cancel" === en)) {
        var pd_1 = (_co.cancel() !== false);
        ad = (pd_1 && ad);
    } if (("submit" === en)) {
        var pd_2 = (_co.submit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RichieTextareaComponent_0"], _shared_richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RichieTextareaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, null, 0, _shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_8__["RichieTextareaComponent"], [], { placeholder: [0, "placeholder"], hasActions: [1, "hasActions"] }, { cancel: "cancel", submit: "submit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_shared_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_8__["RichieTextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 14, "div", [["class", "commentWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 3, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 1, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 1, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "richie-comment", [["author", "Das bin ich"], ["comment", "Hallo Welt"], ["date", "62376274676468"], ["id", "0"]], null, null, null, _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_RichieCommentComponent_0"], _shared_richie_comment_richie_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_RichieCommentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 49152, null, 0, _shared_richie_comment_richie_comment_component__WEBPACK_IMPORTED_MODULE_11__["RichieCommentComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]], { id: [0, "id"], comment: [1, "comment"], author: [2, "author"], date: [3, "date"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_12 = "\u00D6ffentlich kommentieren..."; var currVal_13 = true; _ck(_v, 24, 0, currVal_12, currVal_13); var currVal_14 = _co.publicComment; _ck(_v, 26, 0, currVal_14); var currVal_15 = "0"; var currVal_16 = "Hallo Welt"; var currVal_17 = "Das bin ich"; var currVal_18 = "62376274676468"; _ck(_v, 31, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_19 = "0"; var currVal_20 = "Hallo Welt"; var currVal_21 = "Das bin ich"; var currVal_22 = "62376274676468"; _ck(_v, 33, 0, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = "0"; var currVal_24 = "Hallo Welt"; var currVal_25 = "Das bin ich"; var currVal_26 = "62376274676468"; _ck(_v, 35, 0, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_27 = "0"; var currVal_28 = "Hallo Welt"; var currVal_29 = "Das bin ich"; var currVal_30 = "62376274676468"; _ck(_v, 37, 0, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_31 = "0"; var currVal_32 = "Hallo Welt"; var currVal_33 = "Das bin ich"; var currVal_34 = "62376274676468"; _ck(_v, 39, 0, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_35 = "0"; var currVal_36 = "Hallo Welt"; var currVal_37 = "Das bin ich"; var currVal_38 = "62376274676468"; _ck(_v, 41, 0, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = "0"; var currVal_40 = "Hallo Welt"; var currVal_41 = "Das bin ich"; var currVal_42 = "62376274676468"; _ck(_v, 43, 0, currVal_39, currVal_40, currVal_41, currVal_42); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.question.question; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.question.id; _ck(_v, 4, 0, currVal_1); var currVal_2 = (((_co.question.likedBy == null) ? null : _co.question.likedBy.length) || 0); _ck(_v, 10, 0, currVal_2); var currVal_3 = (((_co.question.dislikedBy == null) ? null : _co.question.dislikedBy.length) || 0); _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.question.answer; _ck(_v, 19, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 23, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_QuestionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuestionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfThen: [1, "ngIfThen"], ngIfElse: [2, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["notValid", 2]], null, 0, null, View_QuestionComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["valid", 2]], null, 0, null, View_QuestionComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "removeWhite"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isValid; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_QuestionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-question", [], null, null, null, View_QuestionComponent_0, RenderType_QuestionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _question_component__WEBPACK_IMPORTED_MODULE_13__["QuestionComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"], _question_service__WEBPACK_IMPORTED_MODULE_14__["QuestionService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuestionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-question", _question_component__WEBPACK_IMPORTED_MODULE_13__["QuestionComponent"], View_QuestionComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/question/question/question.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/question/question/question.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".commentWrapper[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.answerHead[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 5px;\n}\n\n.answerHead[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.answerHead[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding-top: 5px;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border-bottom: 1px solid var(--input-border);\n  padding: 5px;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0px 5px;\n  min-width: 30px;\n  text-align: center;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 10px;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%], .answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[selected=true][_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[selected=true][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin-right: 10px;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[amount][_ngcontent-%COMP%]::after {\n  content: attr(amount);\n  display: block;\n  opacity: 0.7;\n  font-size: 12px;\n  text-align: center;\n  padding-left: 5px;\n}\n\n.answerHead[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  display: inline-block;\n  opacity: 0.7;\n  margin-left: 10px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24vQzpcXFVzZXJzXFx0aW1vc1xcRGVza3RvcFxcV2Vic2l0ZXNcXGRoYnctcmljaGllLXJlZGVzaWduLXYyL3NyY1xcYXBwXFxxdWVzdGlvblxccXVlc3Rpb25cXHF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtBQ0VKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUlBLGVBQUE7QUNETjs7QURGTTtFQUNFLGlCQUFBO0FDSVI7O0FEQ1E7OztFQUVFLFVBQUE7QUNFVjs7QURDTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ007RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnRXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFuc3dlckhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgKiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgLmFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAuYWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICZbc2VsZWN0ZWQ9J3RydWUnXSB7XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAmW2Ftb3VudF06OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGFtb3VudCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29tbWVudFdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbnN3ZXJIZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYW5zd2VySGVhZCAqIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmFuc3dlckhlYWQgaDIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5hbnN3ZXJIZWFkIC5hY3Rpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYW5zd2VySGVhZCAuYWN0aW9ucyAuYWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYW5zd2VySGVhZCAuYWN0aW9ucyAuYWN0aW9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYW5zd2VySGVhZCAuYWN0aW9ucyAuYWN0aW9uOmhvdmVyIC5kZXNjcmlwdGlvbixcbi5hbnN3ZXJIZWFkIC5hY3Rpb25zIC5hY3Rpb246aG92ZXIgaSwgLmFuc3dlckhlYWQgLmFjdGlvbnMgLmFjdGlvbltzZWxlY3RlZD10cnVlXSAuZGVzY3JpcHRpb24sXG4uYW5zd2VySGVhZCAuYWN0aW9ucyAuYWN0aW9uW3NlbGVjdGVkPXRydWVdIGkge1xuICBvcGFjaXR5OiAxO1xufVxuLmFuc3dlckhlYWQgLmFjdGlvbnMgLmFjdGlvbiBpIHtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYW5zd2VySGVhZCAuYWN0aW9ucyAuYWN0aW9uW2Ftb3VudF06OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihhbW91bnQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uYW5zd2VySGVhZCAuYWN0aW9ucyAuYWN0aW9uIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/question/question/question.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/question/question/question.component.ts ***!
  \*********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");



class QuestionComponent {
    constructor(route, notificationService, questionService) {
        this.route = route;
        this.notificationService = notificationService;
        this.questionService = questionService;
        this.question = {};
    }
    get isValid() {
        return !!this.question.question;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.question = yield this.questionService.getQuestionById(params.id);
        }));
    }
    likeOrDislikeQuestion(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.question = yield this.questionService.likeOrDislikeQuestion(this.question.id, type);
        });
    }
    cancel() {
        this.publicComment = '';
    }
    submit() {
        this.notificationService.sendNotification('Submit: ' + this.publicComment, src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].SUCCESS);
    }
}


/***/ }),

/***/ "./src/app/scss/styles.scss":
/*!**********************************!*\
  !*** ./src/app/scss/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/app/scss/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search/search.component.ts");


const ɵ0 = { title: 'Richie | Frage' };
const searchRoutes = [
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"],
        data: ɵ0
    }
];
class SearchRoutingModule {
}



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
class SearchModule {
}


/***/ }),

/***/ "./src/app/search/search/search.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/search/search/search.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_SearchComponent, View_SearchComponent_0, View_SearchComponent_Host_0, SearchComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SearchComponent", function() { return RenderType_SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SearchComponent_0", function() { return View_SearchComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SearchComponent_Host_0", function() { return View_SearchComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponentNgFactory", function() { return SearchComponentNgFactory; });
/* harmony import */ var _search_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.scss.shim.ngstyle */ "./src/app/search/search/search.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search/search.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _question_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../question/question.service */ "./src/app/question/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_SearchComponent = ["@media screen and (max-height: 399px) {\n    .searchBar[_ngcontent-%COMP%] {\n      top: 85px;\n    }\n  }\n  @media screen and (min-height: 400px) {\n    .searchBar[_ngcontent-%COMP%] {\n      top: 100px;\n    }\n  }", _search_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SearchComponent, data: { "animation": [{ type: 7, name: "quickLinks", definitions: [{ type: 0, name: "linksOpen", styles: { type: 6, styles: { "max-height": "60px" }, offset: null }, options: undefined }, { type: 0, name: "linksClose", styles: { type: 6, styles: { "max-height": "0px" }, offset: null }, options: undefined }, { type: 1, expr: "linksOpen <=> linksClose", animation: [], options: null }], options: {} }, { type: 7, name: "landingStyle", definitions: [{ type: 0, name: "landingOpen", styles: { type: 6, styles: { "min-height": "100vh", "margin-bottom": "0px" }, offset: null }, options: undefined }, { type: 0, name: "landingClose", styles: { type: 6, styles: { "min-height": "268.667px", "margin-bottom": "-50px" }, offset: null }, options: undefined }, { type: 1, expr: "landingOpen <=> landingClose", animation: [], options: null }], options: {} }, { type: 7, name: "landingWrapper", definitions: [{ type: 0, name: "landingWrapperOpen", styles: { type: 6, styles: { top: "50%" }, offset: null }, options: undefined }, { type: 0, name: "landingWrapperClose", styles: { type: 6, styles: { top: "124.334px" }, offset: null }, options: undefined }, { type: 1, expr: "landingWrapperOpen <=> landingWrapperClose", animation: [], options: null }], options: {} }, { type: 7, name: "resultsWrapper", definitions: [{ type: 0, name: "resultsWrapperOpen", styles: { type: 6, styles: { "display": "none", "max-height": "0px" }, offset: null }, options: undefined }, { type: 0, name: "resultsWrapperClose", styles: { type: 6, styles: { "display": "block", "max-height": "unset" }, offset: null }, options: undefined }, { type: 1, expr: "resultsWrapperOpen <=> resultsWrapperClose", animation: [], options: null }], options: {} }] } });

function View_SearchComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { qElements: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "searchBar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "form", [["method", "GET"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "input", [["placeholder", "Was m\u00F6chtest du wissen?"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "input", [["type", "submit"], ["value", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "background-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 15, "div", [["class", "seperator specialSeperator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Filter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 12, "div", [["class", "filterList"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorlesung "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "i", [["class", "ti ti-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorlesung "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "i", [["class", "ti ti-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorlesung "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "i", [["class", "ti ti-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vorlesung "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "ti ti-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 126, "div", [["class", "results"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 17, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 1, "div", [["class", "question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Was ist die Antwort auf alles?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 1, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia aut nemo consectetur. Ea mollitia totam modi repudiandae dignissimos id deleniti atque laborum tempore deserunt dicta, pariatur harum commodi aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero tempora, dolorum dolore aperiam maiores sequi, ratione architecto iste corrupti officia suscipit sit voluptates quae dolor hic doloribus esse ducimus. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 12, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 2, "div", [["class", "action green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 0, "i", [["class", "ti ti-like"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["137"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 2, "div", [["class", "action red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 0, "i", [["class", "ti ti-dislike"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["65"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 2, "div", [["class", "action blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 0, "i", [["class", "ti ti-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 2, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 0, "i", [["class", "ti ti-share"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vergr\u00F6\u00DFern"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_SearchComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-search", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onScroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_SearchComponent_0, RenderType_SearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], [_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _question_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-search", _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], View_SearchComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/search/search/search.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/search/search/search.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@media only screen and (min-width: 850px) {\n  .questionwrapper[_ngcontent-%COMP%] {\n    -moz-columns: 2;\n         columns: 2;\n    -moz-column-gap: 40px;\n         column-gap: 40px;\n    margin: 20px 60px;\n  }\n}\n@media only screen and (max-width: 849px) {\n  .questionwrapper[_ngcontent-%COMP%] {\n    -moz-columns: 1;\n         columns: 1;\n    margin: 20px 10px;\n    margin-bottom: 0px;\n  }\n}\n.questionwrapper[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.questionwrapper[_ngcontent-%COMP%]   .resultWrapper[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.searchWrapper[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  margin: 0px 10%;\n  margin-top: 10px;\n  margin-bottom: -50px;\n}\n.searchBar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 45px;\n  grid-template-rows: 40px;\n  grid-gap: 0;\n  border-radius: 20px;\n  background: rgba(200, 200, 200, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\n}\n.searchBar[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%] {\n  display: inline-grid;\n  padding-left: 20px;\n}\n.searchBar[_ngcontent-%COMP%]   .inputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  width: 100%;\n  color: #fff;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n.searchBar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: inline-grid;\n  color: #fff;\n  padding: 10px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.searchBar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.filterWrapper[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\n.filter[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 10px;\n}\n.name[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border);\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 5px 10px;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.searchLanding[_ngcontent-%COMP%] {\n  width: calc(100% + env(safe-area-inset-left) + env(safe-area-inset-right));\n  background: var(--landing-bg);\n  background-size: cover;\n  background-position: center;\n  transition: 1.4s ease;\n  margin-left: calc(-1 * env(safe-area-inset-left));\n  margin-right: calc(-1 * env(safe-area-inset-right));\n}\n.searchLanding[_ngcontent-%COMP%]   .searchLandingWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  transform: translateY(-50%);\n  transition: 1.4s ease;\n}\n.searchLanding[_ngcontent-%COMP%]   .searchLandingWrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  text-align: center;\n}\n.come-in[_ngcontent-%COMP%] {\n  -webkit-animation: come-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: come-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@-webkit-keyframes come-in {\n  from {\n    transform: scale(0.5) translateY(100px);\n    opacity: 0 !important;\n  }\n  to {\n    transform: scale(1) translateY(0px);\n    opacity: 1 !important;\n  }\n}\n@keyframes come-in {\n  from {\n    transform: scale(0.5) translateY(100px);\n    opacity: 0 !important;\n  }\n  to {\n    transform: scale(1) translateY(0px);\n    opacity: 1 !important;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .quickLinks[_ngcontent-%COMP%] {\n    left: 50px;\n  }\n}\n@media only screen and (max-width: 849px) {\n  .quickLinks[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.quickLinks[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  right: 0;\n  text-align: center;\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 1s ease;\n}\n.quickLinks[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin: 10px;\n  background: rgba(128, 128, 128, 0.05);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  padding: 10px 15px;\n  border-radius: 50px;\n  line-height: 20px;\n  height: 20px;\n  display: inline-block;\n  font-weight: 600;\n  font-size: 0.9em;\n  transition: 0.2s ease;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n}\n.quickLinks[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.quickLinks[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  line-height: inherit;\n  font-size: inherit;\n  margin-right: 20px;\n  top: 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxlQUFBO1NBQUEsVUFBQTtJQUNBLHFCQUFBO1NBQUEsZ0JBQUE7SUFDQSxpQkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0UsZUFBQTtTQUFBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UscUJBQUE7QUNIRjtBRElFO0VBQ0UsVUFBQTtBQ0ZKO0FETUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkNBQUE7QUNIRjtBRElFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNETjtBRElFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0FDRE47QURNQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDSEY7QURJRTtFQUNFLGtCQUFBO0FDRko7QURNQTtFQUNFLDBFQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFFQSxpREFBQTtFQUNBLG1EQUFBO0FDSkY7QURNRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE1JO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0pOO0FEU0E7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0FDTkY7QURTQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSxxQkFBQTtFQ05GO0VEUUE7SUFDRSxtQ0FBQTtJQUNBLHFCQUFBO0VDTkY7QUFDRjtBREZBO0VBQ0U7SUFDRSx1Q0FBQTtJQUNBLHFCQUFBO0VDTkY7RURRQTtJQUNFLG1DQUFBO0lBQ0EscUJBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLFVBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRTtJQUNFLE9BQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FDVEY7QURXRTtFQUNFLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNUSjtBRFdJO0VBQ0UsWUFBQTtBQ1ROO0FEWUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDVk4iLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyb3dzZXIpIHtcclxuICAucXVlc3Rpb253cmFwcGVyIHtcclxuICAgIGNvbHVtbnM6IDI7XHJcbiAgICBjb2x1bW4tZ2FwOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAucXVlc3Rpb253cmFwcGVyIHtcclxuICAgIGNvbHVtbnM6IDE7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5xdWVzdGlvbndyYXBwZXIge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAucmVzdWx0V3JhcHBlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaFdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwcHggMTAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hCYXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDVweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHg7XHJcbiAgZ3JpZC1nYXA6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLmlucHV0V3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyV3JhcHBlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hMYW5kaW5nIHtcclxuICB3aWR0aDogY2FsYygxMDAlICsgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1sYW5kaW5nLWJnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAxLjRzIGVhc2U7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKC0xICogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xyXG5cclxuICAuc2VhcmNoTGFuZGluZ1dyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAxLjRzIGVhc2U7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29tZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBjb21lLWluIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjb21lLWluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicm93c2VyKSB7XHJcbiAgLnF1aWNrTGlua3Mge1xyXG4gICAgbGVmdDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gIC5xdWlja0xpbmtzIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucXVpY2tMaW5rcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuXHJcbiAgLmxpbmsge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICB0b3A6IDE3JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xuICAucXVlc3Rpb253cmFwcGVyIHtcbiAgICBjb2x1bW5zOiAyO1xuICAgIGNvbHVtbi1nYXA6IDQwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcbiAgLnF1ZXN0aW9ud3JhcHBlciB7XG4gICAgY29sdW1uczogMTtcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbi5xdWVzdGlvbndyYXBwZXIge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ucXVlc3Rpb253cmFwcGVyIC5yZXN1bHRXcmFwcGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNlYXJjaFdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwcHggMTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbn1cblxuLnNlYXJjaEJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQ1cHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweDtcbiAgZ3JpZC1nYXA6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4zKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3gtc2hhZG93OiAycHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnNlYXJjaEJhciAuaW5wdXRXcmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5zZWFyY2hCYXIgLmlucHV0V3JhcHBlciBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaEJhciAuc2VhcmNoIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlYXJjaEJhciAuc2VhcmNoIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5maWx0ZXJXcmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5maWx0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5uYW1lIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZWFyY2hMYW5kaW5nIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxhbmRpbmctYmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDEuNHMgZWFzZTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKC0xICogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xufVxuLnNlYXJjaExhbmRpbmcgLnNlYXJjaExhbmRpbmdXcmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2l0aW9uOiAxLjRzIGVhc2U7XG59XG4uc2VhcmNoTGFuZGluZyAuc2VhcmNoTGFuZGluZ1dyYXBwZXIgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21lLWluIHtcbiAgYW5pbWF0aW9uOiBjb21lLWluIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbn1cblxuQGtleWZyYW1lcyBjb21lLWluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XG4gIC5xdWlja0xpbmtzIHtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XG4gIC5xdWlja0xpbmtzIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4ucXVpY2tMaW5rcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG59XG4ucXVpY2tMaW5rcyAubGluayB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5xdWlja0xpbmtzIC5saW5rOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnF1aWNrTGlua3MgLmxpbmsgaSB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdG9wOiAxNyU7XG59Il19 */"];



/***/ }),

/***/ "./src/app/search/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/search/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/notificationTyp.enum */ "./src/app/models/notificationTyp.enum.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");





class SearchComponent {
    constructor(notificationService, questionService, route, router) {
        this.notificationService = notificationService;
        this.questionService = questionService;
        this.route = route;
        this.router = router;
        // Animation trigger / Style Flags
        this.quickLinks = true;
        this.landing = true;
        this.landingWrapper = true;
        this.resultsWrapper = true;
        this.searchQuery = '';
        this.foundQuestions = [];
        this.isSearching = false;
        this.constants = _shared_constants__WEBPACK_IMPORTED_MODULE_4__["constants"];
    }
    selectionChanged(filterNmbr, selection) {
        console.log('Filter %i -> %s', filterNmbr, selection);
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.q) {
                this.searchQuery = params.q;
                this.startSearch();
            }
        });
    }
    ngAfterViewInit() {
        this.qElements.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(v => !v.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(700))
            .subscribe(() => this.onScroll());
    }
    onInputKeyDown(event) {
        if (event.key === 'Enter')
            this.startSearch();
    }
    startSearch() {
        if (this.isSearching)
            return;
        this.isSearching = true;
        this.toggleStyles(true);
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParams: {
                q: this.searchQuery
            },
            queryParamsHandling: 'merge'
        });
        this.questionService.searchForKeyword(this.searchQuery).subscribe(q => {
            if (!q.length) {
                this.notificationService.sendNotification('Es konnten leider keiner Suchergebnisse gefunden werden', src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR);
                this.isSearching = false;
                return;
            }
            this.foundQuestions = q;
            this.toggleStyles(false);
            this.isSearching = false;
            this.notificationService.sendNotification(`Die Suche ergab folgende Treffer`, src_app_models_notificationTyp_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS);
        });
    }
    toggleStyles(toggle) {
        this.quickLinks = toggle;
        this.landing = toggle;
        this.landingWrapper = toggle;
        this.resultsWrapper = toggle;
    }
    likeOrDislike({ action, question }, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.foundQuestions[index] = yield this.questionService.likeOrDislikeQuestion(question.id, action);
        });
    }
    onScroll() {
        if (!this.qElements || !this.qElements.length) {
            return;
        }
        this.qElements.forEach(e => {
            const element = e.nativeElement;
            const positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - window.innerHeight <= 0 &&
                !element.classList.contains('come-in')) {
                element.classList.remove('resultWrapper');
                element.classList.add('come-in');
            }
        });
    }
}


/***/ }),

/***/ "./src/app/shared/clickOutside.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/clickOutside.directive.ts ***!
  \**************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* tslint:disable:member-ordering */

class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseEnter(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    }
}


/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
const constants = {
    twitterURL: 'TWITTERURL',
    instagramURL: 'INSTAGRAMURL',
    telegramURL: 'TELEGRAMURL',
    facebookURL: 'FACEBOOKURL',
    youtubeURL: 'YOUTUBEURL',
    botURL: 'https://t.me/dhbw_richie_bot',
    lectures: [
        'Einführung IT',
        'Logik & Algebra',
        'Finanzmathe',
        'Programmieren I',
        'Programmieren II',
        'Bilanzierung',
        'Vertrags-Recht',
        'Was auch immer',
        'soll mir das',
        'Backend schicken'
    ]
};


/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class NotificationService {
    constructor() {
        this.queue = [];
        this.state = false;
        this.currentNotification = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    sendNotification(message, type) {
        this.queue.unshift({ message, type });
        this.loop();
    }
    loop() {
        if (!this.state) {
            const notification = this.queue.pop();
            if (notification) {
                this.currentNotification.next(notification);
                this.state = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(5000).subscribe(() => {
                    this.state = false;
                    this.loop();
                });
            }
        }
    }
}
NotificationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function NotificationService_Factory() { return new NotificationService(); }, token: NotificationService, providedIn: "root" });


/***/ }),

/***/ "./src/app/shared/notification/notification.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/shared/notification/notification.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_NotificationComponent, View_NotificationComponent_0, View_NotificationComponent_Host_0, NotificationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotificationComponent", function() { return RenderType_NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotificationComponent_0", function() { return View_NotificationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotificationComponent_Host_0", function() { return View_NotificationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponentNgFactory", function() { return NotificationComponentNgFactory; });
/* harmony import */ var _notification_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component.scss.shim.ngstyle */ "./src/app/shared/notification/notification.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.component */ "./src/app/shared/notification/notification.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notification.service */ "./src/app/shared/notification.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_NotificationComponent = [_notification_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NotificationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NotificationComponent, data: {} });

function View_NotificationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "notificationWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "notification"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.style; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_co.currentNotification == null) ? null : ((_co.currentNotification.type == null) ? null : _co.currentNotification.type.class)); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.currentNotification == null) ? null : ((_co.currentNotification.type == null) ? null : _co.currentNotification.type.icon)); _ck(_v, 5, 0, currVal_2); var currVal_3 = ((_co.currentNotification == null) ? null : _co.currentNotification.message); _ck(_v, 7, 0, currVal_3); }); }
function View_NotificationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-notification", [], null, null, null, View_NotificationComponent_0, RenderType_NotificationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], [_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotificationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-notification", _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"], View_NotificationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/notification/notification.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification/notification.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".notificationWrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  pointer-events: none;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 30px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 10010;\n  width: 100%;\n}\n.notificationWrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  display: inline-flexbox;\n  transform: scale(0);\n  height: 40px;\n  line-height: 40px;\n  padding-right: 20px;\n  padding-left: 40px;\n  background: rgba(200, 200, 200, 0.3);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\n  color: var(--font-color);\n  border-radius: 20px;\n  font-size: 1em;\n  font-weight: 600;\n  overflow: hidden;\n}\n.notificationWrapper[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  line-height: 40px;\n  margin-left: -35px;\n  font-size: 30px;\n  top: 5px;\n}\n.notificationWrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.notificationWrapper[_ngcontent-%COMP%]   .inf[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #08f;\n}\n.notificationWrapper[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fc5c65;\n}\n.notificationWrapper[_ngcontent-%COMP%]   .suc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34c759;\n}\n@-webkit-keyframes notification-animation {\n  0% {\n    transform: translateZ(-1400px) translateY(800px) scale(1);\n    max-width: 0;\n    padding: 0;\n    padding-left: 40px;\n  }\n  10% {\n    transform: translateZ(0) translateY(0);\n    max-width: 0;\n    padding: 0;\n    padding-left: 40px;\n    letter-spacing: -0.5em;\n  }\n  20%, 100% {\n    max-width: 100%;\n    padding-left: 40px;\n    padding-right: 20px;\n    letter-spacing: normal;\n  }\n  90% {\n    max-width: 100%;\n    padding-left: 40px;\n    padding-right: 20px;\n    transform: scale(1);\n    letter-spacing: normal;\n    opacity: 1;\n  }\n  99% {\n    max-width: 100%;\n    padding-left: 40px;\n    padding-right: 20px;\n    transform: scale(0);\n    letter-spacing: normal;\n    opacity: 0;\n  }\n}\n@keyframes notification-animation {\n  0% {\n    transform: translateZ(-1400px) translateY(800px) scale(1);\n    max-width: 0;\n    padding: 0;\n    padding-left: 40px;\n  }\n  10% {\n    transform: translateZ(0) translateY(0);\n    max-width: 0;\n    padding: 0;\n    padding-left: 40px;\n    letter-spacing: -0.5em;\n  }\n  20%, 100% {\n    max-width: 100%;\n    padding-left: 40px;\n    padding-right: 20px;\n    letter-spacing: normal;\n  }\n  90% {\n    max-width: 100%;\n    padding-left: 40px;\n    padding-right: 20px;\n    transform: scale(1);\n    letter-spacing: normal;\n    opacity: 1;\n  }\n  99% {\n    max-width: 100%;\n    padding-left: 40px;\n    padding-right: 20px;\n    transform: scale(0);\n    letter-spacing: normal;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXHNoYXJlZFxcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ0VOO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7QUNESjtBREdFO0VBQ0UsY0FBQTtBQ0RKO0FES0E7RUFDRTtJQUNFLHlEQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0ZGO0VES0E7SUFDRSxzQ0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQ0hGO0VES0E7SUFFRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VDSkY7RURNQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7RUNKRjtFRE1BO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtFQ0pGO0FBQ0Y7QURqQ0E7RUFDRTtJQUNFLHlEQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0ZGO0VES0E7SUFDRSxzQ0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQ0hGO0VES0E7SUFFRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VDSkY7RURNQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7RUNKRjtFRE1BO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb25XcmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5ub3RpZmljYXRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjMpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5pbmYgaSB7XHJcbiAgICBjb2xvcjogIzA4ZjtcclxuICB9XHJcblxyXG4gIC5lcnIgaSB7XHJcbiAgICBjb2xvcjogI2ZjNWM2NTtcclxuICB9XHJcbiAgLnN1YyBpIHtcclxuICAgIGNvbG9yOiAjMzRjNzU5O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBub3RpZmljYXRpb24tYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCkgdHJhbnNsYXRlWSg4MDBweCkgc2NhbGUoMSk7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgbWF4LXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41ZW07XHJcbiAgfVxyXG4gIDIwJSxcclxuICAxMDAlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIH1cclxuICA5MCUge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5ub3RpZmljYXRpb25XcmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3R0b206IDMwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAxMDAxMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubm90aWZpY2F0aW9uV3JhcHBlciAubm90aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubm90aWZpY2F0aW9uV3JhcHBlciAubm90aWZpY2F0aW9uIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0b3A6IDVweDtcbn1cbi5ub3RpZmljYXRpb25XcmFwcGVyIC5tZXNzYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5ub3RpZmljYXRpb25XcmFwcGVyIC5pbmYgaSB7XG4gIGNvbG9yOiAjMDhmO1xufVxuLm5vdGlmaWNhdGlvbldyYXBwZXIgLmVyciBpIHtcbiAgY29sb3I6ICNmYzVjNjU7XG59XG4ubm90aWZpY2F0aW9uV3JhcHBlciAuc3VjIGkge1xuICBjb2xvcjogIzM0Yzc1OTtcbn1cblxuQGtleWZyYW1lcyBub3RpZmljYXRpb24tYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTQwMHB4KSB0cmFuc2xhdGVZKDgwMHB4KSBzY2FsZSgxKTtcbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKTtcbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVlbTtcbiAgfVxuICAyMCUsIDEwMCUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB9XG4gIDkwJSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk5JSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./src/app/shared/notification/notification.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/notification/notification.component.ts ***!
  \***************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class NotificationComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.currentNotification = {};
        this.style = {
            display: 'none',
            animation: 'none'
        };
    }
    ngOnInit() {
        this.notificationService.currentNotification.subscribe(n => {
            this.currentNotification = n;
            this.style = {
                display: 'none',
                animation: 'none'
            };
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(50).subscribe(() => {
                this.style = {
                    display: 'block',
                    animation: 'notification-animation 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
                };
            });
        });
    }
    ngOnDestroy() {
        this.notificationService.currentNotification.unsubscribe();
    }
}


/***/ }),

/***/ "./src/app/shared/richie-comment/richie-comment.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/richie-comment/richie-comment.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_RichieCommentComponent, View_RichieCommentComponent_0, View_RichieCommentComponent_Host_0, RichieCommentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RichieCommentComponent", function() { return RenderType_RichieCommentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieCommentComponent_0", function() { return View_RichieCommentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieCommentComponent_Host_0", function() { return View_RichieCommentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieCommentComponentNgFactory", function() { return RichieCommentComponentNgFactory; });
/* harmony import */ var _richie_comment_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richie-comment.component.scss.shim.ngstyle */ "./src/app/shared/richie-comment/richie-comment.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../richie-textarea/richie-textarea.component.ngfactory */ "./src/app/shared/richie-textarea/richie-textarea.component.ngfactory.js");
/* harmony import */ var _richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../richie-textarea/richie-textarea.component */ "./src/app/shared/richie-textarea/richie-textarea.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _richie_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./richie-comment.component */ "./src/app/shared/richie-comment/richie-comment.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notification.service */ "./src/app/shared/notification.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_RichieCommentComponent = [_richie_comment_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RichieCommentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RichieCommentComponent, data: { "animation": [{ type: 7, name: "toggleTextarea", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: { display: "block" }, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { display: "none" }, offset: null }, options: undefined }, { type: 1, expr: "open <=> closed", animation: [], options: null }], options: {} }] } });

function View_RichieCommentComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "delete"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteComment() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "ti ti-delete"]], null, null, null, null, null))], null, null); }
function View_RichieCommentComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "reply"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleTextarea() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "ti ti-reply"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Antworten... "]))], null, null); }
function View_RichieCommentComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieCommentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "answerWrapper"]], [[24, "@toggleTextarea", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "richie-textarea", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "cancel"], [null, "submit"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.answer = $event) !== false);
        ad = (pd_0 && ad);
    } if (("cancel" === en)) {
        var pd_1 = (_co.cancel() !== false);
        ad = (pd_1 && ad);
    } if (("submit" === en)) {
        var pd_2 = (_co.submit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_RichieTextareaComponent_0"], _richie_textarea_richie_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_RichieTextareaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_4__["RichieTextareaComponent"], [], { placeholder: [0, "placeholder"], hasActions: [1, "hasActions"] }, { cancel: "cancel", submit: "submit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_richie_textarea_richie_textarea_component__WEBPACK_IMPORTED_MODULE_4__["RichieTextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.textareaStyle; _ck(_v, 3, 0, currVal_1); var currVal_10 = "\u00D6ffentlich antworten..."; var currVal_11 = true; _ck(_v, 6, 0, currVal_10, currVal_11); var currVal_12 = _co.answer; _ck(_v, 8, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.comment; _ck(_v, 1, 0, currVal_0); var currVal_2 = (_co.textareaStyle ? "open" : "closed"); _ck(_v, 4, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_RichieCommentComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "deleted"]], null, null, null, null, null))], null, null); }
function View_RichieCommentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "comment"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "author"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "ti ti-at"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieCommentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "div", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieCommentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieCommentComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.author === _co.author); _ck(_v, 10, 0, currVal_2); var currVal_3 = (_co.comment !== "$_DEL"); _ck(_v, 13, 0, currVal_3); var currVal_4 = (_co.comment === "$_DEL"); _ck(_v, 15, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.author; _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.date, "HH:mm dd.MM.yyy")); _ck(_v, 7, 0, currVal_1); }); }
function View_RichieCommentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-comment", [], null, null, null, View_RichieCommentComponent_0, RenderType_RichieCommentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _richie_comment_component__WEBPACK_IMPORTED_MODULE_6__["RichieCommentComponent"], [_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]], null, null)], null, null); }
var RichieCommentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-comment", _richie_comment_component__WEBPACK_IMPORTED_MODULE_6__["RichieCommentComponent"], View_RichieCommentComponent_Host_0, { id: "id", comment: "comment", author: "author", date: "date" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/shared/richie-comment/richie-comment.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/richie-comment/richie-comment.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n.comment[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 15px 0px;\n}\n.comment[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--input-border);\n}\n.comment[_ngcontent-%COMP%]   .answerWrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: 0.5s ease;\n  margin-top: 10px;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  margin-left: 5px;\n  border-left: 1px solid var(--input-border);\n  white-space: pre-line;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .deleted[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-size: 0.85em;\n  font-style: italic;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .deleted[_ngcontent-%COMP%]::before {\n  content: \"Dieser Kommentar wurde gel\u00F6scht!\";\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .writeComment[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.8em;\n  opacity: 0.75;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  margin-right: 18px;\n}\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  margin-bottom: 10px;\n  font-size: 0.8em;\n  opacity: 0.8;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #08f;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  top: 2px;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before {\n  content: \"\u22C5\";\n  margin-right: 10px;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: #ff3b30;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: 0.2s ease;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.comment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 3px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JpY2hpZS1jb21tZW50L3JpY2hpZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcmljaGllLWNvbW1lbnQvQzpcXFVzZXJzXFx0aW1vc1xcRGVza3RvcFxcV2Vic2l0ZXNcXGRoYnctcmljaGllLXJlZGVzaWduLXYyL3NyY1xcYXBwXFxzaGFyZWRcXHJpY2hpZS1jb21tZW50XFxyaWNoaWUtY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBREVGO0FDREU7RUFDRSw0Q0FBQTtBREdKO0FDQUU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0FJO0VBQ0UsbUJBQUE7QURFTjtBQ0FJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURFTjtBQ0RNO0VBQ0UsMkNBQUE7QURHUjtBQ0FJO0VBQ0UsZ0JBQUE7QURFTjtBQ0FJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURFTjtBQ0RNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBREdSO0FDRE07RUFDRSxZQUFBO0FER1I7QUNFRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURBSjtBQ0VJO0VBQ0UscUJBQUE7QURBTjtBQ0dJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FERE47QUNFTTtFQUNFLGlCQUFBO0VBQ0EsUUFBQTtBREFSO0FDR0k7RUFDRSxpQkFBQTtBREROO0FDRU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURBUjtBQ0dJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBREROO0FDRU07RUFDRSxVQUFBO0FEQVI7QUNFTTtFQUNFLFFBQUE7RUFDQSxlQUFBO0FEQVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcmljaGllLWNvbW1lbnQvcmljaGllLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29tbWVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuLmNvbW1lbnQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xufVxuLmNvbW1lbnQgLmFuc3dlcldyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29tbWVudCAubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbi5jb21tZW50IC5tZXNzYWdlIC5jb21tZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5jb21tZW50IC5tZXNzYWdlIC5kZWxldGVkIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNvbW1lbnQgLm1lc3NhZ2UgLmRlbGV0ZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiRGllc2VyIEtvbW1lbnRhciB3dXJkZSBnZWzDtnNjaHQhXCI7XG59XG4uY29tbWVudCAubWVzc2FnZSAud3JpdGVDb21tZW50IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb21tZW50IC5tZXNzYWdlIC5yZXBseSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbW1lbnQgLm1lc3NhZ2UgLnJlcGx5IGkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuLmNvbW1lbnQgLm1lc3NhZ2UgLnJlcGx5OmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xufVxuLmNvbW1lbnQgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjg7XG59XG4uY29tbWVudCAuaGVhZGVyICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29tbWVudCAuaGVhZGVyIC5hdXRob3Ige1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzA4Zjtcbn1cbi5jb21tZW50IC5oZWFkZXIgLmF1dGhvciBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRvcDogMnB4O1xufVxuLmNvbW1lbnQgLmhlYWRlciAuZGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbW1lbnQgLmhlYWRlciAuZGF0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKLhVwiO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29tbWVudCAuaGVhZGVyIC5kZWxldGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6ICNmZjNiMzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG4uY29tbWVudCAuaGVhZGVyIC5kZWxldGU6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbW1lbnQgLmhlYWRlciAuZGVsZXRlIGkge1xuICB0b3A6IDNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSIsIi5jb21tZW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xyXG4gIH1cclxuXHJcbiAgLmFuc3dlcldyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAuY29tbWVudCB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVsZXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnRGllc2VyIEtvbW1lbnRhciB3dXJkZSBnZWzDtnNjaHQhJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndyaXRlQ29tbWVudCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucmVwbHkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgaSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcblxyXG4gICAgKiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aG9yIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMwOGY7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ1xcMjJDNSc7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVsZXRlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCA1OSwgNDgpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/shared/richie-comment/richie-comment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/richie-comment/richie-comment.component.ts ***!
  \*******************************************************************/
/*! exports provided: RichieCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieCommentComponent", function() { return RichieCommentComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");

class RichieCommentComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.textareaStyle = false;
    }
    toggleTextarea() {
        this.answer = '';
        this.textareaStyle = !this.textareaStyle;
    }
    deleteComment() {
        this.comment = '$_DEL';
        this.notificationService.sendNotification(`Kommentar #${this.id} gelöscht`, src_app_models__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].INFORMATION);
    }
    submit() {
        this.notificationService.sendNotification(`Antwort "${this.answer}" auf #${this.id} gespeichert`, src_app_models__WEBPACK_IMPORTED_MODULE_0__["NotificationType"].SUCCESS);
        this.cancel();
    }
    cancel() {
        this.textareaStyle = false;
    }
}


/***/ }),

/***/ "./src/app/shared/richie-cookie/richie-cookie.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/richie-cookie/richie-cookie.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_RichieCookieComponent, View_RichieCookieComponent_0, View_RichieCookieComponent_Host_0, RichieCookieComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RichieCookieComponent", function() { return RenderType_RichieCookieComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieCookieComponent_0", function() { return View_RichieCookieComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieCookieComponent_Host_0", function() { return View_RichieCookieComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieCookieComponentNgFactory", function() { return RichieCookieComponentNgFactory; });
/* harmony import */ var _richie_cookie_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richie-cookie.component.scss.shim.ngstyle */ "./src/app/shared/richie-cookie/richie-cookie.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _richie_cookie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./richie-cookie.component */ "./src/app/shared/richie-cookie/richie-cookie.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification.service */ "./src/app/shared/notification.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_RichieCookieComponent = [_richie_cookie_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RichieCookieComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RichieCookieComponent, data: { "animation": [{ type: 7, name: "hideCookie", definitions: [{ type: 0, name: "open", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "closed", styles: { type: 6, styles: { transform: "translateZ(600px) translateY(300px)", opacity: 0 }, offset: null }, options: undefined }, { type: 1, expr: "open => closed", animation: [], options: null }], options: {} }] } });

function View_RichieCookieComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [["class", "cookies"]], [[24, "@hideCookie", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Wir sch\u00E4tzen deine Privatsph\u00E4re"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 11, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Sie DHBW-Richie.de besuchen, verwenden wir Cookies und andere Methoden, um Ihre personenbezogenen Daten zu verarbeiten und um Inhalte und Ihre Website-Erfahrung zu verbessern. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Bitte klicken Sie auf \"Akzeptieren\", um der Verwendung Ihrer Daten zu zustimmen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Weitere Informationen dar\u00FCber, wie wir Ihre personenbezogenen Daten verarbeiten, finden Sie in unseren "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "a", [["fragment", "cookies"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.hide() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Datenschutzbestimmungen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "a", [["fragment", "cookies"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.hide() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Privacy Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.decline() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ablehnen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.accept() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Akzeptieren"]))], function (_ck, _v) { var currVal_3 = "cookies"; var currVal_4 = _ck(_v, 12, 0, "legal"); _ck(_v, 11, 0, currVal_3, currVal_4); var currVal_7 = "cookies"; var currVal_8 = _ck(_v, 18, 0, "legal"); _ck(_v, 17, 0, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.cookieStyle ? "open" : "closed"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_5, currVal_6); }); }
function View_RichieCookieComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-cookie", [], null, null, null, View_RichieCookieComponent_0, RenderType_RichieCookieComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _richie_cookie_component__WEBPACK_IMPORTED_MODULE_4__["RichieCookieComponent"], [_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RichieCookieComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-cookie", _richie_cookie_component__WEBPACK_IMPORTED_MODULE_4__["RichieCookieComponent"], View_RichieCookieComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/richie-cookie/richie-cookie.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/richie-cookie/richie-cookie.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@media only screen and (max-width: 849px) {\n  .cookies[_ngcontent-%COMP%] {\n    left: 0px;\n  }\n}\n@media only screen and (min-width: 850px) {\n  .cookies[_ngcontent-%COMP%] {\n    left: 50px;\n  }\n}\n.cookies[_ngcontent-%COMP%] {\n  background: var(--fourOfour-tile);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  border-top: 5px solid #08f;\n  position: fixed;\n  padding: 20px 50px;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  transition: 1s ease;\n  z-index: 100;\n}\n.cookies[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.cookies[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: left;\n  margin: 0px;\n  margin-top: 10px;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  color: var(--font-color);\n  width: 200px;\n  border-radius: 10px;\n  font-size: 18px;\n  line-height: 1em;\n  padding: 5px 0px;\n  overflow: hidden;\n  border: 1px solid var(--font-color);\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n  color: #08f;\n  border-color: #08f;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:last-child::after {\n  background: #08f;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:last-child:hover {\n  color: #fff;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 0px 10px;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  background-color: var(--font-color);\n  border-radius: 10px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0;\n  height: 0;\n  z-index: -1;\n  transition: 0.2s ease;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:hover {\n  color: var(--background);\n  box-shadow: none;\n}\n.cookies[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  height: 100%;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JpY2hpZS1jb29raWUvQzpcXFVzZXJzXFx0aW1vc1xcRGVza3RvcFxcV2Vic2l0ZXNcXGRoYnctcmljaGllLXJlZGVzaWduLXYyL3NyY1xcYXBwXFxzaGFyZWRcXHJpY2hpZS1jb29raWVcXHJpY2hpZS1jb29raWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtY29va2llL3JpY2hpZS1jb29raWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLFNBQUE7RUNERjtBQUNGO0FER0E7RUFDRTtJQUNFLFVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxpQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGRjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSE47QURNRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE1JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNKTjtBRE1NO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0UsZ0JBQUE7QUNIVjtBREtRO0VBQ0UsV0FBQTtBQ0hWO0FETU07RUFDRSxnQkFBQTtBQ0pSO0FETU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLHFCQUFBO0FDTFI7QURRTTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRE9RO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xWIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JpY2hpZS1jb29raWUvcmljaGllLWNvb2tpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gIC5jb29raWVzIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJvd3Nlcikge1xyXG4gIC5jb29raWVzIHtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29va2llcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZm91ck9mb3VyLXRpbGUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDhmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICoge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwOGY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDhmO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwOGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XG4gIC5jb29raWVzIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLmNvb2tpZXMge1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbn1cbi5jb29raWVzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm91ck9mb3VyLXRpbGUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwOGY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMjBweCA1MHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xuICB6LWluZGV4OiAxMDA7XG59XG4uY29va2llcyAudGl0bGUge1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29va2llcyAuY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb29raWVzIC5idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvb2tpZXMgLmJ1dHRvbnMgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb29raWVzIC5idXR0b25zICo6bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDhmO1xuICBib3JkZXItY29sb3I6ICMwOGY7XG59XG4uY29va2llcyAuYnV0dG9ucyAqOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzA4Zjtcbn1cbi5jb29raWVzIC5idXR0b25zICo6bGFzdC1jaGlsZDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvb2tpZXMgLmJ1dHRvbnMgKjpudGgtY2hpbGQoMikge1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuLmNvb2tpZXMgLmJ1dHRvbnMgKjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbi5jb29raWVzIC5idXR0b25zICo6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29va2llcyAuYnV0dG9ucyAqOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shared/richie-cookie/richie-cookie.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/richie-cookie/richie-cookie.component.ts ***!
  \*****************************************************************/
/*! exports provided: RichieCookieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieCookieComponent", function() { return RichieCookieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");


class RichieCookieComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.cookieStyle = true;
    }
    ngOnInit() {
        if ((JSON.parse(localStorage.getItem('richie-cookie-banner')) || {}).accepted) {
            this.cookieStyle = false;
        }
    }
    hide() {
        this.cookieStyle = false;
    }
    sendNotification() {
        this.notificationService.sendNotification('Einstellungen gespeichert!', src_app_models__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].INFORMATION);
    }
    saveRespone(accepted) {
        localStorage.setItem('richie-cookie-banner', JSON.stringify({
            accepted
        }));
    }
    decline() {
        this.saveRespone(false);
        // Handle Opt-Out
        this.sendNotification();
        this.hide();
    }
    accept() {
        this.saveRespone(true);
        this.sendNotification();
        this.hide();
    }
}


/***/ }),

/***/ "./src/app/shared/richie-header/richie-header.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/richie-header/richie-header.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_RichieHeaderComponent, View_RichieHeaderComponent_0, View_RichieHeaderComponent_Host_0, RichieHeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RichieHeaderComponent", function() { return RenderType_RichieHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieHeaderComponent_0", function() { return View_RichieHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieHeaderComponent_Host_0", function() { return View_RichieHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieHeaderComponentNgFactory", function() { return RichieHeaderComponentNgFactory; });
/* harmony import */ var _richie_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richie-header.component.scss.shim.ngstyle */ "./src/app/shared/richie-header/richie-header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _richie_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./richie-header.component */ "./src/app/shared/richie-header/richie-header.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/shared/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_RichieHeaderComponent = [_richie_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RichieHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RichieHeaderComponent, data: {} });

function View_RichieHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 61, "nav", [], [[2, "opened", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "menu"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleNav() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "ti ti-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Men\u00FC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DHBW Richie"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 48, "div", [["class", "links"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "ti ti-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](10, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "ti ti-add"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](18, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "i", [["class", "ti ti-review"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](26, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Review"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "i", [["class", "ti ti-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](34, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Suche"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "i", [["class", "ti ti-telegram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, [[10, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](42, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Telegram"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 0, "i", [["class", "ti ti-admin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 671744, [[12, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](50, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Administration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 6, "div", [["class", "user"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](57, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max Mustermann"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 0, "img", [["src", "https://lh3.googleusercontent.com/a-/AAuE7mBDONAFGTYCJsPYOXfRPeBdOtFg6JxRlnGo12wlEA"]], null, null, null, null, null))], function (_ck, _v) { var currVal_3 = _ck(_v, 10, 0, "/home"); _ck(_v, 9, 0, currVal_3); var currVal_4 = "active"; _ck(_v, 11, 0, currVal_4); var currVal_7 = _ck(_v, 18, 0, "/add"); _ck(_v, 17, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 19, 0, currVal_8); var currVal_11 = _ck(_v, 26, 0, "/review"); _ck(_v, 25, 0, currVal_11); var currVal_12 = "active"; _ck(_v, 27, 0, currVal_12); var currVal_15 = _ck(_v, 34, 0, "/search"); _ck(_v, 33, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 35, 0, currVal_16); var currVal_19 = _ck(_v, 42, 0, "/telegram"); _ck(_v, 41, 0, currVal_19); var currVal_20 = "active"; _ck(_v, 43, 0, currVal_20); var currVal_23 = _ck(_v, 50, 0, "/admin"); _ck(_v, 49, 0, currVal_23); var currVal_24 = "active"; _ck(_v, 51, 0, currVal_24); var currVal_25 = _ck(_v, 57, 0, "/settings"); _ck(_v, 56, 0, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isNavVisible; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href; _ck(_v, 8, 0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).href; _ck(_v, 16, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).href; _ck(_v, 24, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).target; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).href; _ck(_v, 32, 0, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).target; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).href; _ck(_v, 40, 0, currVal_17, currVal_18); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).target; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).href; _ck(_v, 48, 0, currVal_21, currVal_22); }); }
function View_RichieHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-header", [], null, null, null, View_RichieHeaderComponent_0, RenderType_RichieHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _richie_header_component__WEBPACK_IMPORTED_MODULE_4__["RichieHeaderComponent"], [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]], null, null)], null, null); }
var RichieHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-header", _richie_header_component__WEBPACK_IMPORTED_MODULE_4__["RichieHeaderComponent"], View_RichieHeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/richie-header/richie-header.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/richie-header/richie-header.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@media only screen and (min-width: 850px) {\n  nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    opacity: 1;\n    box-shadow: inset 0px -3px 0px #0088ff;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-decoration: none;\n    padding: 0px 10px;\n    font-weight: 500;\n    cursor: pointer;\n    height: 50px;\n    line-height: 50px;\n    opacity: 0.8;\n    transition: 0.2s ease;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:nth-child(odd) {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 10px;\n  }\n  nav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n}\n@media only screen and (max-width: 849px) {\n  nav.opened[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    margin-right: 5px;\n  }\n  nav.opened[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    transform: translateX(0vw);\n  }\n  nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #0088ff;\n  }\n  nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #0088ff;\n    margin-left: 10px;\n    transform: rotate(180deg);\n    transition: 0.2s ease;\n  }\n  nav[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100vh;\n    transform: translateX(-100vw);\n    transition: transform 0.5s ease-in-out;\n    padding-left: calc(20px + var(--safe-area-inset-left));\n    padding-right: calc(20px + var(--safe-area-inset-right));\n    padding-top: calc( 50px + var(--safe-area-inset-top) + var(--safe-area-inset-bottom) );\n    z-index: 101;\n    background: #000;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 35px 1fr;\n    grid-template-rows: repeat(20, 40px);\n    grid-gap: 0;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    height: 40px;\n    line-height: 40px;\n    font-size: 16px;\n    text-decoration: none;\n    font-weight: 500;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:nth-child(odd) {\n    font-size: 1.2em;\n    text-align: center;\n    top: 9px;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:nth-child(even) {\n    padding-left: 5px;\n  }\n  nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:nth-child(even):not(:last-child) {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  }\n  nav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: calc( 100vw - var(--safe-area-inset-right) - var(--safe-area-inset-left) );\n  position: fixed;\n  top: 0;\n  font-size: 16px;\n  padding: var(--safe-area-inset-top) var(--safe-area-inset-right) 0 var(--safe-area-inset-left);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 100;\n}\nnav[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-flex;\n  color: #fff;\n}\nnav[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  z-index: 102;\n}\nnav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nnav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  line-height: 50px;\n  margin-right: 10px;\n  font-weight: 500;\n  opacity: 0.8;\n  transition: 0.2s ease;\n}\nnav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\nnav[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 100px;\n}\n.menu[_ngcontent-%COMP%] {\n  z-index: 102;\n}\n.menu[active=true][_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.menu[active=true][_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 0px;\n}\n.menu[active=true][_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n.menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 20px;\n  height: 17px;\n  margin: calc((40px - 17px) / 2) calc((40px - 20px) / 2);\n}\n.menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 0.2s ease;\n  position: absolute;\n  height: 2px;\n  border-radius: 20px;\n  width: 20px;\n  background: #fff;\n}\n.menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 2px;\n  left: 0%;\n  transform: translateY(-50%);\n}\n.menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 50%;\n  left: 0%;\n  transform: translateY(-50%);\n}\n.menu[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: calc(100% - 2px);\n  left: 0%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JpY2hpZS1oZWFkZXIvQzpcXFVzZXJzXFx0aW1vc1xcRGVza3RvcFxcV2Vic2l0ZXNcXGRoYnctcmljaGllLXJlZGVzaWduLXYyL3NyY1xcYXBwXFxzaGFyZWRcXHJpY2hpZS1oZWFkZXJcXHJpY2hpZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtaGVhZGVyL3JpY2hpZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtaGVhZGVyL0M6XFxVc2Vyc1xcdGltb3NcXERlc2t0b3BcXFdlYnNpdGVzXFxkaGJ3LXJpY2hpZS1yZWRlc2lnbi12Mi9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUk7SUFDRSxhQUFBO0VDRko7RURJRTtJQUNFLGlCQUFBO0VDRko7RURLSTtJQUNFLFVBQUE7SUFDQSxzQ0FBQTtFQ0hOO0VETUk7SUFDRSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBTUEsWUFBQTtJQUNBLHFCQUFBO0VDVE47RURJTTtJQUNFLGFBQUE7RUNGUjtFRFFNO0lBQ0UsVUFBQTtFQ05SO0VEU007SUFDRSxrQkFBQTtFQ1BSO0VEWUk7SUFDRSxnQkFBQTtFQ1ZOO0FBQ0Y7QURjQTtFQUlRO0lBQ0Usd0JBQUE7SUFDQSxpQkFBQTtFQ2ZSO0VEa0JJO0lBQ0UsMEJBQUE7RUNoQk47RURvQkU7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNFN0RDO0VEMkNMO0VEbUJJO0lBQ0UsY0UvREQ7SUZnRUMsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0VDakJOO0VEb0JFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQ2xCSjtFRG9CRTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQ0FBQTtJQUNBLHNEQUFBO0lBQ0Esd0RBQUE7SUFDQSxzRkFBQTtJQUdBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBRUEsYUFBQTtJQUNBLCtCQUFBO0lBQ0Esb0NBQUE7SUFDQSxXQUFBO0VDckJKO0VEc0JJO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7RUNwQk47RURzQk07SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQ3BCUjtFRHNCTTtJQUNFLGlCQUFBO0VDcEJSO0VEcUJRO0lBQ0UsaURBQUE7RUNuQlY7RUR5Qkk7SUFDRSxhQUFBO0VDdkJOO0FBQ0Y7QUQ0QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGlGQUFBO0VBR0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBRUEsOEZBQUE7RUFHQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDL0JGO0FEaUNFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDL0JKO0FEa0NFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDaENKO0FEbUNFO0VBQ0UsZUFBQTtBQ2pDSjtBRG9DTTtFQUNFLFVBQUE7QUNsQ1I7QURzQ0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNwQ047QURzQ0k7RUFDRSxrQkFBQTtBQ3BDTjtBRHFDTTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ25DUjtBRHlDQTtFQUNFLFlBQUE7QUN0Q0Y7QUQwQ1E7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDhDQUFBO0FDeENWO0FEMENRO0VBQ0UsVUFBQTtBQ3hDVjtBRDBDUTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsK0NBQUE7QUN4Q1Y7QUQ2Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0FDM0NKO0FENkNJO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzVDTjtBRDhDTTtFQUNFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUM1Q1I7QUQ4Q007RUFDRSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDNUNSO0FEOENNO0VBQ0UscUJBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUM1Q1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcmljaGllLWhlYWRlci9yaWNoaWUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgbmF2IHtcclxuICAgIC5tZW51IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpbmtzIHtcclxuICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTNweCAwcHggJGJsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICoge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKE9ERCkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlciB7XHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpIHtcclxuICBuYXYge1xyXG4gICAgJi5vcGVuZWQge1xyXG4gICAgICAubWVudSB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmtzIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG4gICAgLmxpbmtzIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygyMHB4ICsgdmFyKC0tc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygyMHB4ICsgdmFyKC0tc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKFxyXG4gICAgICAgIDUwcHggKyB2YXIoLS1zYWZlLWFyZWEtaW5zZXQtdG9wKSArIHZhcigtLXNhZmUtYXJlYS1pbnNldC1ib3R0b20pXHJcbiAgICAgICk7XHJcbiAgICAgIHotaW5kZXg6IDEwMTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIwLCA0MHB4KTtcclxuICAgICAgZ3JpZC1nYXA6IDA7XHJcbiAgICAgICoge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKE9ERCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZChFVkVOKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlciB7XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5uYXYge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdpZHRoOiBjYWxjKFxyXG4gICAgMTAwdncgLSB2YXIoLS1zYWZlLWFyZWEtaW5zZXQtcmlnaHQpIC0gdmFyKC0tc2FmZS1hcmVhLWluc2V0LWxlZnQpXHJcbiAgKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgcGFkZGluZzogdmFyKC0tc2FmZS1hcmVhLWluc2V0LXRvcCkgdmFyKC0tc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSAwXHJcbiAgICB2YXIoLS1zYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcblxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAqIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHotaW5kZXg6IDEwMjtcclxuICB9XHJcblxyXG4gIC51c2VyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgei1pbmRleDogMTAyO1xyXG4gICZbYWN0aXZlPVwidHJ1ZVwiXSB7XHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaGFtYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBtYXJnaW46IGNhbGMoKDQwcHggLSAxN3B4KSAvIDIpIGNhbGMoKDQwcHggLSAyMHB4KSAvIDIpO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcblxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAycHgpO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XG4gIG5hdiAubWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBuYXYgLnRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBuYXYgLmxpbmtzIC5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggMHB4ICMwMDg4ZmY7XG4gIH1cbiAgbmF2IC5saW5rcyAqIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIH1cbiAgbmF2IC5saW5rcyAqOm50aC1jaGlsZChvZGQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIG5hdiAubGlua3MgKjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBuYXYgLmxpbmtzICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIG5hdiAudXNlciAuaWNvbiB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xuICBuYXYub3BlbmVkIC5tZW51IGkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBuYXYub3BlbmVkIC5saW5rcyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XG4gIH1cbiAgbmF2IC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDg4ZmY7XG4gIH1cbiAgbmF2IC5tZW51IGkge1xuICAgIGNvbG9yOiAjMDA4OGZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICB9XG4gIG5hdiAudGl0bGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG4gIG5hdiAubGlua3Mge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygyMHB4ICsgdmFyKC0tc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDIwcHggKyB2YXIoLS1zYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyggNTBweCArIHZhcigtLXNhZmUtYXJlYS1pbnNldC10b3ApICsgdmFyKC0tc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKTtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyMCwgNDBweCk7XG4gICAgZ3JpZC1nYXA6IDA7XG4gIH1cbiAgbmF2IC5saW5rcyAqIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIG5hdiAubGlua3MgKjpudGgtY2hpbGQob2RkKSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiA5cHg7XG4gIH1cbiAgbmF2IC5saW5rcyAqOm50aC1jaGlsZChldmVuKSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgbmF2IC5saW5rcyAqOm50aC1jaGlsZChldmVuKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG4gIG5hdiAudXNlciAubmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxubmF2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogY2FsYyggMTAwdncgLSB2YXIoLS1zYWZlLWFyZWEtaW5zZXQtcmlnaHQpIC0gdmFyKC0tc2FmZS1hcmVhLWluc2V0LWxlZnQpICk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IHZhcigtLXNhZmUtYXJlYS1pbnNldC10b3ApIHZhcigtLXNhZmUtYXJlYS1pbnNldC1yaWdodCkgMCB2YXIoLS1zYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxMDA7XG59XG5uYXYgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBjb2xvcjogI2ZmZjtcbn1cbm5hdiAudGl0bGUge1xuICBmb250LXdlaWdodDogODAwO1xuICB6LWluZGV4OiAxMDI7XG59XG5uYXYgLnVzZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgLnVzZXI6aG92ZXIgLm5hbWUge1xuICBvcGFjaXR5OiAxO1xufVxubmF2IC51c2VyIC5uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5uYXYgLnVzZXIgLmljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5uYXYgLnVzZXIgLmljb24gaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLm1lbnUge1xuICB6LWluZGV4OiAxMDI7XG59XG4ubWVudVthY3RpdmU9dHJ1ZV0gLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4ubWVudVthY3RpdmU9dHJ1ZV0gLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAwcHg7XG59XG4ubWVudVthY3RpdmU9dHJ1ZV0gLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xufVxuLm1lbnUgLmhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbjogY2FsYygoNDBweCAtIDE3cHgpIC8gMikgY2FsYygoNDBweCAtIDIwcHgpIC8gMik7XG59XG4ubWVudSAuaGFtYnVyZ2VyIHNwYW4ge1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1lbnUgLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1lbnUgLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1lbnUgLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogY2FsYygxMDAlIC0gMnB4KTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iLCIkbW9iaWxlOiA4NDlweDtcclxuJGJyb3dzZXI6IDg1MHB4O1xyXG4kcmVkOiByZ2IoMjU1LCA1NSwgOTUpO1xyXG4kZ3JlZW46IHJnYig0OCwgMjA5LCA4OCk7XHJcbiRibHVlOiByZ2IoMCwgMTM2LCAyNTUpO1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/shared/richie-header/richie-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/richie-header/richie-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: RichieHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieHeaderComponent", function() { return RichieHeaderComponent; });
class RichieHeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isNavVisible = false;
        router.events.subscribe(() => {
            this.isNavVisible = false;
        });
    }
    toggleNav() {
        this.isNavVisible = !this.isNavVisible;
    }
}


/***/ }),

/***/ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/richie-iconbutton/richie-iconbutton.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_RichieIconbuttonComponent, View_RichieIconbuttonComponent_0, View_RichieIconbuttonComponent_Host_0, RichieIconbuttonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RichieIconbuttonComponent", function() { return RenderType_RichieIconbuttonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieIconbuttonComponent_0", function() { return View_RichieIconbuttonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieIconbuttonComponent_Host_0", function() { return View_RichieIconbuttonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieIconbuttonComponentNgFactory", function() { return RichieIconbuttonComponentNgFactory; });
/* harmony import */ var _richie_iconbutton_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richie-iconbutton.component.scss.shim.ngstyle */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./richie-iconbutton.component */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ts");
/* harmony import */ var _sharedFunctions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_RichieIconbuttonComponent = [_richie_iconbutton_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RichieIconbuttonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RichieIconbuttonComponent, data: {} });

function View_RichieIconbuttonComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["class", "iconButton"]], [[8, "tabIndex", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sharedFunctions.openURL(_co.url) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", "\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.icon; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabindex; _ck(_v, 0, 0, currVal_0); var currVal_2 = _co.text; _ck(_v, 4, 0, currVal_2); }); }
function View_RichieIconbuttonComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "iconButton"]], [[8, "tabIndex", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.actionCalled($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", "\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.icon; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabindex; _ck(_v, 0, 0, currVal_0); var currVal_2 = _co.text; _ck(_v, 4, 0, currVal_2); }); }
function View_RichieIconbuttonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieIconbuttonComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieIconbuttonComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.url; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.url; _ck(_v, 3, 0, currVal_1); }, null); }
function View_RichieIconbuttonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-iconbutton", [], null, null, null, View_RichieIconbuttonComponent_0, RenderType_RichieIconbuttonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_3__["RichieIconbuttonComponent"], [_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_4__["SharedFunctions"]], null, null)], null, null); }
var RichieIconbuttonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-iconbutton", _richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_3__["RichieIconbuttonComponent"], View_RichieIconbuttonComponent_Host_0, { url: "url", icon: "icon", text: "text", tabindex: "tabindex" }, { action: "action" }, []);



/***/ }),

/***/ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/richie-iconbutton/richie-iconbutton.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".iconButton[_ngcontent-%COMP%] {\n  color: #08f;\n  border: 1px solid #08f;\n  z-index: 1;\n  display: inline-block;\n  background: transparent;\n  position: relative;\n  font-size: inherit, 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 20px;\n  padding-left: 10px;\n  border-radius: 40px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  overflow: hidden;\n  transition: color 0.4s ease-in-out;\n}\n.iconButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 24px;\n  top: 1px;\n  font-weight: 400;\n}\n.iconButton[_ngcontent-%COMP%]::before {\n  content: \"\";\n  z-index: -1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0px;\n  height: 0px;\n  border-radius: 100px;\n  transform-origin: center;\n  background-color: #08f;\n  transform: translate3d(-50%, -50%, 0);\n  transition: 0.35s ease-in-out;\n}\n.iconButton[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(120%);\n          filter: brightness(120%);\n}\n.iconButton[_ngcontent-%COMP%]:hover, .iconButton[_ngcontent-%COMP%]:focus {\n  color: #fff !important;\n  box-shadow: none;\n  outline: none;\n}\n.iconButton[_ngcontent-%COMP%]:hover::before, .iconButton[_ngcontent-%COMP%]:focus::before {\n  width: calc(100% + 10px);\n  height: calc(100% + 10px);\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JpY2hpZS1pY29uYnV0dG9uL0M6XFxVc2Vyc1xcdGltb3NcXERlc2t0b3BcXFdlYnNpdGVzXFxkaGJ3LXJpY2hpZS1yZWRlc2lnbi12Mi9zcmNcXGFwcFxcc2hhcmVkXFxyaWNoaWUtaWNvbmJ1dHRvblxccmljaGllLWljb25idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtaWNvbmJ1dHRvbi9yaWNoaWUtaWNvbmJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGtDQUFBO0FDREY7QURHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDREo7QURJRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBRUEscUNBQUE7RUFDQSw2QkFBQTtBQ0hKO0FETUU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDSko7QURPRTtFQUVFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTko7QURPSTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JpY2hpZS1pY29uYnV0dG9uL3JpY2hpZS1pY29uYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdXR0b24ge1xyXG4gIGNvbG9yOiAjMDhmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOGY7XHJcblxyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IGluaGVyaXQsIDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaWNvbkJ1dHRvbiB7XG4gIGNvbG9yOiAjMDhmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDhmO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdCwgMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLmljb25CdXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgdG9wOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaWNvbkJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gIHRyYW5zaXRpb246IDAuMzVzIGVhc2UtaW4tb3V0O1xufVxuLmljb25CdXR0b246YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xufVxuLmljb25CdXR0b246aG92ZXIsIC5pY29uQnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pY29uQnV0dG9uOmhvdmVyOjpiZWZvcmUsIC5pY29uQnV0dG9uOmZvY3VzOjpiZWZvcmUge1xuICB3aWR0aDogY2FsYygxMDAlICsgMTBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */"];



/***/ }),

/***/ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/richie-iconbutton/richie-iconbutton.component.ts ***!
  \*************************************************************************/
/*! exports provided: RichieIconbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieIconbuttonComponent", function() { return RichieIconbuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class RichieIconbuttonComponent {
    constructor(sharedFunctions) {
        this.sharedFunctions = sharedFunctions;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    actionCalled(event) {
        this.action.emit(event);
    }
}


/***/ }),

/***/ "./src/app/shared/richie-select/richie-select.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/richie-select/richie-select.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_RichieSelectComponent, View_RichieSelectComponent_0, View_RichieSelectComponent_Host_0, RichieSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RichieSelectComponent", function() { return RenderType_RichieSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieSelectComponent_0", function() { return View_RichieSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieSelectComponent_Host_0", function() { return View_RichieSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieSelectComponentNgFactory", function() { return RichieSelectComponentNgFactory; });
/* harmony import */ var _richie_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richie-select.component.scss.shim.ngstyle */ "./src/app/shared/richie-select/richie-select.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _clickOutside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clickOutside.directive */ "./src/app/shared/clickOutside.directive.ts");
/* harmony import */ var _richie_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./richie-select.component */ "./src/app/shared/richie-select/richie-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_RichieSelectComponent = [_richie_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RichieSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RichieSelectComponent, data: {} });

function View_RichieSelectComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentItem; _ck(_v, 1, 0, currVal_0); }); }
function View_RichieSelectComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "ti ti-list listIcon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.placeholder; _ck(_v, 2, 0, currVal_0); }); }
function View_RichieSelectComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "selectedItem"]], [[8, "tabIndex", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.toggleSelection();
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieSelectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieSelectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.currentItem; _ck(_v, 3, 0, currVal_1); var currVal_2 = !_co.currentItem; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabindex; _ck(_v, 1, 0, currVal_0); }); }
function View_RichieSelectComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectionHasChanged(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_RichieSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [["ref", 1]], null, 1, "div", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.toggleSelection();
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieSelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "div", [["class", "selectionWrapper"]], null, [[null, "clickOutside"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseEnter($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("clickOutside" === en)) {
        var pd_1 = (_co.hideSelection() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _clickOutside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, { clickOutside: "clickOutside" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "selection"]], [[1, "sTitle", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieSelectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).childNodes.length == 0); _ck(_v, 4, 0, currVal_0); var currVal_1 = "selectionWrapper"; var currVal_2 = _co.selectionClass; _ck(_v, 7, 0, currVal_1, currVal_2); var currVal_3 = _co.selectionStyle; _ck(_v, 9, 0, currVal_3); var currVal_5 = _co.items; _ck(_v, 13, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.heading; _ck(_v, 11, 0, currVal_4); }); }
function View_RichieSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "richie-select", [], null, null, null, View_RichieSelectComponent_0, RenderType_RichieSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _richie_select_component__WEBPACK_IMPORTED_MODULE_4__["RichieSelectComponent"], [], null, null)], null, null); }
var RichieSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-select", _richie_select_component__WEBPACK_IMPORTED_MODULE_4__["RichieSelectComponent"], View_RichieSelectComponent_Host_0, { heading: "heading", items: "items", currentItem: "currentItem", tabindex: "tabindex", placeholder: "placeholder" }, { change: "change" }, ["*"]);



/***/ }),

/***/ "./src/app/shared/richie-select/richie-select.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/richie-select/richie-select.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n.selectedItem[_ngcontent-%COMP%] {\n  border: 1px solid var(--input-border);\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 5px 10px;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n  transition: 0.2s ease;\n}\n.selectedItem[_ngcontent-%COMP%]:hover, .selectedItem[_ngcontent-%COMP%]:focus {\n  border-color: #08f;\n  outline: none;\n}\n.selectionWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: inherit, -250px;\n  font-size: 1.3em;\n  background: var(--popupBackground);\n  box-shadow: 2px 4px 10px var(--popupShadow);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  border-radius: 10px;\n  overflow-x: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow-x: hidden;\n  transform: scale(0);\n  max-width: 0px;\n  transition: 0.2s ease;\n  z-index: 10;\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 200px;\n  min-width: 200px;\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]::before {\n  content: attr(sTitle) \"\u00A0\u00A0\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\";\n  font-weight: 600;\n  display: block;\n  opacity: 0.9;\n  line-height: 35px;\n  font-size: 0.9em;\n  padding: 0px 10px;\n  word-wrap: none;\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  padding: 5px 10px;\n  margin: 1px 0px;\n  display: list-item;\n  list-style: none;\n  background: transparent;\n  opacity: 0.7;\n  text-align: left;\n  cursor: pointer;\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:before {\n  content: \"\uF054\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  display: none;\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  font-size: 0.8em;\n  padding-right: 10px;\n  opacity: 0.4;\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover, .selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  opacity: 1;\n  background: linear-gradient(to right, #08f, #4ea7f5);\n}\n.selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .selectionWrapper[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:focus   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.showSelect[_ngcontent-%COMP%] {\n  -webkit-animation: showSelect 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: showSelect 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n.hideSelect[_ngcontent-%COMP%] {\n  -webkit-animation: hideSelect 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: hideSelect 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@-webkit-keyframes showSelect {\n  from {\n    transform: scale(0);\n    opacity: 1;\n    max-width: 0px;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n    max-width: unset;\n  }\n}\n@keyframes showSelect {\n  from {\n    transform: scale(0);\n    opacity: 1;\n    max-width: 0px;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n    max-width: unset;\n  }\n}\n@-webkit-keyframes hideSelect {\n  0% {\n    opacity: 1;\n    max-width: 100%;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n    max-width: 0px;\n  }\n}\n@keyframes hideSelect {\n  0% {\n    opacity: 1;\n    max-width: 100%;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n    max-width: 0px;\n  }\n}\n.listIcon[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  margin-right: 20px;\n  position: relative;\n  top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JpY2hpZS1zZWxlY3QvcmljaGllLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3JpY2hpZS1zZWxlY3QvQzpcXFVzZXJzXFx0aW1vc1xcRGVza3RvcFxcV2Vic2l0ZXNcXGRoYnctcmljaGllLXJlZGVzaWduLXYyL3NyY1xcYXBwXFxzaGFyZWRcXHJpY2hpZS1zZWxlY3RcXHJpY2hpZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QURFRjtBQ0FFO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0FEQ0o7QUNFQTtFQUNFLGtCQUFBO0VBRUEsMkJBQUE7RUFDQSxnQkFBQTtFQUVBLGtDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtBREhGO0FDS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREhKO0FDS0k7RUFDRSx3Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FESk47QUNPSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRExOO0FDT007RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURMUjtBQ1FNO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRE5SO0FDU007RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0FEUlI7QUNTUTtFQUNFLFdBQUE7QURQVjtBQ2NBO0VBQ0UsMkVBQUE7VUFBQSxtRUFBQTtBRFhGO0FDY0E7RUFDRSwyRUFBQTtVQUFBLG1FQUFBO0FEWEY7QUNhQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFRFZGO0VDWUE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFRFZGO0FBQ0Y7QUNBQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFRFZGO0VDWUE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFRFZGO0FBQ0Y7QUNhQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGVBQUE7SUFFQSxtQkFBQTtFRFpGO0VDY0E7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VEWkY7QUFDRjtBQ0NBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUVBLG1CQUFBO0VEWkY7RUNjQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RURaRjtBQUNGO0FDZUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QURiRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtc2VsZWN0L3JpY2hpZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VsZWN0ZWRJdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuLnNlbGVjdGVkSXRlbTpob3ZlciwgLnNlbGVjdGVkSXRlbTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzA4ZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlbGVjdGlvbldyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IGluaGVyaXQsIC0yNTBweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcG9wdXBCYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogMnB4IDRweCAxMHB4IHZhcigtLXBvcHVwU2hhZG93KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgbWF4LXdpZHRoOiAwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgei1pbmRleDogMTA7XG59XG4uc2VsZWN0aW9uV3JhcHBlciAuc2VsZWN0aW9uIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbi5zZWxlY3Rpb25XcmFwcGVyIC5zZWxlY3Rpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoc1RpdGxlKSBcIsKgwqDijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq/ijq9cIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB3b3JkLXdyYXA6IG5vbmU7XG59XG4uc2VsZWN0aW9uV3JhcHBlciAuc2VsZWN0aW9uIC5pdGVtIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogMXB4IDBweDtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMC43O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0aW9uV3JhcHBlciAuc2VsZWN0aW9uIC5pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3Rpb25XcmFwcGVyIC5zZWxlY3Rpb24gLml0ZW0gaSB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgb3BhY2l0eTogMC40O1xufVxuLnNlbGVjdGlvbldyYXBwZXIgLnNlbGVjdGlvbiAuaXRlbTpob3ZlciwgLnNlbGVjdGlvbldyYXBwZXIgLnNlbGVjdGlvbiAuaXRlbTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwOGYsICM0ZWE3ZjUpO1xufVxuLnNlbGVjdGlvbldyYXBwZXIgLnNlbGVjdGlvbiAuaXRlbTpob3ZlciBpLCAuc2VsZWN0aW9uV3JhcHBlciAuc2VsZWN0aW9uIC5pdGVtOmZvY3VzIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNob3dTZWxlY3Qge1xuICBhbmltYXRpb246IHNob3dTZWxlY3QgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xufVxuXG4uaGlkZVNlbGVjdCB7XG4gIGFuaW1hdGlvbjogaGlkZVNlbGVjdCAwLjZzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgc2hvd1NlbGVjdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXgtd2lkdGg6IDBweDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGlkZVNlbGVjdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBtYXgtd2lkdGg6IDBweDtcbiAgfVxufVxuLmxpc3RJY29uIHtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59IiwiLnNlbGVjdGVkSXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwOGY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG4uc2VsZWN0aW9uV3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBtYXJnaW4tdG9wOiBpbmhlcml0LCAtMjUwcHg7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuXHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcG9wdXBCYWNrZ3JvdW5kKTtcclxuICBib3gtc2hhZG93OiAycHggNHB4IDEwcHggdmFyKC0tcG9wdXBTaGFkb3cpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG1heC13aWR0aDogMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxuXHJcbiAgei1pbmRleDogMTA7XHJcblxyXG4gIC5zZWxlY3Rpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBhdHRyKHNUaXRsZSlcclxuICAgICAgICAnXFwwMGEwXFwwMGEwXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGXFwyM0FGJztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgbWFyZ2luOiAxcHggMHB4O1xyXG4gICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxmMDU0JztcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDhmLCByZ2IoNzgsIDE2NywgMjQ1KSk7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaG93U2VsZWN0IHtcclxuICBhbmltYXRpb246IHNob3dTZWxlY3QgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xyXG59XHJcblxyXG4uaGlkZVNlbGVjdCB7XHJcbiAgYW5pbWF0aW9uOiBoaWRlU2VsZWN0IDAuNnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcclxufVxyXG5Aa2V5ZnJhbWVzIHNob3dTZWxlY3Qge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXgtd2lkdGg6IDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoaWRlU2VsZWN0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBtYXgtd2lkdGg6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0SWNvbiB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuIl19 */"];



/***/ }),

/***/ "./src/app/shared/richie-select/richie-select.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/richie-select/richie-select.component.ts ***!
  \*****************************************************************/
/*! exports provided: RichieSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieSelectComponent", function() { return RichieSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class RichieSelectComponent {
    constructor() {
        this.heading = 'Wähle...';
        this.items = [];
        this.placeholder = 'Bitte wähle...';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectionClass = 'hideSelect';
        this.selectionStyle = { display: 'none' };
    }
    onClick(event) {
        event.stopPropagation();
    }
    toggleSelection() {
        this.selectionStyle = { display: 'block' };
        this.selectionClass === 'showSelect'
            ? this.hideSelection()
            : (this.selectionClass = 'showSelect');
    }
    hideSelection() {
        this.selectionClass = 'hideSelect';
    }
    selectionHasChanged(toItem) {
        this.hideSelection();
        this.currentItem = this.items[toItem];
        this.change.emit(this.currentItem);
    }
}


/***/ }),

/***/ "./src/app/shared/richie-textarea/richie-textarea.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/richie-textarea/richie-textarea.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_RichieTextareaComponent, View_RichieTextareaComponent_0, View_RichieTextareaComponent_Host_0, RichieTextareaComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RichieTextareaComponent", function() { return RenderType_RichieTextareaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieTextareaComponent_0", function() { return View_RichieTextareaComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RichieTextareaComponent_Host_0", function() { return View_RichieTextareaComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieTextareaComponentNgFactory", function() { return RichieTextareaComponentNgFactory; });
/* harmony import */ var _richie_textarea_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richie-textarea.component.scss.shim.ngstyle */ "./src/app/shared/richie-textarea/richie-textarea.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../richie-iconbutton/richie-iconbutton.component.ngfactory */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ngfactory.js");
/* harmony import */ var _richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../richie-iconbutton/richie-iconbutton.component */ "./src/app/shared/richie-iconbutton/richie-iconbutton.component.ts");
/* harmony import */ var _sharedFunctions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedFunctions.service */ "./src/app/shared/sharedFunctions.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _richie_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./richie-textarea.component */ "./src/app/shared/richie-textarea/richie-textarea.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_RichieTextareaComponent = [_richie_textarea_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RichieTextareaComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RichieTextareaComponent, data: {} });

function View_RichieTextareaComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "richie-iconbutton", [["icon", "ti ti-remove"], ["red", ""], ["text", "Abbrechen"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancelClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RichieIconbuttonComponent_0"], _richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RichieIconbuttonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_3__["RichieIconbuttonComponent"], [_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_4__["SharedFunctions"]], { icon: [0, "icon"], text: [1, "text"], tabindex: [2, "tabindex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "richie-iconbutton", [["green", ""], ["icon", "ti ti-feedback"], ["text", "Kommentieren"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submitClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RichieIconbuttonComponent_0"], _richie_iconbutton_richie_iconbutton_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RichieIconbuttonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _richie_iconbutton_richie_iconbutton_component__WEBPACK_IMPORTED_MODULE_3__["RichieIconbuttonComponent"], [_sharedFunctions_service__WEBPACK_IMPORTED_MODULE_4__["SharedFunctions"]], { icon: [0, "icon"], text: [1, "text"], tabindex: [2, "tabindex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "ti ti-remove"; var currVal_1 = "Abbrechen"; var currVal_2 = (_co.tabindex + 1); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = "ti ti-feedback"; var currVal_4 = "Kommentieren"; var currVal_5 = (_co.tabindex + 2); _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5); }, null); }
function View_RichieTextareaComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "writeComment"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "textarea", [["required", ""], ["rows", "1"]], [[8, "placeholder", 0], [8, "tabIndex", 0], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup" === en)) {
        var pd_4 = (_co.autoGrowTextZone($event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.value = $event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RichieTextareaComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = ""; _ck(_v, 3, 0, currVal_10); var currVal_11 = _co.value; _ck(_v, 6, 0, currVal_11); var currVal_12 = _co.hasActions; _ck(_v, 11, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.placeholder; var currVal_1 = _co.tabindex; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).required ? "" : null); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_RichieTextareaComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "richie-textarea", [], null, null, null, View_RichieTextareaComponent_0, RenderType_RichieTextareaComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_richie_textarea_component__WEBPACK_IMPORTED_MODULE_7__["RichieTextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _richie_textarea_component__WEBPACK_IMPORTED_MODULE_7__["RichieTextareaComponent"], [], null, null)], null, null); }
var RichieTextareaComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("richie-textarea", _richie_textarea_component__WEBPACK_IMPORTED_MODULE_7__["RichieTextareaComponent"], View_RichieTextareaComponent_Host_0, { placeholder: "placeholder", hasActions: "hasActions", tabindex: "tabindex" }, { cancel: "cancel", submit: "submit" }, []);



/***/ }),

/***/ "./src/app/shared/richie-textarea/richie-textarea.component.scss.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/richie-textarea/richie-textarea.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".writeComment[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  outline: none;\n  border: none;\n  resize: none;\n  font-family: \"SF Pro Display\", sans-serif;\n  font-weight: 500;\n  color: var(--font-color);\n  font-size: 16px;\n  min-height: 23px;\n  overflow: hidden;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-family: \"SF Pro Display\", sans-serif;\n  font-weight: 500;\n  color: var(--font-color);\n  opacity: 0.7;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"SF Pro Display\", sans-serif;\n  font-weight: 500;\n  color: var(--font-color);\n  opacity: 0.7;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-family: \"SF Pro Display\", sans-serif;\n  font-weight: 500;\n  color: var(--font-color);\n  opacity: 0.7;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: \"SF Pro Display\", sans-serif;\n  font-weight: 500;\n  color: var(--font-color);\n  opacity: 0.7;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%]::before {\n  width: 100%;\n}\n.writeComment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid    ~ .actions[_ngcontent-%COMP%] {\n  max-height: 100px;\n}\n.writeComment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  margin-top: -5px;\n  background: var(--input-border);\n}\n.writeComment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  transition: 0.4s ease;\n  position: absolute;\n  width: 0%;\n  height: 1px;\n  background: #08f;\n}\n.writeComment[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  max-height: 0px;\n  overflow: hidden;\n  text-align: right;\n  margin-top: 5px;\n  transition: 0.5s ease;\n}\n.writeComment[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   richie-iconbutton[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.writeComment[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   richie-iconbutton[red][_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JpY2hpZS10ZXh0YXJlYS9DOlxcVXNlcnNcXHRpbW9zXFxEZXNrdG9wXFxXZWJzaXRlc1xcZGhidy1yaWNoaWUtcmVkZXNpZ24tdjIvc3JjXFxhcHBcXHNoYXJlZFxccmljaGllLXRleHRhcmVhXFxyaWNoaWUtdGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtdGV4dGFyZWEvcmljaGllLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNDTjtBRExJO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ0NOO0FETEk7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDQ047QURMSTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNDTjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVJO0VBQ0UsMEJBQUE7QUNBTjtBRENNO0VBQ0Usa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yaWNoaWUtdGV4dGFyZWEvcmljaGllLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyaXRlQ29tbWVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIzcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gIH1cclxuICB0ZXh0YXJlYTpmb2N1cyB+IHNwYW46OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgdGV4dGFyZWE6dmFsaWQgfiAuYWN0aW9ucyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwOGY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hY3Rpb25zIHtcclxuICAgIG1heC1oZWlnaHQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuXHJcbiAgICByaWNoaWUtaWNvbmJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAmW3JlZF0ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JpdGVDb21tZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53cml0ZUNvbW1lbnQgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLWhlaWdodDogMjNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cml0ZUNvbW1lbnQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBvcGFjaXR5OiAwLjc7XG59XG4ud3JpdGVDb21tZW50IHRleHRhcmVhOmZvY3VzIH4gc3Bhbjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud3JpdGVDb21tZW50IHRleHRhcmVhOnZhbGlkIH4gLmFjdGlvbnMge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cbi53cml0ZUNvbW1lbnQgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1ib3JkZXIpO1xufVxuLndyaXRlQ29tbWVudCBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzA4Zjtcbn1cbi53cml0ZUNvbW1lbnQgLmFjdGlvbnMge1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cbi53cml0ZUNvbW1lbnQgLmFjdGlvbnMgcmljaGllLWljb25idXR0b24ge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi53cml0ZUNvbW1lbnQgLmFjdGlvbnMgcmljaGllLWljb25idXR0b25bcmVkXSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shared/richie-textarea/richie-textarea.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/richie-textarea/richie-textarea.component.ts ***!
  \*********************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, RichieTextareaComponent, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichieTextareaComponent", function() { return RichieTextareaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RichieTextareaComponent),
    multi: true
};
class RichieTextareaComponent {
    constructor() {
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.innerValue = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    submitClick(event) {
        this.submit.emit(event);
    }
    cancelClick(event) {
        this.cancel.emit(event);
    }
    autoGrowTextZone(e) {
        e.target.style.height = '20px';
        e.target.style.height = e.target.scrollHeight - 4 + 'px';
    }
    get value() {
        return this.innerValue;
    }
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    onBlur() {
        this.onTouchedCallback();
    }
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ "./src/app/shared/theme.service.ts");


class SharedModule {
    static forRoot(options) {
        return {
            ngModule: SharedModule,
            providers: [
                {
                    provide: _theme_service__WEBPACK_IMPORTED_MODULE_1__["THEMES"],
                    useValue: options.themes
                },
                {
                    provide: _theme_service__WEBPACK_IMPORTED_MODULE_1__["ACTIVE_THEME"],
                    useValue: options.active
                }
            ]
        };
    }
}


/***/ }),

/***/ "./src/app/shared/sharedFunctions.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/sharedFunctions.service.ts ***!
  \***************************************************/
/*! exports provided: SharedFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedFunctions", function() { return SharedFunctions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class SharedFunctions {
    openURL(url) {
        window.open(url, '_blank');
    }
    getUserRank(user) {
        return user.isAdmin ? 'Admin' : user.isReviewer ? 'Reviewer' : 'Pro';
    }
}
SharedFunctions.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function SharedFunctions_Factory() { return new SharedFunctions(); }, token: SharedFunctions, providedIn: "root" });


/***/ }),

/***/ "./src/app/shared/theme.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/theme.service.ts ***!
  \*****************************************/
/*! exports provided: THEMES, ACTIVE_THEME, ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMES", function() { return THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_THEME", function() { return ACTIVE_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const THEMES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('THEMES');
const ACTIVE_THEME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ACTIVE_THEME');
class ThemeService {
    constructor(themes, theme) {
        this.themes = themes;
        this.theme = theme;
        this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getActiveTheme() {
        const theme = this.themes.find(t => t.name === this.theme);
        if (!theme) {
            throw new Error(`Theme not found: '${this.theme}'`);
        }
        return theme;
    }
    setTheme(name) {
        this.theme = name;
        this.themeChange.emit(this.getActiveTheme());
    }
    toggleTheme() {
        this.theme == 'light' ? this.setTheme('dark') : this.setTheme('light');
    }
}
ThemeService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ThemeService_Factory() { return new ThemeService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](THEMES), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ACTIVE_THEME)); }, token: ThemeService, providedIn: "root" });


/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class UserService {
    constructor(http) {
        this.http = http;
        this.richieUser = {};
    }
    logIn(service) {
        if (localStorage.getItem('richie-user')) {
            this.richieUser = JSON.parse(localStorage.getItem('richie-user'));
        }
        else {
            document.cookie = 'service=' + service;
            window.location.href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backend}/api/auth/${service}`;
        }
    }
    checkToken() {
        if (localStorage.getItem('richie-user')) {
            this.richieUser = JSON.parse(localStorage.getItem('richie-user'));
            return;
        }
        const token = this.getToken();
        if (!token) {
            return;
        }
        this.richieUser = Object.assign({}, JSON.parse(atob(token.split('.')[1])), { signedIn: true, signedInWith: this.getService(), token });
        localStorage.setItem('richie-user', JSON.stringify(this.richieUser));
    }
    logOut() {
        localStorage.removeItem('richie-user');
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        this.richieUser = { signedIn: false };
    }
    getToken() {
        return decodeURIComponent(document.cookie)
            .split(';')
            .filter(c => c.match(/\s?token=/))
            .map(c => c.split('=')[1])[0];
    }
    getService() {
        return decodeURIComponent(document.cookie)
            .split(';')
            .filter(c => c.match(/\s?service=/))
            .map(c => c.split('=')[1])[0];
    }
}
UserService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function UserService_Factory() { return new UserService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); }, token: UserService, providedIn: "root" });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //backend: 'https://dhbw-richie.de'
    backend: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]()
    .bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\timos\Desktop\Websites\dhbw-richie-redesign-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
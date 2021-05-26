/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/frontend.js":
/*!********************************!*\
  !*** ./src/blocks/frontend.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function displayAllCharts() {
  allchartsdata.forEach(chart => {
    let chartctx = document.querySelector(`#${chart.chartID}`);
    let labels = chart.labels ? chart.labels : ['English', 'Spanish', 'French'];
    let data = chart.chartdata ? chart.chartdata : [300, 50, 100];
    let bgColors = chart.chartBgColor ? chart.chartBgColor : ['#ff6385', '#36a3eb', '#ffcc56', '#812ffe', '#00e893'];
    let title = chart.title ? chart.title : 'Mostly spoken languages across the world';
    let currentChartType = chart.chartType;
    let indexAxis = null;
    let chartTypeArray = chart.chartType.split('');

    if (chartTypeArray.length > 9) {
      let currentChartTypeArray = chartTypeArray.slice(11);
      currentChartType = currentChartTypeArray.join('');
      indexAxis = 'y';
    }

    if (chartctx) {
      var myChart = new Chart(chartctx, {
        type: currentChartType,
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: bgColors,
            hoverOffset: 2
          }]
        },
        options: {
          indexAxis: indexAxis,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title
            },
            legend: {
              display: currentChartType === 'bar' || currentChartType === 'line' ? false : true
            }
          }
        }
      });
    }
  });
}

if (allchartsdata.length > 0) {
  displayAllCharts();
}

/***/ })

/******/ });
//# sourceMappingURL=frontendscript.js.map
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// const getAllEmployees =() => {
//     return fetch("http://localhost:8088/employees")
//     .then(employees => employees.json())
// }
const apiManager = {
  getAllEmployees: () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
  } // postNewEmployee: (employeeObject) => {
  // }

};
var _default = apiManager;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apiManager = _interopRequireDefault(require("./apiManager.js"));

var _singleEmployee = _interopRequireDefault(require("./singleEmployee.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printAllEmployees = () => {
  _apiManager.default.getAllEmployees().then(parsedEmployees => {
    parsedEmployees.forEach(singleEmployeeObject => {
      document.querySelector("#employee-list").innerHTML += (0, _singleEmployee.default)(singleEmployeeObject);
    });
  });
};

var _default = printAllEmployees;
exports.default = _default;

},{"./apiManager.js":1,"./singleEmployee.js":4}],3:[function(require,module,exports){
"use strict";

var _employeePrinter = _interopRequireDefault(require("./employeePrinter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import and call the function that prints all of the employees
(0, _employeePrinter.default)(); // This module should import and call the EmployeeList function
// Employee list should call the EmployeeData function and the single employee component

},{"./employeePrinter.js":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const employeeComponent = singleEmployeeObject => {
  return `<div>
    <h3>${singleEmployeeObject.firstName} ${singleEmployeeObject.lastName}</h3>
    <p>${singleEmployeeObject.department}</p>
    </div>`;
};

var _default = employeeComponent;
exports.default = _default;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL2VtcGxveWVlUHJpbnRlci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvc2luZ2xlRW1wbG95ZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxlQUFlLEVBQUUsTUFBTTtBQUNuQixXQUFPLEtBQUssQ0FBQyxpQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBVixFQURaLENBQVA7QUFFSCxHQUpjLENBS2Y7QUFFQTs7QUFQZSxDQUFuQjtlQVNlLFU7Ozs7Ozs7Ozs7O0FDZmY7O0FBQ0E7Ozs7QUFFQSxNQUFNLGlCQUFpQixHQUFHLE1BQU07QUFDNUIsc0JBQVcsZUFBWCxHQUNDLElBREQsQ0FDTyxlQUFELElBQXFCO0FBQ3ZCLElBQUEsZUFBZSxDQUFDLE9BQWhCLENBQXdCLG9CQUFvQixJQUFJO0FBQzVDLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLFNBQXpDLElBQXNELDZCQUFrQixvQkFBbEIsQ0FBdEQ7QUFFSCxLQUhEO0FBSUgsR0FORDtBQU9ILENBUkQ7O2VBVWUsaUI7Ozs7OztBQ1pmOzs7O0FBRkE7QUFJQSxnQyxDQWtCQTtBQUVBOzs7Ozs7Ozs7O0FDeEJBLE1BQU0saUJBQWlCLEdBQUksb0JBQUQsSUFBMEI7QUFDaEQsU0FBUTtVQUNGLG9CQUFvQixDQUFDLFNBQVUsSUFBRyxvQkFBb0IsQ0FBQyxRQUFTO1NBQ2pFLG9CQUFvQixDQUFDLFVBQVc7V0FGckM7QUFJSCxDQUxEOztlQU9lLGlCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG4vLyBjb25zdCBnZXRBbGxFbXBsb3llZXMgPSgpID0+IHtcclxuLy8gICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXNcIilcclxuLy8gICAgIC50aGVuKGVtcGxveWVlcyA9PiBlbXBsb3llZXMuanNvbigpKVxyXG4vLyB9XHJcblxyXG5jb25zdCBhcGlNYW5hZ2VyID0ge1xyXG4gICAgZ2V0QWxsRW1wbG95ZWVzOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlc1wiKVxyXG4gICAgICAgIC50aGVuKGVtcGxveWVlcyA9PiBlbXBsb3llZXMuanNvbigpKVxyXG4gICAgfSxcclxuICAgIC8vIHBvc3ROZXdFbXBsb3llZTogKGVtcGxveWVlT2JqZWN0KSA9PiB7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFwaU1hbmFnZXI7IiwiXHJcbmltcG9ydCBhcGlNYW5hZ2VyIGZyb20gXCIuL2FwaU1hbmFnZXIuanNcIlxyXG5pbXBvcnQgZW1wbG95ZWVDb21wb25lbnQgZnJvbSBcIi4vc2luZ2xlRW1wbG95ZWUuanNcIlxyXG5cclxuY29uc3QgcHJpbnRBbGxFbXBsb3llZXMgPSAoKSA9PiB7XHJcbiAgICBhcGlNYW5hZ2VyLmdldEFsbEVtcGxveWVlcygpXHJcbiAgICAudGhlbigocGFyc2VkRW1wbG95ZWVzKSA9PiB7XHJcbiAgICAgICAgcGFyc2VkRW1wbG95ZWVzLmZvckVhY2goc2luZ2xlRW1wbG95ZWVPYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWVlLWxpc3RcIikuaW5uZXJIVE1MICs9IGVtcGxveWVlQ29tcG9uZW50KHNpbmdsZUVtcGxveWVlT2JqZWN0KVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRBbGxFbXBsb3llZXM7XHJcbiIsIi8vIEltcG9ydCBhbmQgY2FsbCB0aGUgZnVuY3Rpb24gdGhhdCBwcmludHMgYWxsIG9mIHRoZSBlbXBsb3llZXNcclxuXHJcbmltcG9ydCBwcmludEFsbEVtcGxveWVlcyBmcm9tIFwiLi9lbXBsb3llZVByaW50ZXIuanNcIjtcclxuXHJcbnByaW50QWxsRW1wbG95ZWVzKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gVGhpcyBtb2R1bGUgc2hvdWxkIGltcG9ydCBhbmQgY2FsbCB0aGUgRW1wbG95ZWVMaXN0IGZ1bmN0aW9uXHJcblxyXG4vLyBFbXBsb3llZSBsaXN0IHNob3VsZCBjYWxsIHRoZSBFbXBsb3llZURhdGEgZnVuY3Rpb24gYW5kIHRoZSBzaW5nbGUgZW1wbG95ZWUgY29tcG9uZW50XHJcbiIsImNvbnN0IGVtcGxveWVlQ29tcG9uZW50ID0gKHNpbmdsZUVtcGxveWVlT2JqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gYDxkaXY+XHJcbiAgICA8aDM+JHtzaW5nbGVFbXBsb3llZU9iamVjdC5maXJzdE5hbWV9ICR7c2luZ2xlRW1wbG95ZWVPYmplY3QubGFzdE5hbWV9PC9oMz5cclxuICAgIDxwPiR7c2luZ2xlRW1wbG95ZWVPYmplY3QuZGVwYXJ0bWVudH08L3A+XHJcbiAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVtcGxveWVlQ29tcG9uZW50OyJdfQ==

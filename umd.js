(function (global, factory) {
  if(typeof exports === 'object' && typeof module !== 'undefined') {
   module.exports = factory();
  } else if(typeof define === 'function' && define.amd) {
   define('<%= moduleName %>', [], factory);
  } else {
   global.<%= moduleName %> = factory();
  }
})(this, function() {
  return function() {

  }
});

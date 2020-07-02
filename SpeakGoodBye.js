(function() {
  var byeGreeter = {};
  var greeting = "Good bye";
  byeGreeter.sayBye = function (name) {
    console.log(greeting + " " + name);
  }
  window.byeGreeter = byeGreeter;
})(window);

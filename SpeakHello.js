(function() {
  var helloGreeter = {};
  var greeting = "Hello"
  helloGreeter.sayHello = function(name) {
    console.log(greeting + " " + name);
  }
  window.helloGreeter = helloGreeter;
})(window);

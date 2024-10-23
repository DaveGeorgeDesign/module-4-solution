(function(window) { 

  var speakWord = "Hello";

  var helloSpeaker = {}; 

  helloSpeaker.speak = function (name) {

    console.log(speakWord + " " + name);

    document.write(speakWord + " " + name + "<br>");

  }
  
  window.helloSpeaker =  helloSpeaker;
  
})(window);

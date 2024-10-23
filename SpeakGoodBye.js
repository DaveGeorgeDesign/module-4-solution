(function(window) { 

  var speakWord = "Good Bye";

  var byeSpeaker = {};  

  byeSpeaker.speak = function (name) {
    
    console.log(speakWord + " " + name);
    
    document.write(speakWord + " " + name + "<br>");
  
  }
  
  window.byeSpeaker =  byeSpeaker;

})(window);

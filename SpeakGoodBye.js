(function(window) { 
  const speakWord = "Good Bye";
  const byeSpeaker = {};  
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    document.write(speakWord + " " + name + "<br>");
  }
  window.byeSpeaker =  byeSpeaker;
})(window);
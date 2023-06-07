// this will be a placeholder script for the docs searcher (js)
// it will search and display you a docs
// it will be implemented after theres a docs[]!


setInterval(() => {
    var element = document.getElementById("docstext");

    // Set the element's text to "New text"
    element.textContent = "There are currently no archive availble.";
    setInterval(() => {
        var element = document.getElementById("docstext");
    
        // Set the element's text to "New text"
        element.textContent = "There are currently no archive availble..";
        setInterval(() => {
            var element = document.getElementById("docstext");
        
            // Set the element's text to "New text"
            element.textContent = "There are currently no archive availble...";
          }, 1000);
      }, 1000);
  }, 1000);
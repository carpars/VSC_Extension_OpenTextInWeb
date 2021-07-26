// TODO: Create a mainfest file for the extension (review the MSDN docs)
// TODO: use 'browser' for browserAction (it is fired when the user press an icon in the toolbar)
// TODO: use language detection with chrome api i18n or others, in the Bookmark folder Extension constext translator of Chrome
// TODO: make the user select a target language, in a dropdown
// TODO: keep that selection for future sessions in this browser
// TODO: send ajax and draw result
// TODO: enable "Copy to clipboard"

  
    
// let browser = browser || chrome;

// 
//   browser.browserAction.onClicked.addListener(function(tab) {
//     alert("clicked");
//     // chrome.tabs.executeScript(null, {file: "testScript.js"});
//  });

  document.addEventListener( "contextmenu", function(e) {
     e.preventDefault(); 
       
    // if (window.getSelection) {
      let selectedText = window.getSelection();
      showMenu(e, selectedText);
    // }
    
            //callApiLinguee();
  });

window.addEventListener('DOMContentLoaded', function (e) {
  let elementContextMenu = document.getElementById("context-translation");
  elementContextMenu.addEventListener('onkeyup', function (event) {
    alert("entre elemCont_ on key up");
  });
  // document.getElementById("user-language").innerText = detectUserLanguage();
  i18nInitialize();
});

  document.addEventListener( "click", function(e) {    
    var button = e.which || e.button;    
    if ( button === 1 ) {
      let contextElement = e.target.closest("#context-translation");
      if (contextElement == undefined) {            
            hideMenu();
        }
      }     
    });    

    function i18nInitialize(){
    }

  function showMenu(event, selectedText)
  {
    //TODO Remove
    selectedText = "There are close interrelationships";

    $("#context-translation").find("textarea").text(selectedText);
    //let detectingLanguage = browser.i18n.detectLanguage(selectedText); // TODO: uncomment
    document.querySelector("#context-translation").style.display = "inline-block";
    document.querySelector("#context-translation").style.top = event.clientY + "px";
    document.querySelector("#context-translation").style.left = event.clientX + "px";
    // document.querySelector("ul#actions-menu").style.display = "inline-block";
    // document.querySelector("ul#actions-menu").style.top = event.clientY + "px";
    // document.querySelector("ul#actions-menu").style.left = event.clientX + "px";
  }

  function hideMenu()
  {       
      document.querySelector("#context-translation").style.display = "none";          
  }

  function detectUserLanguage() {            
        return navigator.language;
  }

  function callApiLinguee(textToTranslate){
      
    $.ajax({
        url:"https://linguee-api.herokuapp.com/api?q=obrigado&src=pt&dst=en",
        method: "GET",
        success: function(data) {
            drawResult(data);
        },
        fail: function(){
            alert("ERROR--");
        }
    });

    //   fetch("https://linguee-api.herokuapp.com/api?q=obrigado&src=pt&dst=en", {
    //     method: "GET",
    //     // body: jsonD,   
    //     mode: "cors",
    //     cache: "no-cache",
    //     //credentials: "same-origin",
    //     // headers: {
    //     //    "Content-Type": "application/json"
    //     // }
    //     //,
    //     redirect: "follow",
    //     referrerPolicy: "no-referrer"
                            
    // })
    // //.exact_matches[0].translations[0].text);
    //     .then(response => { 
    //         response.json(); 
    //         alert(response.json());
    //     })
    //     .catch(error => { console.error("Error: ", error); alert("NO");})
    //     .then(data => DrawResult(sourceType, data, selectorId));       
  }

  function drawResult(sourceType, data, selectorId) {
      
  }
document.addEventListener( "contextmenu", function(e) {
    e.preventDefault();    
            showMenu(e);
            //callApiLinguee();
  });

  document.addEventListener( "click", function(e) {
    var button = e.which || e.button;
    if ( button === 1 ) {
      hideMenu();
    }
});

window.onkeyup = function(e) {
    if ( e.keyCode === 27 ) {
      hideMenu();
    }
  }

  function showMenu(event)
  {
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
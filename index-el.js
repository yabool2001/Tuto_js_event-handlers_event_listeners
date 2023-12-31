// You can apply many EventListener

const button = document.querySelector ( ".btn" ) ;
button.addEventListener ("click" , () => console.log ( "button clicked" ) ) ;
button.addEventListener ("click" , () => document.getElementById("app").innerHTML = "button clicked" ) ;
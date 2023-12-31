// You should apply only one event handlers. Only last one will be applied. Commented version is proper.

const button = document.querySelector ( ".btn" ) ;

button.onclick = () => document.getElementById("app").innerHTML = "button clicked" ;
button.onclick = () => console.log ( "button clicked" ) ;

// button.onclick = () =>
// {
//     console.log ( "button clicked" ) ;
//     document.getElementById("app").innerHTML = "button clicked" ;
// }

var e1 = document.getElementById("input1")
var e2 = document.getElementById("input2")
var s1 =document.getElementById("s1");


function setcookie(){
    let username = e1.value;
    let pass = e2.value;

   
    document.cookie = "username:  "  + username + "; expires  = 4/12/2021" ;
    document.cookie = "password:  "  +pass + ":expires = 4/12/2021" ;

}
function getcookie(){
    s1.innerHTML =document.cookie;
}
function clearCookie() {
    document.cookie = "username= "  ; expires  = 4/12/2021 ;
    document.cookie = "password="  ; expires = 4/12/2021;
}
//console.log(savecookie());


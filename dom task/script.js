
let name = document.getElementById("name");
let age = document.getElementById("age");

let radio = document.querySelectorAll("#radio");
//let radio2 = document.getElementById("radio2");

let form = document.getElementById("form");

let inputcolor =document.getElementById("inputcolor");
let register = document.getElementById("register");
let result = document.getElementById("result");


function cookie() {
    document.cookie = "name" +name+ "; expires = 5/12/2021" ;
    document.cookie = "age" +age+ ";expires = 5/12/2021" ;
    document.cookie = "inputcolor" +inputcolor+ "; expires = 5/12/2021";
    document.writeln("welcome" +name+ "you have visited this site " + + "" );
}

      //register.addEventListener("click",myFunction)


register.addEventListener("click" , myFunction);
      



      function myFunction() {

        //   window.open("./newindex.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        location.replace("./newindex.html")
        for(var i in radio){
    if (radio[0].checked) {
        result.setAttribute("src" , "male.jpeg")
    }else if(radio[1].checked){
        result.setAttribute("src" , "female.jpeg")
    }
}
      }
        
     
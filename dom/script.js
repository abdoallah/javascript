//select elements from html file
let bigdiv = document.getElementById("big");
let span = document.getElementById("span");
let text = document.getElementById("spantext");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let chtml = document.getElementById("chtml");
let ctxt = document.getElementById("ctxt");
let content = document.getElementById("content");
let multiply = document.getElementById("multiply");
let cstyle = document.getElementById("cstyle");
let test = document.getElementById("test");
let inputdata = document.getElementById("inputdata");
let google = document.getElementById("google");
let linkedin = document.getElementById("linkedin");
 
console.log(input1.value);

function changehtml() {
    span.innerHTML = "abdallah"
}
function changetxt() {
    span.innerText = "abdallah"
}

function changestyle() {
    bigdiv.style.background ="red";
    //bigdiv.classList.toggle("testt");
}

function printdata() {
inputdata.innerHTML =  "result of multiply is " + (input1.value )* (input2.value) + " "; 

}
function testgl(){
    google.setAttribute("href" , "https://linkedin.com/")
    linkedin.setAttribute("href" , "https://google.com/")
}




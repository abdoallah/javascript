////this snippit takes a message and print it in 6 font of h tage  from <h1> to > <h6> 
let message = prompt("enter message");
let counter = 6 ;
for(let i =1 ; i <=counter; i++){
    document.writeln(`<h${i}>${message}${i} </h${i}>`);
}
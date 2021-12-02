let arr = [];
let mul = 1, div = 1, sum = 0;
for (let i = 0; i <= 2; i++) {
    let number = parseInt(prompt(`please enter number ${i + 1}`));
    arr.push(number);
}
for (let i = 0; i <= 2; i++) {

    mul *= arr[i];
    div /= arr[i];
    sum += arr[i];
}
document.writeln(`multiplication of 3 value ${arr.join('*')} = ${mul} </br>`);
document.writeln(`division of 3 value ${arr.join('/')} = ${div} </br>`);
document.writeln(`sum of 3 value ${arr.join('+')} = ${sum} </br>`);

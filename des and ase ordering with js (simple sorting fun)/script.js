function sorting() {

    let arr1 = [];

    for (let i = 0; i <= 4; i++) {
        let number = parseInt(prompt(`please enter number${i}`));
        arr1.push(number);
    }
    console.log(arr1.sort(bubbleA()));
    console.log(arr1.sort(bubbleD()));

}
function bubbleA(a, b) {
    return a - b;
}

function bubbleD(a, b) {
    return b - a;
}

let srtest = "Noon";
// this confirm message to check for the uppercase and lowercase scenario 
let result = confirm("do you want to ignor case sensativity")
if (result) {
    //document.writeln(srtest);
    //document.writeln(result);
    document.writeln(palindrome(srtest.toLowerCase()));

}
// if user doesnt want to ignor
else {

    srtest.toLowerCase();
    //document.writeln(srtest);
    //document.writeln(result);
    document.writeln(palindrome(srtest));
}
//function compare char for each index on both sides of the string  
function palindrome(str) {
    let len = str.length;
    if (len <= 2) {
        return true;
    }
    let start = 0;
    let end = len - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true


}
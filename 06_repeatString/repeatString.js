const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let string = ""
    for (let i = 0; i < num; i++) {
        string += str
    }
    return string
}
console.log(repeatString('hello', 4))
// Do not edit below this line
module.exports = repeatString;

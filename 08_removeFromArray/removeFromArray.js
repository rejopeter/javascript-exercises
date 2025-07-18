const removeFromArray = function(arr, value) {
    for (let i = 0;i < arr.length; i++) {
        if (i == value) {
            arr.splice(i-1, 1)
        }
    }
    return arr
};
console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;

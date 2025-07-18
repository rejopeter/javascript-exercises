const leapYears = function(year) {
    if (year % 4 || year % 100 || year % 400) {
        console.log(year + " is Leap")
    } else {
        console.log("Not a leap year")
    }
};
leapYears(2000)
// Do not edit below this line
module.exports = leapYears;

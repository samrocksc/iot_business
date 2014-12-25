//Establish Open/Closed Variable
var moment = require('moment');
var currentStatus = "closed";
var days = require('./business.js');

//Establish Day of Week
var theDay = days[moment().format('dddd')];
var theTime = moment().format('H');

//function statement
if (theTime >= theDay.openTime && theTime < theDay.closeTime) {
	currentStatus = "open"
}

console.log(theDay);
console.log(theTime);
console.log("The business is currently " +currentStatus);

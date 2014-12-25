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

//establishes status of business currently
console.log("The business is currently " +currentStatus);

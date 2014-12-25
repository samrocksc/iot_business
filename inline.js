//Establish Open/Closed Variable
var currentStatus = "open";
var dateFunctions = ('./dateFunctions.js');
//Establish Day of Week
var date = new Date();

function getWeekDay(date) {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    return days[date.getDay()]
}
var day = date.getDate()
var weekdate = (getWeekDay(date))
var year = date.getFullYear()
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();

//establish variables for the parameters of the business
var sunday = "Sun" , openTime = "9", closeTime = "15";
var monday = "Mon" , openTime = "7", closeTime = "17";
var tuesday = "Tue" , openTime = "7", closeTime = "17";
var wednesday = "Wed" , openTime = "7", closeTime = "17";
var thursday = "Thu" , openTime = "7", closeTime = "21";
var friday = "Fri" , openTime = "7", closeTime = "21";
var saturday = "Sat" , openTime = "7", closeTime = "21";

//function statement
if (weekdate == weekdate && hours >= openTime && hours > closeTime) {
	var currentStatus = "open"
} else {
	var currentStatus = "closed";
};

console.log("The business is currently " +currentStatus);
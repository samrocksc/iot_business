//Establish Open/Closed Variable
var status = "open";
//Establish Day of Week
var date = new Date();
function getWeekDay(date) {
  var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

  return days[ date.getDay() ]
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

//declare day(weekdate)
console.log(date);
console.log(day);
console.log(weekdate); 
console.log(year);
console.log(seconds);
console.log(minutes);
console.log(hours);
console.log(weekdate);

console.log("The day is currently " +weekdate+  " and the hours are currently " +hours);

//function statement
if (weekdate == tuesday && hours >= openTime && hours <= closeTime) {
	var status = "open"
} else {
	var status = "closed";
};

console.log("The business is currently " +status);
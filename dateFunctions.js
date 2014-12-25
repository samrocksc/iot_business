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

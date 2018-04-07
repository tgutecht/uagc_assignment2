var DateFormatter = {

getShortTime: function(date){
var hours = date.getHours();
var minutes = date.getMinutes();
var meridiem = (hours < 12) ? "AM" : "PM";
   return hours + ":" + minutes +" " + meridiem;
},

getLongTime: function(date){
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var meridiem = (hours < 12) ? "AM" : "PM";
   return hours + ":" + minutes + ":" + seconds + " " + meridiem;
},

getShortDate: function(date){
var month = date.getMonth()+1;
var day = date.getDate();
var year = date.getFullYear();
   return month + "/" + day + "/" + year;
},

getLongDate: function(date){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var monthName = monthNames[date.getMonth()];
var dayOfMonth = date.getDate();
var year = date.getFullYear();
   return monthName + " " + dayOfMonth + ", " + year;
},

getShortDateTime: function(date){
var month = date.getMonth()+1;
var day = date.getDate();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var meridiem = (hours < 12) ? "AM" : "PM";
   return month + "/" + day + "/" + year + " " + hours + ":" + minutes +" " + meridiem;
},

getLongDateTime: function(date){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var monthName = monthNames[date.getMonth()];
var dayOfMonth = date.getDate();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var meridiem = (hours < 12) ? "AM" : "PM";
   return monthName + " " + dayOfMonth + ", " + year + " " + hours + ":" + minutes +" " + meridiem;
},

getExtendedDateTime : function(date){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
var monthName = monthNames[date.getMonth()];
var dayName = dayNames[date.getDay()];
var dayOfMonth = date.getDate();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var meridiem = (hours < 12) ? "AM" : "PM";
   return dayName + ", " + monthName + " " + dayOfMonth + ", " + year + " " + hours + ":" + minutes +" " + meridiem;
},

}
var date = new Date();
console.log(DateFormatter.getShortTime(date));
console.log(DateFormatter.getLongTime(date));
console.log(DateFormatter.getShortDate(date));
console.log(DateFormatter.getLongDate(date));
console.log(DateFormatter.getShortDateTime(date));
console.log(DateFormatter.getLongDateTime(date));
console.log(DateFormatter.getExtendedDateTime(date));

document.getElementById("dateSection").innerHTML = DateFormatter.getShortTime(date);

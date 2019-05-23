let thisMoment = new Date();


// Date get Methods

console.log("date: " + thisMoment);
console.log("Date object's day date.getDate(): " + thisMoment.getDate());
console.log("Date objects's weekday number date.getDay(): " + thisMoment.getDay());
console.log("date.getFullYear(): " + thisMoment.getFullYear());
console.log("date.getHours(): " + thisMoment.getHours());
console.log("date.getMilliseconds(): " + thisMoment.getMilliseconds());
console.log("date.getMinutes(): " + thisMoment.getMinutes());
console.log("date.getMonth(): " + thisMoment.getMonth());
console.log("date.getSeconds(): " + thisMoment.getSeconds());
console.log("date.getTime(): " + thisMoment.getTime());
console.log("date.getYear(): " + thisMoment.getYear());
console.log("date.toDateString(): " + thisMoment.toDateString());



function getDayName(dateString) {
    let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                         "Saturday"];
    let date = new Date(dateString);
    return daysOfTheWeek[date.getDay()];
}

getDayName("06/5/1973");

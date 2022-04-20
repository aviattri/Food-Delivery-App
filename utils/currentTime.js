var objToday = new Date(),
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    curretDate + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  curHour =
    objToday.getHours() > 12
      ? objToday.getHours() - 12
      : objToday.getHours() < 10
      ? "0" + objToday.getHours()
      : objToday.getHours(),
  curMinute =
    objToday.getMinutes() < 10
      ? "0" + objToday.getMinutes()
      : objToday.getMinutes(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

var curretDate =
  dayOfMonth +
  " " +
  curMonth +
  ", " +
  curHour +
  ":" +
  curMinute +
  "." +
  curMeridiem;

export default curretDate;

const toDate = require('./toDate');
const toInteger = require('./toInteger');

function addDays (dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    // chang to string literal and not string concatenating
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    );
  }

  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}
// proper call
addDays(new Date(2014, 8, 1), 10);
// fault call
addDays(new Date(2014, 8, 1), '10');
// fault call
addDays(new Date(2014, 8, 1));

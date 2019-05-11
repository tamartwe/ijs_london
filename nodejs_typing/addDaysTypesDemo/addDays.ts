
function toInteger(number: number) {
    if (isNaN(number)) {
        return 0;
    }
    return number < 0 ? 
    Math.ceil(number) : Math.floor(number);
}

function addDays (date: Date, dirtyAmount: number) {   
  var amount = toInteger(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}

// proper call
addDays(new Date(2014, 8, 1), 10);
// fault call
addDays(new Date(2014, 8, 1), '10');
// fault call
addDays(new Date(2014, 8, 1), NaN);
// fault call
addDays(new Date(2014, 8, 1));


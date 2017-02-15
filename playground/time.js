// Jan 1st 1970 00:00:00 am
var moment = require('moment')


// var date = new Date();
// console.log(date.getMonth())

// var date = moment();
// date.add(1, 'years').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))
var someTimestamp = moment().valueOf();

var createdAt = new Date().getTime();
var date = moment(someTimestamp);

console.log(date.format('MMM do, YYYY h:mm a'))
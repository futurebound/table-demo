'use strict';

// var cars = [{
//   make: 'honda',
//   model: 'accord',
//   year: 2011,
//   mileage: 87000
// },
// {
//   make: 'toyota',
//   model: 'accord',
//   year: 2011,
//   mileage: 213000
// },
// {
//   make: 'ford',
//   model: 'escort',
//   year: 1993,
//   mileage: 98000
// }];

// THIS PATTERN IS CORRECT OF THE FOLLOWING 3, VAR, FUNCTION, VAR
var table = document.getElementById('table_content');
var data = [];
var cars = [];

function Car(make, model, year, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

var toyota = new Car('toyota', 'corolla', 1988, 213000);
var honda = new Car('honda', 'accord', 2012, 110000);
var ford = new Car('ford', 'escort', 1993, 123000);

// THEN TO PUSH TO ARRAY, DO THIS ORRRRRRRR
cars.push(toyota);
cars.push(honda);
cars.push(ford);

// OR DO THIS WAY
cars.push(new Car('toyota', 'corolla', 1988, 213000));
cars.push(new Car('honda', 'accord', 2012, 110000));
cars.push(new Car('ford', 'escort', 1993, 123000));

// this for loop is to make table headers
for (var i = 0; i < cars.length; i++) {
  // makes super long string with all table data in it
  // cars to the [0] on the 1st iteration of the for loop, does the following for each .xxx
  data.push(
    '<td>' + cars[i].make + '</td>' +
    '<td>' + cars[i].model + '</td>' +
    '<td>' + cars[i].year + '</td>' +
    '<td>' + cars[i].mileage + '</td>'
  );
}

var newRow;
// this for loops is to go thru each individual item in our data array, stuff that in a new row, then stuff that in the DOM
for (var j = 0; j < data.length; j++) {
  //
  newRow = document.createElement('tr');
  // make a tr, grab item from above loop, and shove it in there
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}

"use strict";
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  let cars = carsJSON.map(function(car, i, carsJSON) {
    return `<div class="col-md-4 car"><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`
  })
  return `<div class="row">${cars.join('')}</div>`
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON))
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
 var i = 0
 let url = `${baseUrl}${i++}/3`
 $.ajax({
   url: url,
   dataType: 'jsonp',
   success: addCarsToDOM
 })
}

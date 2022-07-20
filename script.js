console.log( "Write a function that converts hours into seconds.")

let hours = [ 5, 3 ] // array of hours

console.log(convertHoursToSeconds(hours)) // calling the function

function convertHoursToSeconds(hours)

 {

    return hours.map(hours => hours * 360) 

}

console.log("Create a function which returns the number of true values there are in an array.")

let values = [];
let a = 5;                          // number of boolean elements in an array
for (var i = 0; i < a; i++) 
{
    values[i] = Boolean(Math.round( Math.random())) 
}
console.log(values);
console.log(valueTrueReturn);

function valueTrueReturn(values) 
{
    return values.filter(values => values == true).length

}
values = valueTrueReturn(values);

if(values == 1)
{
    console.log( "There is " + values + " true value in the array")

}
else 
{
    console.log( "There are " + values + " true values in the array")
}


console.log( "Write a function that converts hours into seconds.")

let hours = [ 5, 3 ] // array of hours

console.log(convertHoursToSeconds(hours)) // calling the function

function convertHoursToSeconds(hours)

 {

    return hours.map(hours => hours * 60) 

}


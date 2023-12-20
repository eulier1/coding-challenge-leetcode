/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let militaryTime = ''
    const timeRegex = 
    /^(?<hours>\d+):(?<minutes>\d+):(?<seconds>\d+)(?<meridian>[PM|AM]{2})$/
    
    const timeComponent = s.match(timeRegex)
    
    const { groups } = timeComponent
    
    let { hours, minutes, seconds, meridian } = groups
    
    hours = Number(hours)
    
    if (meridian === 'PM' && hours !== 12) {
        hours += 12
    }
    
    if (meridian === 'AM' && hours === 12) {
        hours = 0
    }
    
        console.log(`${hours.toString().padStart(2,0)}:${minutes.toString()}:${seconds.toString()}`)
    
    militaryTime = `${hours.toString().padStart(2,0)}:${minutes.toString()}:${seconds.toString()}`
    
    return militaryTime
}
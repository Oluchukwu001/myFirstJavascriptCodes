// radius is called a parameter or an argument 

// it is a variable that would only be used inside the getTheCircumferenceOfACircle function

// const getTheCircumferenceOfACircle = (radius) => {
//     const pi = 22/7
//     if(isNaN(radius)){
//         return 'Please input a number'
//     }
//     const area = 2 * pi * radius
//     return area
// }



console.log(table.color)























const calculateVelocity = ({initailVelocity, acceleration, time}) => {
    const v = initailVelocity + acceleration*time
    return v
}
const calculateVelocity2 = (initailVelocity, acceleration, time) => {
    const v = initailVelocity + acceleration*time
    return v
}





const area = getTheCircumferenceOfACircle(666)
const velocity = calculateVelocity({
    acceleration: 3,
    time: 2,
    initailVelocity: 10
}, {fff: 'hello'})
const velocity2 = calculateVelocity2(3,2,10)
console.log(`${velocity}m/s, ${velocity2}m/s`)
// OBJECT
// const table = {
//     height: "150cm",
//     color: "Blue",
//     length: "120cm",
//     breadth: "80cm"
// }


// const person = {
//     surname: "Nwangbo Oluchukwu Prosper",
//     age: 45,
//     country: "Nigeria"
// }

// const university = {
//     universityname: "Nnamdi Azikiwe University Awka (Unizik)",
//     location: "Awka in Anambra State ",
//     ranking: 200
// }


// console.log(person.age)
// console.log(`${personUniversity[0]} you are ${personUniversity[1]} years old, you are from ${personUniversity[2]}. you attended ${personUniversity[3]} located in ${personUniversity[4]}, it's ranking in the world is ${personUniversity[5]}`)

// you get the value of an object in two ways 
// The backect notation and dot notation
// object.property (Dot Notation)
// object['property'] (Bracket Notation)

const arrayOfNumbers = [11,2,5,4,3,6,7,5,8, 5]

const words = ["Barsew", "Barses", "Bars"]

const Concat = arrayOfNumbers.concat(52) //add to an array(alternative for push) but does not alter the main array like push and pop

console.log(arrayOfNumbers.indexOf(5)) //gives the index of the first instance of the provided value found and returns -1 if the value provided does not not exist in the the array

console.log(arrayOfNumbers.includes(52)) //Checks if the provided value is in the array, returns a boolean
console.log(arrayOfNumbers.lastIndexOf(5)) //gives the index of the first instance of the provided value found and returns -1 if the value provided does not not exist in the the array
// console.log(arrayOfNumbers.reverse()) //reverses the elements of an array 
// console.log(arrayOfNumbers.slice(0, 4)) 
// console.log(arrayOfNumbers.slice(-2)) 
console.log(arrayOfNumbers.slice(0, 4)) // get the values from the array using the range(the fitst value is the strat index and the last value is the end but not inclusive)
        // console.log(arrayOfNumbers.splice(4, 4)) //deletes from main array - starts deleting from the first value provide and deletes a number of element the based on the second value provided 
// console.log(arrayOfNumbers.shift())//deletes the fisrt value of an array and returns the value
// console.log(arrayOfNumbers.unshift(9))// adds to the begining of an array
// console.log(arrayOfNumbers.toString())// converts to string
// const number  = 1000000
// console.log(number.toLocaleString(), number)
console.log(arrayOfNumbers.fill(77, 3, 5))
// console.log(arrayOfNumbers.unshift(34))

// arrayOfNumbers.push(8)
// arrayOfNumbers.push(7)
// words.sort() //Sort an array either numerically or alphabetically
// arrayOfNumbers.sort() //Sort an array either numerically or alphabetically
// arrayOfNumbers.push(7) //add to the end of an array 
// arrayOfNumbers.pop()//delete from the end of an array
// arrayOfNumbers.push(9)
// const len  = arrayOfNumbers.length //get the length of an array

// console.log(arrayOfNumbers[len -1], arrayOfNumbers, len)

 


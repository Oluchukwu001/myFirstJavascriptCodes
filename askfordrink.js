// const softDrinkes= ["mirinda", "Pop-cola", "youghurt", "pepsi", "exortic", "Fanta","coco","sprite"]
// const beer=["star", "henekin","small stount", "333"]
// const servedrink=(age,drink)=>{
//     if(((age>=18) && !beer.includes(drink) || (age>=18)&& (softDrinkes.includes(drink))) ){
//         if(age>=18 && beer.includes(drink)){
//             return `${name}, have a sit your ${drink} is on the way beer`
//            }else if(age>=18 || !beer.includes(drink) && age!==18 || !beer.includes(drink) ){
//                return `${name}, ${drink} beer is not available now check back later, sorry for the inconveniences`
//            }

//     }else if(((age<=18 || age>=18) && softDrinkes.includes(drink))|| !(age<=18 || age>=18) && !(softDrinkes.includes(drink)) ){
//          return `${name}, have a sit your ${drink}soft drink is on the way`
//     } else {
//         return `${name},soft drink ${drink} is not available now check back later, sorry for the inconveniences`
//    } 

// }
// const data= servedrink("18", "mirinda")
//     console.log(data)
// // const name= prompt ("what is your name ")
// const age= prompt("how old are you please")
// const drink= prompt ("which drink will you love to have ")


// console.log(name)
// console.log(age)
// console.log(drink)
// const no=age
// const be=drink






// const softDrinks = ["mirinda", "Pop-cola", "youghurt", "pepsi", "exortic", "Fanta", "coco", "sprite"]
// const beers = ["star", "henekin", "small stount", "333"]

// const drinkserver = (age, drink) => {
//     if (!softDrinks.includes(drink) || (!beers.includes(drink))) {
//         return `we don't have this ${drink}`
//     } else if (softDrinks.includes(drink) || beers.includes(drink)) {
//         if (beers.includes(drink) && age >= 18) {
//             return `sit down and wait your ${drink}  drink is coming please`
//         } else {
//             return `you are too young to take alcoholic drink  `
//         }
//     } else if (softDrinks.includes(drink)) {
//         return `you can have ${drink} soft drink`
//     }
// }

// const drinkServer = (age, drink) => {
//     if (!softDrinks.includes(drink) && (!beers.includes(drink))) {
//         return `we don't have this ${drink}`
//     }

//     if (beers.includes(drink)) {
//         if(age >= 18){
//             return `sit down and wait your ${drink}  drink is coming please`
//         }else{
//             return `you are too young to take alcoholic drink  `
//         }
//     } else {
//         return `you can have ${drink} soft drink`
//     }

// }
// const age=prompt("how old are you")
// const drink=prompt("which drink will you love to take")
// console.log(typeof age)
// const give = drinkServer(age, drink)
// console.log(give)

// const softdrinking = ["mirinda", "Pop-cola", "youghurt", "pepsi", "exortic", "Fanta", "cocoa-cola", "sprite"]
// const beerss = ["star", "henekin", "small stount", "33","life", "Action bitter"]
// const drinken= prompt("which drink do you wish to have?")
// const naming= prompt("what is your name?")



// const servethecustomerdrink=(age, drink)=>{
//     if(!beerss.includes(drink) && !softdrinking.includes(drink)){
//         return` ${naming}, ${drink}, is not available now, please check back later thank`
//     }

//     if(beerss.includes(drink)){
//         if(age>=18){
//             return`Dear ${naming}, please sit down while the ${drink} arrives`
//         } else if(age<17){
//             return`Hey, ${naming} you are still very young, you cann't have  ${drink}`

//         }

//     }else if(softdrinking.includes(drink)){
//         return`Dear ${naming}, you can have a seat, as you wait for your ${drink}`
//     }

// }
// const aging= prompt("how old are you?")

//  const collectage=aging
//  const collectdrink=drinken
// const give=servethecustomerdrink(collectage, collectdrink)

// console.log(give)




let odd = []
let even = [4] 
const numbers = [1, 3, 6, 5, 6, 7, 12, 34, 67, 88, 504, -5, -6]


const separateoddfromevennumber = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            even.push(num[i])
        } else {
            odd.push(num[i])
        }
    }
    return {
        even,
        odd
    }
}
const ddd = separateoddfromevennumber(numbers)
console.log(ddd)










// let js="amazing"
// if(js=== "amazing") alert('Javascript is fun')



// let X =15
// X +=10
// X *=4
// X--
// X++
// X--
// console.log(X)
// const johnBmi=92
// const johnheight=1.95
// const mass= johnBmi

// const markBmi=78
// const markheight=1.69
// const calculateBMIforjohn= johnBmi/johnheight ** 2
// const calculateBMIformak= markBmi/(markheight * markheight)
// const storemassandheight= `${johnBmi,johnheight,markBmi,markheight}`
// const compare= calculateBMIformak >  
// console.log(calculateBMIforjohn,calculateBMIformak,storemassandheight, compare)


// if(car.brand=== "mercedes" || car.speed> 240){
//     console.log(`yes the car is mercedesand its spend is over 240m/s`)
// }else
// console.log("the condition is not meet")


// const mainage=18
// const adaage=20
// const age=prompt("what is your age")
// const number= 12
// console.log(age)

// if(age===number){
//     console.log("cool, that is good of you" )
// }else {
//     console.log("invalid number please input a number")
// }

// if(number>=18){
//     console.log(`you can vote now you are an adult`)
// }else if(number<=17){
//     console.log(`obi you canot vote becaue you are a child. it remaining ${mainage-number} years,  so you can be eligible to  vote`)
// }

// if(number>=18 && adaage>=18){
//     console.log(`both of you can vote now you are an adult`)

// }else if(number>=18 && adaage<=17){
//     console.log( "Obi you can vote now vote you are eligible. Ada go and play you are still a baby")
// }else if(number<=17 && adaage>=18){
//     console.log( "Ada you can vote now vote you are eligible. Obi go and play you are still a baby")
// }

// parseInt(Speed) converts string to number 

// const Name = prompt("what is your Name")
// const Car = prompt("what is the brand of your car")
// const Speed = prompt("what speed limit are you on")


// const car = {
//     brand: "mercedes",
//     speed: 240,
// }

// if (car.brand === Car) {
//     if (parseInt(Speed) < car.speed ) {
//         console.log(`Hey ${Name} the brand of your car is mercedes and you are on the right speed limit`)
//     } else {
//         console.log(`Hey ${Name} the brand of your car is mercedes and you have exceeded the speed limit`)
//     }
// } else {
//     if (parseInt(Speed) < car.speed) {
//         console.log(`Hey ${Name} the brand of your car is ${Car} and you are on the right speed limit`)
//     } else {
//         console.log(`Hey ${Name} the brand of your car is ${Car} and you have exceeded the speed limit`)
//     }
// }




// const hasagoodvision = true
// const hasadriverslice = true
// const amtired = false
// if (hasadriverslice || hasagoodvision && amtired) {
//     console.log("you don't have to drive you are tired already")
// } else if (hasadriverslice && hasagoodvision || amtired) {
//     console.log('you can drive you are healthy')
//     //
// }

// const dophinescore = 96 + 108 + 89
// const dophineaverage = dophinescore / 3
// const Koalasscore = 88 + 91 + 110
// const Koalasavarage = Koalasscore / 3
// console.log(dophineaverage)
// console.log(Koalasavarage)

// if (dophineaverage > Koalasavarage) {
//     console.log(" the winner is dolphin")
// } else if (dophineaverage < Koalasavarage) {
//     console.log("the winner is koalas")
// } else if (dophineaverage === Koalasavarage) {
//     console.log("there's no winner, the team have equal score or average")
// }

// const minimumpoint = 100
// const dophinescore1 = 121 //97+112+101
// const dophineaverage1 = dophinescore1 / 3
// const Koalasscore1 = 121 //109+95+123
// const Koalasavarage1 = Koalasscore1 / 3
// console.log(dophineaverage1)
// console.log(Koalasavarage1)
// console.log(dophinescore1)
// console.log(Koalasscore1)

// if (dophinescore1 >= minimumpoint && dophinescore1 > Koalasscore1) {
//     console.log("dolphins is the winner of the competition")

// } else if (Koalasscore1 >= minimumpoint && Koalasscore1 > dophinescore1) {
//     console.log("koalas is the winner of the competition")
// } else if (Koalasscore1 === dophinescore1 && Koalasscore1 >= minimumpoint && dophinescore1 >= minimumpoint) {
//     console.log("both team win")
// } else if (Koalasscore1 < minimumpoint && dophinescore1 < minimumpoint) {
//     console.log(" no team win the trophy")
// }






// const minimumpoint = 100
// const dophinescore1 = 121 //97+112+101
// const dophineaverage1 = dophinescore1 / 3
// const Koalasscore1 = 121 //109+95+123
// const Koalasavarage1 = Koalasscore1 / 3
// console.log(dophineaverage1)
// console.log(Koalasavarage1)
// console.log(dophinescore1)
// console.log(Koalasscore1)

// if (dophinescore1 >= minimumpoint && dophinescore1 > Koalasscore1) {
//     console.log("dolphins is the winner of the competition")

// } else if (Koalasscore1 >= minimumpoint && Koalasscore1 > dophinescore1) {
//     console.log("koalas is the winner of the competition")
// } else if (Koalasscore1 === dophinescore1 && Koalasscore1 >= minimumpoint && dophinescore1 >= minimumpoint) {
//     console.log("both team win")
// } else if (Koalasscore1 < minimumpoint && dophinescore1 < minimumpoint) {
//     console.log(" no team win the trophy")
// }





//loop
// const names = ["Prosper", "Helen", "Camsy", "Joe"] //Joe
// const passwords = ["pass123", "pass111", "pass010", "pass001"]
// const name = prompt("What is your name?")
// const password = prompt("What is your password?")
// let greet = ''
// for (let i = 0; i < names.length; i++) {
//     if (names[i] === name) {
//         if (passwords[i] === password) {
//             greet = `Hello and Welcome ${name}`
//         } else {
//             greet = `Hello ${name} your password is not correct`
//         }
//     } else {
//         if (!names.includes(name)) {
//             greet = `Sorry ${name} you are not registered on this platform`
//         }
//     }
// }


// console.log(greet)


//loop
// const loopNumbers = [1, 2, 3, 4, 5]
// let newNumbers = []
// let newNumbers1 = []
// for (let i = 0; i < 3; i++) {
//     newNumbers[i] = loopNumbers[i]
//     newNumbers1[i] = i + 12
//     console.log(loopNumbers,)
// }




// const num1= prompt("input first number")
// const num2= prompt("input second number")
// const num3= prompt("input third number")
// const num4= prompt("input fourth number")
// const num5= prompt("input fifth number")
// const array=[num1, num2,num3,num4,num5]
// const nua=[]
// //const wego=[1,2,3,4,5]
// console.log(array)
// const son=[]
// for(let i=0; i < array.length -1; i++){
//      nua[i]=array[i]
//      son[i]= i + 12
//     console.log(array)
//     // console.log(son)
//     console.log(nua)
//     // console.log(array)

// }




// /loop
// const loopNumbers = [1, 2, 3, 4, 5]
// let newNumbers = []
// let newNumbers1 = []
// for (let i = 0; i < 3; i++) {
//     newNumbers[i] = loopNumbers[i]
//     newNumbers1[i] = i + 12
//     console.log(loopNumbers)
// }








// //loop
// const loopNumbers = [1, 2, 3, 4, 5]
// let newNumbers = [1,2,3,4,5]
// let newNumbers1 = []
// for (let i = 0; i < loopNumbers.length; i = i +2) {
// newNumbers[i] = loopNumbers[i] * 12
// console.log(i)
// }

// console.log(newNumbers)

//3 0 undefined   3
//5 6 3   3
//7 18 1.5  3



const pro = [1, 2, 3, 4, 5, 6]
const sup = []
for (let i = 0; i < 5; i++) {
    sup[i] = pro[i]
    console.log(pro,sup)
}

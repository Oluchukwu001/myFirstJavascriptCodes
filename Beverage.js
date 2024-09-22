
const softDrinks = ['coke', 'pop cola', 'fanta', 'mirinda', 'pepsi', '7up']
const beer = ['star', 'guiness', 'black bullet']
const ddd=""
const giveDrink = (name, drink, age) => {
    console.log(ddd)
    if (softDrinks.includes(drink)) {
        return `Hello ${name} here is your ${drink}`
    } else if(beer.includes(drink)) {
        if (age < 18) {
            return `Sorry ${name} you are not up to 18 so i cant sell that to you`
        } else {
            return `Hello ${name} here is your ${drink}`
        }
    }
    else{
        return `Hello ${name} we dont have ${drink} at this time, Please check back later`
    }
}

const message = giveDrink('Jane', 'Star', 18)
console.log(message)
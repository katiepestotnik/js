//Arrays

const cars = ['honda', 'ford', 'toyota']

//console.log(cars[0])

cars[cars.length - 1] = 'Porcshe'

cars.push('ferrari')

//cars.pop()
//index to start at, delete count, items to add
//console.log(cars)
cars.splice(1, 0, 'Lamborgini')
//console.log(cars)

cars.forEach((car, i) => {
    //console.log(car + ' is very cool')
    //console.log(`${car} is very cool is at index ${i}`)
})

const greeting = 'hello'

// for (let i = 0; i < greeting.length; i++){
//     console.log(greeting[i])
// }

//Objects

const myDog = {
    name: 'Klondike',
    hobbies: ['hiking', 'fetching the ball'],
    play: function () {
        console.log(`Hello my name is ${this.name} and I like to ${this.hobbies[1]}`)
    }
}

const userChoice = 'name'

//console.log(myDog[userChoice])

myDog.play()

myDog.name = 'Missy'
console.log(myDog.hobbies[0])
console.log(myDog)

for (key in myDog) {
    //console.log(key)
    console.log(myDog[key])
}
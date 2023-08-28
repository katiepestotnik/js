let temp = 90

if (temp > 89) {
    console.log(`it's dang hot`)
} else if (temp > 79) {
    console.log('it is better better')
} else if (temp > 69) {
    console.log('it is really nice')
} else {
    console.log('if nothing above is truthy')
}

const arr = ['a', 'b', 'c']
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

let playerHealth = 100
const attack = () => {
    playerHealth -= 10
    console.log(`Player Attacked, health is ${playerHealth}`)
}
while (playerHealth > 0) {
    attack()
}

console.log(`Game over, playerHeath is ${playerHealth}`)
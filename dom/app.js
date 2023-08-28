console.log('connected')

const h1 = document.querySelector('h1')
console.log(h1)

h1.innerText = 'This is an H1'

const first = document.querySelector('.first-div')
first.innerText = 'This is a div with a class'
first.style.color = 'red'
first.style.fontSize = '100px'


const second = document.querySelector('#second-div')
second.innerText = 'Second div with an id'

// const userName = prompt('Tell me your name')
// alert(`Hello ${userName}`)
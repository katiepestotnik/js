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


///input box code

const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const inputDiv = document.querySelector('.input-div')


console.log(input.value)


const addName = (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.innerText = input.value
    li.style.listStyle = 'none'
    inputDiv.append(li)
    input.value = ''

}
btn.addEventListener('click', addName)

//selecting multiple elements

const firstLi = document.querySelector('.list')
//firstLi = document.querySelector('.first-li')


const allLis = document.querySelectorAll('.list')
//console.log(firstLi)
console.log(allLis)

allLis.forEach((li) => {
    li.style.backgroundColor = 'green'
})
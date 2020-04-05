
//below picks a random number 1-6
let randomNumber1 = Math.floor(Math.random() * 3 + 1)
console.log(randomNumber1)

let b = document.querySelector("img"); 

b.setAttribute("src", `/images/image${randomNumber1}.png` )

let randomNumber2 = Math.floor(Math.random() * 3 + 1)
console.log(randomNumber2)

let c = document.querySelectorAll("img")[1]

c.setAttribute("src", `/images/image${randomNumber2}.png` )

if(randomNumber1 === 1 && randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
} 
else if(randomNumber1 === 1 && randomNumber2 === 3) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else if(randomNumber1 === 2 && randomNumber2 === 1) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else if(randomNumber1 === 2 && randomNumber2 === 3) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if(randomNumber1 === 3 && randomNumber2 === 1) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if(randomNumber1 === 3 && randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {document.querySelector("h1").innerHTML = "Draw!"}
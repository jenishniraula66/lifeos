let expenses = JSON.parse(localStorage.getItem("expenses")) || []

function addExpense(){

let name = document.getElementById("name").value
let amount = document.getElementById("amount").value

if(!name || !amount) return

expenses.push({name,amount})

localStorage.setItem("expenses",JSON.stringify(expenses))

render()

}

function render(){

let list = document.getElementById("list")

list.innerHTML=""

let total = 0

expenses.forEach((e,i)=>{

total += Number(e.amount)

let li = document.createElement("li")

li.innerHTML = `
${e.name} - ₹${e.amount}
<button onclick="deleteExpense(${i})">Delete</button>
`

list.appendChild(li)

})

document.getElementById("total").innerText = total

}

function deleteExpense(i){

expenses.splice(i,1)

localStorage.setItem("expenses",JSON.stringify(expenses))

render()

}

function scrollToTracker(){

document.getElementById("tracker").scrollIntoView({
behavior:"smooth"
})

}

render()
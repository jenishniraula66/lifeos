
// Navigation

document.querySelectorAll(".nav li").forEach(item=>{
item.onclick=()=>{

document.querySelectorAll(".nav li").forEach(i=>i.classList.remove("active"))
item.classList.add("active")

let page=item.dataset.page

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(page).classList.add("active")

}
})


// Expense Tracker

let expenses=JSON.parse(localStorage.getItem("expenses"))||[]

function addExpense(){

let name=document.getElementById("expenseName").value
let amount=document.getElementById("expenseAmount").value

expenses.push({name,amount})

localStorage.setItem("expenses",JSON.stringify(expenses))

renderExpenses()

}

function renderExpenses(){

let list=document.getElementById("expenseList")
list.innerHTML=""

let total=0

expenses.forEach((e,i)=>{

total+=Number(e.amount)

let li=document.createElement("li")
li.innerHTML=`
${e.name} - ₹${e.amount}
<button onclick="deleteExpense(${i})">Delete</button>
`
list.appendChild(li)

})

document.getElementById("totalExpense").innerText="₹"+total

}

function deleteExpense(i){

expenses.splice(i,1)
localStorage.setItem("expenses",JSON.stringify(expenses))
renderExpenses()

}


// Tasks

let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

function addTask(){

let text=document.getElementById("taskInput").value

tasks.push(text)

localStorage.setItem("tasks",JSON.stringify(tasks))

renderTasks()

}

function renderTasks(){

let list=document.getElementById("taskList")
list.innerHTML=""

tasks.forEach((t,i)=>{

let li=document.createElement("li")
li.innerHTML=`
${t}
<button onclick="deleteTask(${i})">Done</button>
`
list.appendChild(li)

})

document.getElementById("taskCount").innerText=tasks.length

}

function deleteTask(i){

tasks.splice(i,1)
localStorage.setItem("tasks",JSON.stringify(tasks))
renderTasks()

}


// Notes

let notes=JSON.parse(localStorage.getItem("notes"))||[]

function saveNote(){

let text=document.getElementById("noteInput").value

notes.push(text)

localStorage.setItem("notes",JSON.stringify(notes))

renderNotes()

}

function renderNotes(){

let list=document.getElementById("notesList")
list.innerHTML=""

notes.forEach(n=>{

let div=document.createElement("div")
div.className="card"
div.innerText=n

list.appendChild(div)

})

}


// Habits

let habits=JSON.parse(localStorage.getItem("habits"))||[]

function addHabit(){

let text=document.getElementById("habitInput").value

habits.push(text)

localStorage.setItem("habits",JSON.stringify(habits))

renderHabits()

}

function renderHabits(){

let list=document.getElementById("habitList")
list.innerHTML=""

habits.forEach((h,i)=>{

let li=document.createElement("li")

li.innerHTML=`
${h}
<button onclick="deleteHabit(${i})">Done</button>
`

list.appendChild(li)

})

document.getElementById("habitCount").innerText=habits.length

}

function deleteHabit(i){

habits.splice(i,1)

localStorage.setItem("habits",JSON.stringify(habits))

renderHabits()

}


// Init

renderExpenses()
renderTasks()
renderNotes()
renderHabits()
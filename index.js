const credits = ["Car Wash", "Mow Lawn", "Pull Weeds"]
const charges = [10,20,30]
const currency = "$"
const service_btn = document.getElementsByClassName("request-btn")
let services = []
let pay = []
const tasksList = document.getElementById("tasks-list")
const priceList = document.getElementById("price-list")
let totalAmount = 0
let count = 0
let orders = [0,0,0]

function renderbutton(_items, _price){
    for(let i = 0; i<_items.length;i++){
        service_btn[i].textContent = `${credits[i]} : ${currency} ${charges[i]}`
    }
}
renderbutton(credits,charges)


for(let i = 0;i<credits.length;i++){
    service_btn[i].addEventListener("click",function (){
        if(orders[i]==0){
            services.push(credits[i])
            pay.push(charges[i])
            totalAmount += charges[i]
            orders[i]=1
            render()
        }
    })
}


const Notes = document.getElementById("design")
const total = document.getElementById("design1")
const resetBtn = document.getElementById("invoice-btn")
resetBtn.addEventListener("dblclick",function (){
    services = []
    pay = []
    orders = [0,0,0]
    totalAmount = 0
    render()
})
function render(){
    tasksList.innerHTML = "Tasks<br><br>"
    total.innerHTML = "TOTAL AMOUNT<br>"
    priceList.innerHTML = "Total<br><br>"
    Notes.innerHTML = "NOTES<br>"
    for(let i = 0;i<services.length;i++){
        tasksList.innerHTML += `<span>${services[i]}</span> <button id = "${services[i]}" class="remove-btn">Remove</button><br>`
        priceList.innerHTML += `<span class="remove-btn"> $ ${pay[i]}</span> <br>`
        Notes.innerHTML = `NOTES<br><span>We accept cash, card or crypto</span>`
        total.innerHTML = `TOTAL AMOUNT<br><span align="right">$ ${totalAmount}</span>` 
    }
    check()
}
function check(){
    for(let i = 0;i<services.length;i++){     
        eventListener(document.getElementById(services[i]),i)
    }
}
function eventListener(doc, i){
    doc.addEventListener("click",function (){
        update(services[i])
        totalAmount -= pay[i]
        services.splice(i,1)
        pay.splice(i,1) 
        render()
    })
    
}
function update(value){
    for(let i=0;i<credits.length;i++){
        if(credits[i]==value){
            orders[i]=0
        }
    }
}
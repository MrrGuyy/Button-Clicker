let money = document.getElementById("moneyPress")
let moneyDisplay = document.getElementById("moneyDisplay")

let upgrade1 = document.getElementById("upgrade1")
let upgrade2 = document.getElementById("upgrade2")
let upgrade3 = document.getElementById("upgrade3")

money.addEventListener("click", buttonClicked)

upgrade1.addEventListener("click", upgrade1Clicked)
upgrade2.addEventListener("click", upgrade2Clicked)
upgrade3.addEventListener("click", upgrade3Clicked)


money = 0
multiply = 1
autoClick = 0

upgrade1cost = 15
upgrade2cost = 100
upgrade3cost = 1000



const formatter = new Intl.NumberFormat("en");



function buttonClicked() {
  money = money + multiply
  moneyDisplayAmt()
}

function moneyDisplayAmt() {
  moneyDisplay.innerHTML = (formatter.format(money))
}



function upgrade1Clicked() {
  if (money >= upgrade1cost) {
    money = money - upgrade1cost
    autoClick = autoClick + 1
    upgrade1cost = upgrade1cost * 1.4
    upgrade1cost = parseInt(upgrade1cost)
    upgrade1.innerHTML = (upgrade1cost + "$ Hand")
    moneyDisplayAmt()
  }
}

function upgrade2Clicked() {
  if (money >= upgrade2cost) {
    money = money - upgrade2cost
    autoClick = autoClick + 3
    upgrade2cost = upgrade2cost * 1.4
    upgrade2cost = parseInt(upgrade2cost)
    upgrade2.innerHTML = (upgrade2cost + "$ Mouse")
    moneyDisplayAmt()
  }
}

function upgrade3Clicked() {
  if (money >= upgrade3cost) {
    money = money - upgrade3cost
    autoClick = autoClick + 5
    upgrade3cost = upgrade3cost * 1.4
    upgrade3cost = parseInt(upgrade3cost)
    upgrade3.innerHTML = (upgrade3cost + "$ Bat")
    moneyDisplayAmt()
  }
}



setInterval(function(){
  money = money + autoClick
  moneyDisplayAmt()
},1000);
  

let money = document.getElementById("moneyPress")
let moneyDisplay = document.getElementById("moneyDisplay")
let cps = document.getElementById("cps")

let upgrade1 = document.getElementById("upgrade1")
let upgrade2 = document.getElementById("upgrade2")
let upgrade3 = document.getElementById("upgrade3")
let upgrade4 = document.getElementById("upgrade4")
let upgrade5 = document.getElementById("upgrade5")

money.addEventListener("click", buttonClicked)

upgrade1.addEventListener("click", upgrade1Clicked)
upgrade2.addEventListener("click", upgrade2Clicked)
upgrade3.addEventListener("click", upgrade3Clicked)
upgrade4.addEventListener("click", upgrade4Clicked)
upgrade5.addEventListener("click", upgrade5Clicked)


money = 0
multiply = 1
autoClick = 0


upgrade1AM = 0
upgrade2AM = 0
upgrade3AM = 0
upgrade4AM = 0
upgrade5AM = 0


upgrade1cost = 15
upgrade2cost = 100
upgrade3cost = 1000
upgrade4cost = 8000
upgrade5cost = 20000



const formatter = new Intl.NumberFormat("en", {
  notation: "compact"
});

const moneyFormatter = new Intl.NumberFormat("en")


function buttonClicked() {
  money = money + multiply
  moneyDisplayAmt()
}

function moneyDisplayAmt() {
  moneyDisplay.innerHTML = (moneyFormatter.format(money))
  cps.innerHTML = (moneyFormatter.format(autoClick))
}




function upgrade1Clicked() {
  if (money >= upgrade1cost) {
    money = money - upgrade1cost
    autoClick = autoClick + 1
    upgrade1AM = upgrade1AM + 1
    upgrade1cost = upgrade1cost * 1.4
    upgrade1cost = parseInt(upgrade1cost)
    upgrade1.innerHTML = (formatter.format(upgrade1cost) + "$ Hand " + formatter.format(upgrade1AM))
    moneyDisplayAmt()
  }
}

function upgrade2Clicked() {
  if (money >= upgrade2cost) {
    money = money - upgrade2cost
    upgrade2AM = upgrade2AM + 1
    autoClick = autoClick + 3
    upgrade2cost = upgrade2cost * 1.4
    upgrade2cost = parseInt(upgrade2cost)
    upgrade2.innerHTML = (formatter.format(upgrade2cost) + "$ Mouse " + formatter.format(upgrade2AM))
    moneyDisplayAmt()
  }
}

function upgrade3Clicked() {
  if (money >= upgrade3cost) {
    money = money - upgrade3cost
    upgrade3AM = upgrade3AM + 1
    autoClick = autoClick + 5
    upgrade3cost = upgrade3cost * 1.4
    upgrade3cost = parseInt(upgrade3cost)
    upgrade3.innerHTML = (formatter.format(upgrade3cost) + "$ Bat " + formatter.format(upgrade3AM))
    moneyDisplayAmt()
  }
}

function upgrade4Clicked() {
  if (money >= upgrade4cost) {
    money = money - upgrade4cost
    multiply = multiply + 1
    upgrade4AM = upgrade4AM + 1
    upgrade4cost = upgrade4cost * 1.4
    upgrade4cost = parseInt(upgrade4cost)
    upgrade4.innerHTML = (formatter.format(upgrade4cost) + "$ Grow Hand " + formatter.format(upgrade4AM))
    moneyDisplayAmt()
  }
}

function upgrade5Clicked() {
  if (money >= upgrade5cost) {
    money = money - upgrade5cost
    autoClick = autoClick + 50
    upgrade5AM = upgrade5AM + 1
    upgrade5cost = upgrade5cost * 1.4
    upgrade5cost = parseInt(upgrade5cost)
    upgrade5.innerHTML = (formatter.format(upgrade5cost) + "$ Iron Hand " + formatter.format(upgrade5AM))
    moneyDisplayAmt()
  }
}


setInterval(function(){
  money = money + autoClick
  moneyDisplayAmt()
},1000);
  

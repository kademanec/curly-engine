
// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let Input = prompt("Enter the month:")
monthInput = Input.charAt(0).toUpperCase()+Input.slice(1);
console.log(monthInput)
let Autumn = ["September", "October", "November"] 
let Winter = ["December", "January", "February"]
let Spring = ["March", "April", "May"]
let Summer = ["June", "July", "August"]
function season(monthInput){
    if(Autumn.includes(monthInput)){
        alert("The season is Autumn")
    }
    else if(Winter.includes(monthInput)){
        alert("The season is Winter")
    }
    else if(Spring.includes(monthInput)){
        alert("The season is Spring")
    }
    else if(Summer.includes(monthInput)){
        alert("The season is Summer")
    }
}
season(monthInput)
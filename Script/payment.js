
let travel = JSON.parse(localStorage.getItem("travelData:"))

let ticket = JSON.parse(localStorage.getItem("ticket_data"))
let user = JSON.parse(localStorage.getItem("user_data"))
console.log(ticket, user)

let busname = document.createElement("p")
busname.innerText = ticket[0].bus_name
let bustype = document.createElement("p")
bustype.innerText = ticket[0].bustype
document.getElementById("one").append(busname, bustype)

let Depature = document.createElement("p")
Depature.innerText = "Depature"
let Depature1 = document.createElement("p")
Depature1.innerText = travel.onwardDate
let Depature2 = document.createElement("p")
Depature2.innerText = ticket[0].Depature
document.getElementById("left1").append(Depature, Depature1, Depature2)

let Seat = document.createElement("p")
Seat.innerText = "Seat"
let Seat1 = document.createElement("p")
Seat1.innerText = user[0].seats
document.getElementById("right1").append(Seat, Seat1)

let pick = document.createElement("p")
pick.innerText = "Boarding Point"
let pick1 = document.createElement("p")
pick1.innerText = travel.from
let pick2 = document.createElement("p")
pick2.innerText = ticket[0].pick
document.getElementById("left2").append(pick, pick1, pick2)

let drop = document.createElement("p")
drop.innerText = "Dropping Point"
let drop1 = document.createElement("p")
drop1.innerText = travel.to
let drop2 = document.createElement("p")
drop2.innerText = ticket[0].drop
document.getElementById("right2").append(drop, drop1, drop2)

let u1 = document.createElement("p")
u1.innerText = ticket[0].Passenger_name
let u2 = document.createElement("p")
u2.innerText = `(Age : ${ticket[0].Passenger_age})`
document.getElementById("four").append(u1, u2)


let price1 = document.getElementById("price1")
price1.innerText = `INR ${Number(user[0].price)}`


document.getElementById("offer").addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        let diss = document.getElementById("offer").value
        if (diss == "RED100") {
            let dis = document.getElementById("coupon_dis")
            dis.innerText = -100
            let price2 = document.getElementById("price2")
            price2.innerText = `INR ${Number(user[0].price - 100)}`
        }


    }
});

let coupon = Number(document.getElementById("coupon_dis").innerText)


let price2 = document.getElementById("price2")
price2.innerText = `INR ${Number(user[0].price - coupon)}`
let count = 1
function add_div() {
    
    if (count % 2 == 1) {
        let id_input = document.createElement("div")

        let input = document.createElement("input")
        input.placeholder = "Enter UPI ID"
        input.type = "email"
        input.setAttribute = "required"
        input.id = "paid1"

        let paidbtn = document.createElement("button")
        paidbtn.innerText = "PAY"
        paidbtn.id = "paid2"
        paidbtn.onclick = function(){
            showalert()
        }

        id_input.append(input)

        document.getElementById("upi").append(id_input, paidbtn)
        
    }else{
        window.location.reload()
    }
    count++

}
function showalert(){
   let x =  document.getElementById("paid1").value
    if(x!=""){
        alert(`Confirm Payment ${user[0].price} `)
    alert('Booking Confirm Succefully')
    window.location.href = "./index.html"
    }else{
        alert("Enter UPI FIrst")
    }
    
}




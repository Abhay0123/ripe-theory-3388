

const busdata = [
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 620 },
    { busname: "Vikas Travels Jaipur", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.2", price: 530 },
    { busname: "Rahi Travells", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.8", price: 980 },
    { busname: "Mahalaxmi Travels ISO", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.9", price: 450 },
    { busname: "RC Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 750 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 450 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 650 },
    { busname: "Vijay Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.6", price: 250 },
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Vijay Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "3.5", price: 950 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 980 },
    { busname: "Samreen Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 852 },
    { busname: "Samreen Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "2.5", price: 455 },
    { busname: "Mahalaxmi Travels ISO", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "06:00", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 852 },
    { busname: "Mahalaxmi Travels ISO", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 250 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "3.5", price: 456 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 660 },
    { busname: "Gulzar Tours and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Chanakya Travels Agency", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Gulzar Tours and Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 880 },
    { busname: "Chanakya Travels Agency", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 785 },
    { busname: "Gulzar Tours and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "3.5", price: 562 },
    { busname: "Chanakya Travels Agency", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 751 },
    { busname: "Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "06:00", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 542 },
    { busname: "Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 852 },
    { busname: "Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 452 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 777 },
    { busname: "Gulzar Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Gulzar Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 864 },
    { busname: "Nama Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "04:05", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Nama Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 752 },
    { busname: "Nama Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "05:30", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 896 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 896 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "05:30", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "06:00", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 754 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 554 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "05:30", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 455 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 245 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Vijay Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "04:05", pickup: "majnu ka teela", drop: "private bus stop", seats: 26, rating: "4.5", price: 856 },
    { busname: "Vijay Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "majnu ka teela", drop: "private bus stop", seats: 26, rating: "4.5", price: 754 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "majnu ka teela", drop: "private bus stop", seats: 26, rating: "4.5", price: 856 },
]


let travel = JSON.parse(localStorage.getItem("travelData:"))

let line = document.getElementById("fare")
line.innerText = travel.from +" To " + travel.to
showdata()
function showdata(from, to, date) {
    document.getElementById("all_bus_data").innerHTML = null
    busdata.forEach((el, i) => {
        let div1 = document.createElement("div")
        div1.className = "one"
        let div2 = document.createElement("div")
        div2.className = "two"
        let div3 = document.createElement("div")
        div3.className = "three"
        let div4 = document.createElement("div")
        div4.className = "four"
        let div5 = document.createElement("div")
        div5.className = "five"
        let div6 = document.createElement("div")
        div6.className = "six"

        let busname = document.createElement("p")
        busname.innerText = el.busname
        let bustype = el.bustype
        let arrival = document.createElement("p")
        arrival.innerText = el.arrival
        let Depature = document.createElement("p")
        Depature.innerText = el.Depature
        let pickup = el.pickup
        let drop = el.drop
        let rating = document.createElement("p")
        rating.innerText = el.rating
        let people = document.createElement("p")
        people.innerText = `Rated by : ${el.price - 127}`
        let price = el.price
        let pp = document.createElement("p")
        pp.innerText = `${el.seats} Seats available`
        let seats = pp



        let p = document.createElement("p")
        p.innerText = `Starts from INR 20% off ${price}`

        let p2 = document.createElement("p")
        p2.innerText = "@redDeal applied"

        let p3 = document.createElement("p")
        p3.innerText = "5Single"

        let view_seats = document.createElement("button")
        view_seats.style.backgroundColor = "#d84e55"
        view_seats.innerText = "VIEW SEATS"
        view_seats.onclick = function () {
            book(el, i)
        }

        let date = document.createElement("p")
        date.innerText = travel.onwardDate

        div1.append(busname, bustype)
        div2.append(Depature, pickup)
        div3.append(arrival, date, drop)
        div4.append(rating, people)
        div5.append(p, p2)
        div6.append(seats, view_seats)

        let main_div = document.createElement("div")
        main_div.className = "main_cards"
        main_div.append(div1, div2, div3, div4, div5, div6)


        document.getElementById("all_bus_data").append(main_div)

    })
}
function book(el, i) {

    if (event.target.innerText == "VIEW SEATS") {
        let div = document.createElement("div")
        div.id = "seven"

        // seatprice Selection
        let seatprice = document.createElement("div")
        seatprice.id = "seatprice_hover"
        let all = document.createElement("p")
        all.innerText = "ALL"
        let pr1 = document.createElement("p")
        pr1.innerText = el.price
        let pr2 = document.createElement("p")
        pr2.innerText = el.price + 225
        seatprice.append(all, pr1, pr2)


        // seat Selection

        let cont = document.createElement("div")
        cont.id = "seven_container"
        // left  column
        let left = document.createElement("div")
        left.id = "cont_left"
        let notice = document.createElement("p")
        notice.innerText = "Click on an Available seat to proceed with your transaction."

        // arrange seats

        let lower_deck = document.createElement("div")
        lower_deck.id = "lower_deck"
        let a = document.createElement("div")
        for (let i = 0; i < 10; i++) {
            let ppp = document.createElement("button")
            ppp.innerHTML = `<span class="material-symbols-outlined">living</span>`
            ppp.id = `S${i + 1}`
            ppp.value = "true"
            ppp.onclick = function () {
                seat_select(el)
            }
            a.append(ppp)
        }
        let b = document.createElement("div")
        for (let i = 10; i < 20; i++) {
            let ppp = document.createElement("button")
            ppp.innerHTML = `<span class="material-symbols-outlined">living</span>`
            ppp.id = `S${i + 1}`
            ppp.value = "true"
            ppp.onclick = function () {
                seat_select(el)
            }
            b.append(ppp)
        }

        let mid = document.createElement("div")
        mid.id = "mid"

        let c = document.createElement("div")
        for (let i = 20; i < 26; i++) {
            let ppp = document.createElement("button")
            ppp.innerHTML = `<span class="material-symbols-outlined" class="sleeper"> airline_seat_flat</span>`
            ppp.id = `SP${i + 1}`
            ppp.onclick = function () {
                seat_select(el)
            }
            ppp.value = "true"
            c.append(ppp)
        }

        let outer = document.createElement("div")
        outer.id = "outer"
        outer.append(a, b, mid, c)

        let driver = document.createElement("div")
        driver.id = "driver"
        driver.innerHTML = `<span class="material-symbols-outlined">
        block
        </span>`
        lower_deck.append(outer, driver)
        a.className = "seat_svg"
        b.className = "seat_svg"
        c.className = "sleeper_svg"



        left.append(notice, lower_deck)


        // right  column
        let right = document.createElement("div")
        right.id = "cont_right"
        let rp1 = document.createElement("h4")
        rp1.innerText = "SEAT LEGEND"
        let rp2 = document.createElement("div")
        let rp21 = document.createElement("input")
        let rp22 = document.createElement("p")
        rp22.innerText = "Available"
        let rp23 = document.createElement("input")
        let rp24 = document.createElement("p")
        rp24.innerText = "Unavailable"
        let rp3 = document.createElement("h4")
        rp2.append(rp21, rp22, rp23, rp24)
        rp3.innerText = "REDDEAL"
        let rp4 = document.createElement("p")
        rp4.innerText = "Get 13 % Extra OFF"
        let rp5 = document.createElement("p")
        rp5.innerText = "Terms and Conditions::"
        let rp6 = document.createElement("p")
        rp6.innerText = "Minimum ticket fare : INR 300"
        let rp7 = document.createElement("p")
        rp7.innerText = "Maximum discount limit : INR 50"
        right.append(rp1, rp2, rp3, rp4, rp5, rp6, rp7)

        cont.append(left, right)



        div.append(seatprice, cont)



        let y = event.target.parentNode.parentNode
        y.append(div)
        event.target.innerText = "HIDE SEATS"

    } else {
        window.location.reload()
        event.target.innerText = "VIEW SEATS"
    }
}
let seatarr = []
function seat_select(el) {
    let x = event.target.parentNode.value

    if (x == "true") {
        let seatno = event.target.parentNode.id
        seatarr.push(seatno)

        event.target.parentNode.value = "false"
        event.target.parentNode.style.backgroundColor = "grey"

    } else {
        let seatno = event.target.parentNode.id
        for (let i = 0; i < seatarr.length; i++) {
            if (seatarr[i] == seatno) {
                seatarr.splice(i, 1)
            }
        }
        event.target.parentNode.value = "true"
        event.target.parentNode.style.backgroundColor = "white"
    }
    if (seatarr.length > 0) {

        document.getElementById("cont_right").innerHTML = null
        let first = document.createElement("div")
        first.id = "first"

        let pick = document.createElement("p")
        pick.innerText = "BOARDING POINT"
        pick.onclick = function () {
            pickpoint(el)
        }
        let drop = document.createElement("p")
        drop.innerText = "DROPPING POINT"
        drop.onclick = function () {
            droppoint(el)
        }
        first.append(pick, drop)


        let second = document.createElement("div")
        second.id = "second"

        let Depature = document.createElement("p")
        Depature.innerText = el.Depature
        Depature.id = "time"
        let arrival = document.createElement("p")
        arrival.innerText = el.pickup
        arrival.id = "locationpoint"
        second.append(Depature, arrival)


        let third = document.createElement("div")
        third.id = "third"

        let statment = document.createElement("p")
        statment.innerText = "Amount( Taxes will be calculated during payment )"
        let net = document.createElement("p")
        net.innerText = `INR ${el.price * seatarr.length}`
        net.style.fontWeight = "bold"
        third.append(statment, net)

        let continu = document.createElement("div")
        continu.innerText = "CONTINUE"
        continu.id = "continue"
        continu.onclick = function () {
            process_continue(el, seatarr)
        }


        document.getElementById("cont_right").append(first, second, third, continu)
        document.getElementById("cont_right").style.fontSize = "13px"
        document.getElementById("cont_right").style.backgroundColor = "white"

    } else {
        // right  column
        document.getElementById("cont_right").innerHTML = null
        let rp1 = document.createElement("h4")
        rp1.innerText = "SEAT LEGEND"
        let rp2 = document.createElement("div")
        let rp21 = document.createElement("input")
        let rp22 = document.createElement("p")
        rp22.innerText = "Available"
        let rp23 = document.createElement("input")
        let rp24 = document.createElement("p")
        rp24.innerText = "Unavailable"
        let rp3 = document.createElement("h4")
        rp2.append(rp21, rp22, rp23, rp24)
        rp3.innerText = "REDDEAL"
        let rp4 = document.createElement("p")
        rp4.innerText = "Get 13 % Extra OFF"
        let rp5 = document.createElement("p")
        rp5.innerText = "Terms and Conditions::"
        let rp6 = document.createElement("p")
        rp6.innerText = "Minimum ticket fare : INR 300"
        let rp7 = document.createElement("p")
        rp7.innerText = "Maximum discount limit : INR 50"
        document.getElementById("cont_right").append(rp1, rp2, rp3, rp4, rp5, rp6, rp7)
        document.getElementById("cont_right").style.backgroundColor = "#eeeded"
    }
}


function droppoint(el) {
    document.getElementById("locationpoint").innerText = el.drop
    document.getElementById("time").innerText = el.arrival
}

function pickpoint(el) {
    document.getElementById("locationpoint").innerText = el.pickup
    document.getElementById("time").innerText = el.Depature
}
function process_continue(el, seatarr) {
    let payment = document.createElement("div")
    payment.id = "payment_page"
    

    let pay_side = document.createElement("div")
    pay_side.id = "pay_side"


    let pay_side2 = document.createElement("div")
    pay_side2.id = "pay_side2"
    // side one
    let one = document.createElement("div")
    one.id = "side_one"
    let close = document.createElement("div")
    close.id = "side_close"
    close.onclick = function(){
        closepopup()
    }
    close.innerHTML = `<span class="material-symbols-outlined">
    double_arrow
    </span>`
    let head = document.createElement("h2")
    head.id = "side_Head"
    head.innerText = `Passenger Details`
    one.append(close,head)


    let two = document.createElement("div")
    two.id = "side_two"

   for(let i=0;i<seatarr.length;i++){
    let seatcard = document.createElement("div")

    let Passenger = document.createElement("div")
    let p1 = document.createElement("p")
    p1.innerText = `Paseenger ${i+1}`
    let p2 = document.createElement("p")
    p2.innerText = `Seat ${seatarr[i]}`
    Passenger.append(p1,p2)

    let name = document.createElement("label")
    name.innerText = "Name"
    let namebox = document.createElement("input")
    namebox.placeholder = "Enter Name"
    namebox.setAttribute = "required"
    namebox.id = `name_box${i}`

    let box = document.createElement("div")
    let left = document.createElement("div")
    let gender = document.createElement("label")
    gender.innerText = "Gender"
    
    let radio = document.createElement("div")
    let check1 = document.createElement("input")
    check1.type = "radio"
    check1.name = "gender"
    let male = document.createElement("label")
    male.innerText = "Male"
    let check2 = document.createElement("input")
    check2.type = "radio"
    check2.name = "gender"
    let female = document.createElement("label")
    female.innerText = "Female"
    radio.append(check1,male,check2,female)
    left.append(gender,radio)
    let right = document.createElement("div")
    let age = document.createElement("label")
    age.innerText = "Age"
    let agebox = document.createElement("input")
    agebox.type = "number"
    agebox.placeholder = "Enter Age"
    agebox.id = `age_box${i}`
    right.append(age,agebox)
    box.append(left,right)
    seatcard.append(Passenger,name,namebox,box)
    // contact

    let contact = document.createElement("div")
    contact.id = "contact_msg"
    let logo = document.createElement("p")
    logo.innerHTML = `<span class="material-symbols-outlined">contact_mail</span>`
    let msg = document.createElement("p")
    msg.innerText = "Contact Details"
    contact.append(logo,msg)

    two.append(seatcard)

    
   }
   // contact

   let contact = document.createElement("div")
   contact.id = "contact_msg"

   let pcont = document.createElement("div")

   let logo = document.createElement("p")
   logo.innerHTML = `<span class="material-symbols-outlined">contact_mail</span>`
   let msg = document.createElement("p")
   msg.innerText = "Contact Details"
   pcont.append(logo,msg)

   let pcontact = document.createElement("p")
   pcontact.innerText = "Your ticket will be sent to these details"

   let emailid = document.createElement("label")
   emailid.innerText = "Email ID"
   let emailinput = document.createElement("input")
   emailinput.id = "passenger_email"
   emailinput.setAttribute = "required"
   emailinput.type  = "email"
   emailinput.placeholder = "Enter Email"
   let phone = document.createElement("label")
   phone.innerText = "Phone"
   let phoneinput = document.createElement("input")
   phoneinput.id = "passenger_phone"
   phoneinput.setAttribute = "required"
   phoneinput.type  = "phone"
   phoneinput.placeholder = "Enter Phone"

   contact.append(pcont,pcontact,emailid,emailinput,phone,phoneinput)



   two.append(contact)


    let three = document.createElement("div")
    three.id = "side_three"

    let term = document.createElement("p")
    term.innerText = "By clicking on proceed, I agree that I have read and understood the TnCs and the Privacy Policy"
    let proceed_box  = document.createElement("div")
    let amount = document.createElement("p")
    amount.innerText = `Total Amount :INR ${el.price*seatarr.length}`
    let pbtn  =document.createElement("button")
    pbtn.id = "proceed_btn"
    pbtn.innerText = "PROCEES TO PAY"
    pbtn.onclick = function(){
        getadata(seatarr,el)
    }
    proceed_box.append(amount,pbtn)
    three.append(term,proceed_box)


    pay_side2.append(one, two, three)



    payment.append(pay_side, pay_side2)


    document.querySelector("#payment").append(payment)
    document.getElementById("payment").style.display = "flex"
    document.getElementById("pay_side").style.opacity = "0.5"
    

}
function closepopup(){
    document.getElementById("payment").style.display = "none"
}

function getadata(seatarr,el){
    let ticket_arr = []
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }
    for(let i=0;i<seatarr.length;i++){
        let tt = getRandomInt(721785,99853562)
        let ticketobj = {
            Passenger_name : document.getElementById(`name_box${i}`).value,
            Passenger_age : document.getElementById(`age_box${i}`).value,
            bus_name : el.busname,
            bustype : el.bustype,
            Depature : el.Depature,
            arrival : el.arrival,
            date : "date",
            pick : el.pickup,
            drop : el.drop,
            price : el.price,
            ticke_number : `REDG${tt}HT`
        }
        ticket_arr.push(ticketobj)
    }
    localStorage.setItem("ticket_data",JSON.stringify(ticket_arr))
    let user_arr = []
    let user_obj = {
        email : document.getElementById("passenger_email").value,
        phone : document.getElementById("passenger_phone").value,
        seats : seatarr,
        price : el.price*seatarr.length
    }
    user_arr.push(user_obj)

    localStorage.setItem("user_data",JSON.stringify(user_arr))
    window.location.href = "./payment.html"
}

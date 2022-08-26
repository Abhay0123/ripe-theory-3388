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
showdata()
function showdata(from, to, date) {
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
        pp.innerText = `${el.price} Seats available`
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
        date.innerText = "27 Aug"

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
        let a = document.createElement("img")
        a.src = "./Images/seatlogo.png"
        lower_deck.append(a)


        left.append(notice,lower_deck)


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
        rp2.append(rp21,rp22,rp23,rp24)
        rp3.innerText = "REDDEAL"
        let rp4 = document.createElement("p")
        rp4.innerText = "Get 13 % Extra OFF"
        let rp5 = document.createElement("p")
        rp5.innerText = "Terms and Conditions::"
        let rp6 = document.createElement("p")
        rp6.innerText = "Minimum ticket fare : INR 300"
        let rp7 = document.createElement("p")
        rp7.innerText = "Maximum discount limit : INR 50"
        right.append(rp1,rp2,rp3,rp4,rp5,rp6,rp7)

        cont.append(left,right)



        div.append(seatprice,cont)



        let y = event.target.parentNode.parentNode
        y.append(div)
        console.log(y)
        event.target.innerText = "HIDE SEATS"

    } else {
        window.location.reload()
        event.target.innerText = "VIEW SEATS"
    }

}

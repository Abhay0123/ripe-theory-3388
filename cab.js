const busdata = [
    {
      busname: "Mahalaxmi Travels ISO",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "06:00",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.9",
      price: "₹ 450",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_aAITIWN8-9scQzLncwY5GRFds5btNPfHw&usqp=CAU",
    },
    {
      busname: "RC Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 750",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzsGurJUGIZR5RZ4gxAnWcTR8Xw2CNlGOxg&usqp=CAU",
    },
    {
      busname: "Goldline Super Deluxe",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "05:30",
      pickup: "Chandni Chowk",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 450",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6pSC2Fpzw8uKl0T6rpTVI4zgNjEHyo9isg&usqp=CAU",
    },
    {
      busname: "Goldline Super Deluxe",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "06:00",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 650",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDWkxSQCYIWGK-eHe46-upDgrm-M3RANFiQ&usqp=CAU",
    },
    {
      busname: "Vijay Tour and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "05:30",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.6",
      price: "₹ 250",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7rAY8kbZYx_xJ_TH1Be8EtEN011hEoYQnA&usqp=CAU",
    },
    {
      busname: "Zingbus",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Chandni Chowk",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEEBIlzeNRFnjqH240xIuNXMQjnTnl992MQ&usqp=CAU",
    },
    {
      busname: "Vijay Tour and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "05:30",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "3.5",
      price: "₹ 950",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXfXFiSgKLEctJmPKbQgZ74A4KvGtg3CfwQ&usqp=CAU",
    },
    {
      busname: "Deepak Transport Company",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "06:00",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 980",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdsmhICjoyBBoqp9DtkfQy70DD_-39nZMWQ&usqp=CAU",
    },
    {
      busname: "Zingbus",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 620",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdsmhICjoyBBoqp9DtkfQy70DD_-39nZMWQ&usqp=CAU",
    },
    {
      busname: "Vikas Travels Jaipur",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "05:30",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.2",
      price: "₹ 530",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkJMn85YbTv6kYXk5vXRjQ20Z0ph8WgtpyQ&usqp=CAU",
    },
    {
      busname: "Rahi Travells",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Chandni Chowk",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtKfyroCohGqIC5J9dU87DtLa0RU0xRXO_A&usqp=CAU",
    },
    {
      busname: "Shrinath Solitaire Premium Class",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "04:05",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.8",
      price: "₹ 980",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2duiewiuZ3Yz7_T-8U_yVd5jPEpaia9ZNgQ&usqp=CAU",
    },
    {
      busname: "Samreen Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "04:05",
      pickup: "Chandni Chowk",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 852",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQZkORl-j9ztjssxoz3Q2YsZPK-QgueoDtA&usqp=CAU",
    },
    {
      busname: "Samreen Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "2.5",
      price: "₹ 455",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_kqazUrjo_XPvVkbH2UWnu8qDAcM5znK2g&usqp=CAU",
    },
    {
      busname: "Mahalaxmi Travels ISO",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "06:00",
      pickup: "Chandni Chowk",
      drop: "private bus stop",
      seats: 26,
      rating: "4.9",
      price: "₹ 852",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVF6yJpgZLVD9JKZrLO1YZZ9Jto4NkN2TylQ&usqp=CAU",
    },
    {
      busname: "Mahalaxmi Travels ISO",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "05:30",
      pickup: "Karol Bagh",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 654",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwsYKWe7sM651fl0Wl6kxIwwtolziNRVgEA&usqp=CAU",
    },
    {
      busname: "Goldline Super Deluxe",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "06:00",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 250",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TyFYgKQaHP_cOPFW4vvkVQE-eRN6mCFDHA&usqp=CAU",
    },
    {
      busname: "Babu Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Karol Bagh",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSED5pjziPbYGVfgslNwrhYhiz_OoKwGb6GUg&usqp=CAU",
    },
    {
      busname: "Goldline Super Deluxe",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "05:30",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "3.5",
      price: "₹ 456",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYVoF1E1n6jEQsFcNAIHnDvNpAAFNIPor7A&usqp=CAU",
    },
    {
      busname: "Babu Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "04:05",
      pickup: "Karol Bagh",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 660",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdsmhICjoyBBoqp9DtkfQy70DD_-39nZMWQ&usqp=CAU",
    },
    {
      busname: "Gulzar Tours and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "06:00",
      pickup: "Karol Bagh",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HSCHdJTEdkrkHaxwnb4neCVHNLxQ4DkuUg&usqp=CAU",
    },
    {
      busname: "Chanakya Travels Agency",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "06:00",
      pickup: "Kashmiri Gate",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 654",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHZT-BLB0zZDYheXeH8FPW4AMHTBifdBpcw&usqp=CAU",
    },
    {
      busname: "Gulzar Tours and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "05:30",
      pickup: "Kashmiri Gate",
      drop: "private bus stop",
      seats: 26,
      rating: "4.9",
      price: "₹ 880",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaCWK-H1QRO-5Vvr54QVsil_kI9hdUybX3A&usqp=CAU",
    },
    {
      busname: "Chanakya Travels Agency",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "Kashmiri Gate",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹  785",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJksgzK_nZY6VZ_AO5b4SIFZ_wWQhOs2WUgw&usqp=CAU",
    },
    {
      busname: "Gulzar Tours and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "06:00",
      pickup: "Karol Bagh",
      drop: "private bus stop",
      seats: 26,
      rating: "3.5",
      price: "₹ 562",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-NpVCzNR818QFos9tf6LP9K1ISZTh3YILQ&usqp=CAU",
    },
    {
      busname: "Chanakya Travels Agency",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "05:30",
      pickup: "Kashmiri Gate",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIThD01oFa4BfSkxH3kwPodEMgLP3fkTaZA&usqp=CAU",
    },
    {
      busname: "Zingbus",
      bustype: "A/C Seater/Sleeper",
      Depature: "21:20",
      arrival: "04:05",
      pickup: "Kashmiri Gate",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 751",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMv88Qhq8O0f2vilSwxluxGqJ9CFuAaKD2g&usqp=CAU",
    },
    {
      busname: "Shakti Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "06:00",
      pickup: "Kashmiri Gate",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 542",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVVZWEX59RhOQ3io2yuFhwev8fHCYNv40mw&usqp=CAU",
    },
    {
      busname: "Shakti Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "05:30",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 852",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviKbHjhV8BmOnUXuwVCyA0vAGMY4VI04S0Q&usqp=CAU",
    },
    {
      busname: "Shakti Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "05:30",
      pickup: "Karol Bagh",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 452",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpspWYMzxibY2cEhg242bE6vGDE5hx7qCjg&usqp=CAU",
    },
    {
      busname: "Deepak Transport Company",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "04:05",
      pickup: "Dhaula kuan metro station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 777",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ6SMEbTJiUCuFa3vs3a1azOAP1dauCsGOQ&usqp=CAU",
    },
    {
      busname: "Gulzar Tour and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "06:00",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZNWWPJpbEdK1LLkjf9aBdL_32pmUDju0yQ&usqp=CAU",
    },
    {
      busname: "Gulzar Tour and Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "05:30",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 864",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdsmhICjoyBBoqp9DtkfQy70DD_-39nZMWQ&usqp=CAU",
    },
    {
      busname: "Nama Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "04:05",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIuWyMwuIGr5adaJGAOyHPeRjMpyXCQmzIQ&usqp=CAU",
    },
    {
      busname: "Nama Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "06:00",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 752",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVOQo4nIy_rah1KuNya7dZ9l78rCPBdCpFQ&usqp=CAU",
    },
    {
      busname: "Nama Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "05:30",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 654",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWQU6bdPLGjEX29ofb9dP1zgUweQrJq8bmQ&usqp=CAU",
    },
    {
      busname: "Shrinath Solitaire Premium Class",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWQU6bdPLGjEX29ofb9dP1zgUweQrJq8bmQ&usqp=CAU",
    },
    {
      busname: "Zingbus",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "05:30",
      pickup: "ISBT MATERO STATION GATE NO.2",
      drop: "private bus stop",
      seats: 26,
      rating: "4.9",
      price: "₹ 896",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloy6nyTzMqM_juzU1E_4y8Gb6XC8NVxpqRQ&usqp=CAU",
    },
    {
      busname: "Shrinath Solitaire Premium Class",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 896",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgKa10Mo-7inkgzWVQX7K2IRfJ_e6oQuowg&usqp=CAU",
    },
    {
      busname: "Shrinath Solitaire Premium Class",
      bustype: "A/C Seater/Sleeper",
      Depature: "05:30",
      arrival: "04:05",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 654",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoqB-Wd9q0zzuZcZZ0Iv0hdnOHXhUqaqaAg&usqp=CAU",
    },
    {
      busname: "Babu Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "06:00",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 754",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RXLVMfOAA5Ty-qEHsMyxWFE7EUQJypSRlg&usqp=CAU",
    },
    {
      busname: "Shrinath Solitaire Premium Class",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "04:05",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LF24BvV7G1WccduVJ6twf3uLcM4CDvhIHg&usqp=CAU",
    },
    {
      busname: "Deepak Transport Company",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "04:05",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.9",
      price: "₹ 554",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0RXNySG-lH-DOpjoR4FBoVaoB5pwVfalUQ&usqp=CAU",
    },
    {
      busname: "Babu Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "05:30",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 455",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC21KG0a1Ea3sE2GVKo37JCyMUREHq1UBRbQ&usqp=CAU",
    },
    {
      busname: "Babu Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "06:00",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 245",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NPGCEF31HL7hqJSgCU5Yae3TeSu2GR9owA&usqp=CAU",
    },
    {
      busname: "Babu Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "23:15",
      arrival: "06:00",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EJjXKDOJ7uRD5dkUKSgxBxOXakNG49KVPg&usqp=CAU",
    },
    {
      busname: "Deepak Transport Company",
      bustype: "A/C Seater/Sleeper",
      Depature: "22:20",
      arrival: "04:05",
      pickup: "New Delhi Railway Station",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 680",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdsmhICjoyBBoqp9DtkfQy70DD_-39nZMWQ&usqp=CAU",
    },
    {
      busname: "Vijay Shakti Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "04:05",
      pickup: "majnu ka teela",
      drop: "private bus stop",
      seats: 26,
      rating: "4.9",
      price: "₹ 856",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXpfG4vqiG5Te60TfExCc45NiXlRVjU5uZQ&usqp=CAU",
    },
    {
      busname: "Vijay Shakti Travels",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "05:30",
      pickup: "majnu ka teela",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 754",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdsmhICjoyBBoqp9DtkfQy70DD_-39nZMWQ&usqp=CAU",
    },
    {
      busname: "Deepak Transport Company",
      bustype: "A/C Seater/Sleeper",
      Depature: "20:45",
      arrival: "05:30",
      pickup: "majnu ka teela",
      drop: "private bus stop",
      seats: 26,
      rating: "4.5",
      price: "₹ 856",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWQU6bdPLGjEX29ofb9dP1zgUweQrJq8bmQ&usqp=CAU",
    },
  ];
  showdata(busdata);
  function showdata(busdata) {
    let container = document.getElementById("all_bus_data");
    container.innerHTML = null;
    busdata.forEach((el) => {
      let busname = document.createElement("h2");
      busname.innerText = el.busname;
      let bustype = el.bustype;
      let arrival = document.createElement("p");
      arrival.innerText = el.arrival;
      let Depature = document.createElement("p");
      Depature.innerText = el.Depature;
      let pickup = document.createElement("p");
      pickup.innerText = el.pickup;
      pickup.style.margin = "5px";
      let drop = el.drop;
      let rating = document.createElement("h3");
      rating.innerText = el.rating;
      rating.style.padding = "4px";
      rating.style.backgroundColor = "green";
      rating.style.color = "white";
      rating.style.width = "30px";
      rating.style.borderRadius = "4px";
      rating.style.marginBottom = "4px";
      rating.style.padding = "4px";
  
      let book = document.createElement("h3");
      book.innerText = "BOOK";
      book.style.color = "maroon";
      book.style.padding = "5px";
      book.style.fontStyle = "italic";
      book.style.cursor = "pointer";
      book.addEventListener("click", function () {
        window.location.href="./busdata.html";
      });
  
      let price = document.createElement("h3");
      price.innerText = el.price;
  
      let image = document.createElement("img");
      image.src = el.image;
      image.style.width = "80%";
  
      let main_div = document.createElement("div");
      main_div.className = "main_cards";
      main_div.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
      main_div.style.padding = "10px";
  
      main_div.append(busname, bustype, pickup, drop, image, rating, price, book);
  
      container.append(main_div);
    });
  }
  
  function filter_r() {
    data = busdata.filter((el) => {
      console.log(el);
      return el.rating === "4.9";
    });
  
    showdata(data);
  }
  
  function filter_lp() {
    data = busdata.filter((el) => {
      console.log(el);
      return el.price === "₹ 250";
    });
  
    showdata(data);
  }
  function filter_hp() {
    data = busdata.filter((el) => {
      console.log(el);
      return el.price === "₹ 980";
    });
  
    showdata(data);
  }
  
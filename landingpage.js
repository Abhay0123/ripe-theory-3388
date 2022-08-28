


function searchBtn() {
  let from = document.querySelector("#input-label-from").value;
   let to = document.querySelector("#input-label-to").value;
   let onwardDate = document.querySelector("#input-label-onward-date").value;
    

    // localStorage.setItem("from",from);
    // localStorage.setItem("to",to);
    // localStorage.setItem("onwardDate",onwardDate);
    let obj = {
      from: from,
      to:to,
      onwardDate:onwardDate,
    };
    localStorage.setItem("travelData:",JSON.stringify(obj));
    
   
}


function animate() {
  var reveals = document.querySelectorAll(".animate");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", animate);


function myfun(){
  window.location.href="signin.html";
}
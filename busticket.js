function search() {
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
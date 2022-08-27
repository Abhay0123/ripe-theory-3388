let faqClick = () => {
    var ele = document.getElementById("block4");
    ele && ele.scrollIntoView(true);
    window.scrollBy(0, -100)
}

let myFunction = (id) => {
    let wrap = document.getElementById("list_wrap");
    let elem = wrap.getElementsByTagName("div");
    for (let item of elem) {
        if (item.id == id) {
            item.style.background = "#3E3E52";
            item.style.color = "#FFFFFF";
            item.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
            item.style.borderRadius = "8px";
            let spanEle = item.getElementsByTagName('span')[0];
            spanEle.style.color = "#38B87C";
            spanEle.style.fontWeight = "700";
            let img = document.getElementById("screens");

            if (id == "1") {
                img.src = "https://st.redbus.in/Images/redrail/mob2_cont.png";
            } else if (id == "2") {
                img.src = "https://st.redbus.in/Images/redrail/select_train.png";
            } else if (id == "3") {
                img.src = "https://st.redbus.in/Images/redrail/irctc_un.png";
            } else if (id == "4") {
                img.src = "https://st.redbus.in/Images/redrail/make_pay.png"
            } else {
                img.src = "https://st.redbus.in/Images/redrail/irctc_pwd.png"
            }
            } else {
            if(item.id) {
                item.style.background = "#FFFFFF";
                item.style.color = "#3E3E52";
                item.style.boxShadow = "none";
                item.style.borderRadius = "8px";
                let spanEle = item.getElementsByTagName('span')[0];
                spanEle.style.color = "#3E3E52";
                spanEle.style.fontWeight = "700";
                item.style.border = "1px solid #7F7E8C";
            }      
        }
    }
}
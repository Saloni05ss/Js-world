const currTime = document.querySelector("h1");
const selectOption = document.querySelectorAll("select");
//for all 3 select
const setAlarmBt = document.querySelector("button");
const content = document.querySelector(".content");
let alarmTime;
let ringtone = new Audio("WhatsApp Audio 2024-06-06 at 11.24.45_798889e5.mp3");
let alarmSet = false;
for (let i = 12; i > 0; i--) {
    //console.log(i);
    //now i will be printed as 1 2 3 etc
    i = i < 10 ? "0" + i : i;
    //now i will be printed as 01 02 03 etc
    //console.log(i);
    let option = `<option value="${i}">${i}</option>`
    selectOption[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectOption[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
    let ap = i == 1 ? "AM" : "PM"
    let option = `<option value="${ap}">${ap}</option>`
    selectOption[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM"

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //console.log(`${h}:${m}:${s} ${ampm}`);
    currTime.innerText = `${h}:${m}:${s} ${ampm}`;
    if (alarmTime == `${h}:${m} ${ampm}`) {
        //console.log("Alarm");
        ringtone.play();
        ringtone.loop = true
    }
}, 1000);
function setAlarm() {
    if(alarmSet){
        alarmTime ="";
        ringtone.pause();
        content.classList.remove("disable")
        setAlarmBt.innerText = "Set Alarm";
        return alarmSet = false;
    }
    let time = `${selectOption[0].value}:${selectOption[1].value} ${selectOption[2].value}`


    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("please select valid time");
    }

    //console.log(time);
    content.classList.add("disable");
    setAlarmBt.innerText = "Clear Alarm";
    alarmTime = time;
    alarmSet = true;
    
}
setAlarmBt.addEventListener("click", setAlarm);

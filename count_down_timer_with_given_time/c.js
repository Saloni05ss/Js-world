const endDate= "20 August 2024 12:00 AM";
document.getElementById("text").innerText = endDate;
function clock() {
    end = new Date(endDate);
    now = new Date();
    console.log(end)
    console.log(now)
    const diff1 = end-now;
    console.log(diff1);
    //this is in milli second
    //convert it to second
    const diff2 = Math.floor(diff1/1000);
    const day = Math.floor(diff2/(24*60*60));
    const hour = Math.floor((diff2%(24*60*60))/(60*60));
    const min = Math.floor((diff2%(60*60))/60);
    const sec = Math.floor(diff2%60);
    // console.log(diff2);
    // console.log(day);
    // console.log(hour);
    // console.log(min);
    // console.log(sec);
    document.getElementById("day").value = day;
    document.getElementById("hour").value = hour;
    document.getElementById("min").value = min;
    document.getElementById("sec").value = sec;
}
//initial call
clock();

setInterval(
    clock, 1000
)
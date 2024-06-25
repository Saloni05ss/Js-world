
function clock() {
    const endDate = document.getElementById("date").value;
    const end = new Date(endDate);
    const now = new Date();
    //console.log(end);
    //console.log(now);
    const diff1 = end - now;
    console.log(diff1);
    if(diff1 < 0)
        return;
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
    document.getElementById("days").value = day;
    document.getElementById("hours").value = hour;
    document.getElementById("minutes").value = min;
    document.getElementById("seconds").value = sec;
}
//initial call
clock();

setInterval(
    clock, 1000
);
// let hour = document.querySelector("#h");
// let menit = document.querySelector("#m");
// let second = document.querySelector("#s");

let am_pm = "PM";

setInterval(() => {
    let date = new Date();
    let time = document.querySelector("p");
    let hour = date.getHours();
    let menit = date.getMinutes();
    let second = date.getSeconds();

    if (hour >= 12) {
        am_pm = "PM";
    } else {
        am_pm = "AM";
    }
    if (hour > 12) {
        hour = hour - 12;
        if (hour < 10) {
            hour = "0" + hour;
        }
    }
    if (menit < 10) {
        menit = "0" + menit;
    }
    if (second < 10) {
        second = "0" + second;
    }
    // console.log(second);

    time.innerHTML = hour + ":" + menit + ":" + second + ":" + am_pm;
});

// second...
setInterval(() => {
    let date = new Date();
    let time = document.querySelector("#pc");
    let hour = date.getHours();
    let menit = date.getMinutes();
    let second = date.getSeconds();

    if (hour >= 12) {
        am_pm = "PM";
    } else {
        am_pm = "AM";
    }
    if (hour > 12) {
        hour = hour - 12;
        if (hour < 10) {
            hour = "0" + hour;
        }
    }
    if (menit < 10) {
        menit = "0" + menit;
    }
    if (second < 10) {
        second = "0" + second;
    }
    // console.log(second);

    time.innerHTML = hour + ":" + menit + ":" + second + ":" + am_pm;
});
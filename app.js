function clock(){
    let hour_div=document.getElementById("hour")
    let minute_div=document.getElementById("minute")
    let second_div=document.getElementById("second")

    const fullDate=new Date();
    let hour=fullDate.getHours();
    let minute=fullDate.getMinutes();
    let second=fullDate.getSeconds();

    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }

    hour_div.innerHTML=hour;
    minute_div.innerHTML=` : ${minute}`;
    second_div.innerHTML=` : ${second}`;
}

setInterval(clock,100);

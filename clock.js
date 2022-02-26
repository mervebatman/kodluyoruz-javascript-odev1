
function userName() {
  let userName = prompt("Adınızı giriniz: ");

    if(userName != "") {
        document.querySelector("#myName").innerHTML = userName;
        window.onload();
    } else{
        alert("Kullanıcı adını girmeniz gerekiyor!");
        window.location.reload();
    }
}

function showTime() {
    var date = new Date();
    var hour = date.getHours(); //Saati getirir
    var minute = date.getMinutes(); //dakikayi getirir
    var second = date.getSeconds(); //saniyeyi getirir
    var day = date.getDay(); //haftanin gununu getirir

      switch(day) {
          case day == 0:
            day = "Pazar";
        break;

        case day = 1:
            day = "Pazartesi";
        break;

        case day = 2:
            day = "Salı";
        break;

        case day = 3:
            day = "Çarşamba";
        break;

        case day = 4:
            day = "Perşembe";
        break;

        case day = 5:
            day = "Cuma";
        break;

        case day = 6:
            day = "Cumartesi";
        break;
      }
    
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    var time = hour + ':' + minute + ':' + second + ' ' + day;

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`;

    setTimeout(showTime,1000);
}

showTime();
userName();
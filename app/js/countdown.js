function timerLeft() {
    setInterval(function () {
        var datedate = new Date();
        var hoursLeft = document.getElementById('hours');
        var minutesLeft = document.getElementById('minutes');
        var secondsLeft = document.getElementById('seconds');
        var dateNow = new Date().getTime();
        var year = datedate.getFullYear();
        var month = datedate.getMonth();
        var nextDate = datedate.getDate() + 1;
        var dateFinish = new Date(year, month, nextDate);
        var sec = Math.floor((dateFinish - dateNow) / 1000);
        if (sec <= 0) {
            sec += 86400;
        }
        var secToMinutes = sec % 3600;
        var hoursNumber = Math.floor(sec / 3600);
        var minutesNumber = Math.floor(secToMinutes / 60);
        var secondsNumber = secToMinutes % 60;
        
        if (secondsNumber < 10) {
            secondsNumber = '0' + secondsNumber;
        }
        if (minutesNumber < 10) {
            minutesNumber = '0' + minutesNumber;
        }
        if (hoursNumber < 10) {
            hoursNumber = '0' + hoursNumber;
        }

        

        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secondsLeft.innerHTML = secondsNumber;
        
    }, 1000)
}
function timerLeftTwo() {
    setInterval(function () {
        var datedate = new Date();
        var hoursLeft = document.getElementById('hourss');
        var minutesLeft = document.getElementById('minutess');
        var secondsLeft = document.getElementById('secondss');
        var dateNow = new Date().getTime();
        var year = datedate.getFullYear();
        var month = datedate.getMonth();
        var nextDate = datedate.getDate() + 1;
        var dateFinish = new Date(year, month, nextDate);
        var sec = Math.floor((dateFinish - dateNow) / 1000);
        if (sec <= 0) {
            sec += 86399;
        }
        var secToMinutes = sec % 3600;
        var hoursNumber = Math.floor(sec / 3600);
        var minutesNumber = Math.floor(secToMinutes / 60);
        var secondsNumber = secToMinutes % 60;
        
        if (secondsNumber < 10) {
            secondsNumber = '0' + secondsNumber;
        }
        if (minutesNumber < 10) {
            minutesNumber = '0' + minutesNumber;
        }
        if (hoursNumber < 10) {
            hoursNumber = '0' + hoursNumber;
        }

        

        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secondsLeft.innerHTML = secondsNumber;
        
    }, 1000)
}

timerLeft();
timerLeftTwo();
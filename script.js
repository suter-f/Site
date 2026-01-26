// final date
const finalDate = new Date('2026-10-22T22:17:00');

// func time remaining
function getTimeRemaining() {
    const now = new Date();
    const diff = finalDate - now;
    return {
        total: diff,
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
}

// update Timer
function updateTimer() {
    const t = getTimeRemaining();
    if (t.total <= 0) {
        document.getElementById('timer').textContent = '00 : 00 : 00 : 00';
        return;
    }
    document.getElementById('timer').textContent =
        `${t.days.toString().padStart(2, '0')} : ${t.hours.toString().padStart(2, '0')} : ${t.minutes.toString().padStart(2, '0')} : ${t.seconds.toString().padStart(2, '0')}`;
}

// check conditions
function checkHints() {
    const now = new Date();
    const diff = finalDate - now;
    const daysLeft = diff / (1000 * 60 * 60 * 24);

    // 9
    if (daysLeft <= 270 && daysLeft > 180) {
        document.getElementById('hint-1').style.opacity = '0.03';
    }
    // 6
    else if (daysLeft <= 180 && daysLeft > 90) {
        document.getElementById('hint-1').style.opacity = '0.5';
        document.getElementById('hint-2').style.opacity = '0.3';
    }
    // 3 
    else if (daysLeft <= 90 && daysLeft > 0) {
        document.getElementById('hint-1').style.opacity = '0.7';
        document.getElementById('hint-2').style.opacity = '0.5';
        document.getElementById('hint-3').style.opacity = '0.3';
    }
    // final = delete
    else if (daysLeft <= 0) {
        document.getElementById('hint-1').style.opacity = '0.7';
        document.getElementById('hint-2').style.opacity = '0.7';
        document.getElementById('hint-3').style.opacity = '0.7';
    }
}

// update timer and check hits
setInterval(() => {
    updateTimer();
    checkHints();
}, 1000);

// call
updateTimer();
checkHints();

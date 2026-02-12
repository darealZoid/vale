// Set the target date: February 14, 2026, 00:00:00 Philippines Time
// 'Asia/Manila' ensures correct time regardless of user location
const targetDate = new Date("Feb 14, 2026 00:00:00").toLocaleString("en-US", {
  timeZone: "Asia/Manila",
});
const countDownDate = new Date(targetDate).getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time in PH timezone
  const nowString = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Manila",
  });
  const now = new Date(nowString).getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "HAPPY VALENTINE'S DAY!";
  }
}, 1000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2) 
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2');
        } else {
            entry2.target.classList.remove('show2');
        }
    });
});

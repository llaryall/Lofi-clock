const time = document.getElementById("time");
const Spotify = document.getElementById("spotify");
const cntbtn = document.getElementById("pastop");
let isClockMode = true;
let isTimerRunning = false;
cntbtn.style.opacity = "0";

function TimeUpdate() {
  if (isClockMode) {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minut = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");

    const currentTime = `${hour}:${minut}:${second}`;
    time.innerText = currentTime;
  }
}
setInterval(TimeUpdate, 1000);

function spoti() {
  if (parseInt(Spotify.style.width) > 0) {
    Spotify.style.width = "0px";
    Spotify.style.transition = "width 1.5s ease";
  } else {
    Spotify.style.width = "320px";
  }
}

// ----------------------------------timer----------------------------
let timeStore;
let second = 0;
let pauserec = 0;

function StartTime() {
  if (!isTimerRunning) {
    timeStore = setInterval(sec, 1000);
    isTimerRunning = true;
  }
}

function pauseTime() {
  if (isTimerRunning) {
    clearInterval(timeStore);
    pauserec = second;
    isTimerRunning = false;
  }
}
function resumeTime() {
  if (!isTimerRunning || pauserec > 0) {
    // Set the current time to the paused time
    StartTime(); // Resume the timer
  }
}
function stop() {
  clearInterval(timeStore);
  second = 0;
  UpdateDis();
  isTimerRunning = false;
}

function sec() {
  second++;
  if (!isClockMode) {
    UpdateDis();
  }
}

function UpdateDis() {
  const hour = Math.floor(second / 3600)
    .toString()
    .padStart(2, "0");
  const minut = Math.floor(second / 60)
    .toString()
    .padStart(2, "0");
  const remainsec = Math.floor(second % 60)
    .toString()
    .padStart(2, "0");
  const timer = `${hour}:${minut}:${remainsec}`;
  time.innerText = timer;
}
function clockbtn() {
  if (!isClockMode) {
    // Stop the timer if running
    TimeUpdate();
    isClockMode = true;
    isTimerRunning = false; // Ensure the timer is not running
  }
  cntbtn.style.opacity = "0";
  cntbtn.style.transition = "opacity 0.3s ease";
}

function timerbtn() {
  if (isClockMode) {
    // Switch to timer mode
    isClockMode = false;
    UpdateDis();
  } else {
    // Switch to clock mode
    isClockMode = true;
    TimeUpdate();
  }

  cntbtn.style.opacity = "100";
  cntbtn.style.transition = "opacity 0.3s ease";
}
// ------------------------- Theme -------------------------------------

var day = true;
var videoSelect = document.getElementById("themesel");
var bgVideo = document.getElementById("bgvid");

function changeVideo(value) {
  if (day) {
    bgVideo.src = "imgs/" + value + "-day.mp4";
  } else {
    bgVideo.src = "imgs/" + value + "-night.mp4";
  }
  
}

function toggleDayNight() {
  day = !day;
  changeVideo(videoSelect.value);
}




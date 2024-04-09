const time = document.getElementById("time");
const Spotify = document.getElementById("spotify");
const cntbtn = document.getElementById("pastop");
spotibtn = document.getElementById("spotibtn");
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
  if (parseInt(Spotify.style.width) == 0) {
    Spotify.style.width = "320px";
    Spotify.style.transition = "width 1.5s ease";
  } else {
    Spotify.style.width = "0px";
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
    
    StartTime();
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
  const minut = Math.floor((second % 3600) / 60)
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
   
    TimeUpdate();
    isClockMode = true;
    isTimerRunning = false; 
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
var currentTheme;
var elements = {
  bgVideo: document.getElementById("bgvid"),
  togg: document.getElementById("toggle"),
  brushbtn: document.getElementById("themebtn"),
  rainbtn: document.getElementById("rainbtn"),
  sparklebtn: document.getElementById("sparklebtn"),
  firebtn: document.getElementById("firebtn"),
};
var currentTheme = "cozy-house-rainy";

var themes = {
  "lofi-coffee-shop": {
    day: {
      video: "./imgs/lofi-coffee-shop-day.mp4",
      toggDisplay: "none",
      brushbtnTop: "1%",
      firebtnright: "0%",
      rainbtnRight:"0%",
      sparklebtnRight: "0%",
      brushtransition:"top 1s ease"
    },
    night: {
      video: "./imgs/lofi-coffee-shop-day.mp4",
      toggDisplay: "none",
      brushbtnTop: "1%",
    },
  },
  "cozy-house-rainy": {
    day: {
      toggDisplay: "block",
      video: "./imgs/cozy-house-rainy-day.mp4",
      brushbtnTop: "10%",
      sparklebtnRight :"0px",
      firebtntransition:"right 1s ease",
      firebtnright: "8%",
    },
    night: {
      video: "./imgs/cozy-house-rainy-night.mp4",
    },
  },
  "japanese-style-room": {
    day: {
      toggDisplay: "block",
      video: "./imgs/japanese-style-room-day.mp4",
      brushbtnTop: "10%",
      sparklebtnRight: "0%",
      firebtnright: "0%",
      rainbtnRight:"0%",
      sparklebtntransition:"right 1s ease"

     
    },
    night: {
      video: "./imgs/japanese-style-room-night.mp4",
      sparklebtnRight: "4%",
      firebtnright: "0%",
      rainbtnRight:"0%",
      
      
    },
  },
  "himitsus-house": {
    day: {
      video: "./imgs/himitsus-house-day.mp4",
      toggDisplay: "block",
      brushbtnTop: "10%",
      sparklebtnRight: "0%",
      rainbtnRight :"0%",
      firebtnright: "0%",
      rainbtntransition:"right 1s ease"
    },
    night: {
      video: "./imgs/himitsus-house-night.mp4",
      rainbtnRight :"4%",
      sparklebtnRight: "8%",
      firebtnright: "0%",
    },
  },
};

function changeVideo(value) {
  currentTheme = value;
  var themeSettings =
    themes[value][day || !themes[value].night ? "day" : "night"];

  elements.bgVideo.src = themeSettings.video;
  elements.togg.style.display = themeSettings.toggDisplay || "block";
  elements.brushbtn.style.top = themeSettings.brushbtnTop || "10%";
  elements.firebtn.style.right = themeSettings.firebtnright || "12%";
  elements.rainbtn.style.right = themeSettings.rainbtnRight || "4%";
  elements.sparklebtn.style.right = themeSettings.sparklebtnRight || "8%";
  elements.rainbtn.style.display = themeSettings.rainbtnDisplay || "block";
  elements.firebtn.style.display = themeSettings.firebtnDisplay || "block";
  elements.sparklebtn.style.display = themeSettings.sparklebtnDisplay || "block";
  elements.brushbtn.style.transition = themeSettings.brushtransition || "top 1s ease"
  elements.firebtn.style.transition = themeSettings.firebtntransition || "right 1s ease"
  elements.sparklebtn.style.transition = themeSettings.sparklebtntransition || "right 1s ease"
  elements.rainbtn.style.transition = themeSettings.rainbtntransition || "right 1s ease"
  

}

function toggleDayNight() {
  day = !day;
  changeVideo(currentTheme);
}

document.getElementById("dropbtn").addEventListener("click", function () {
  document.getElementById("myDropdown").classList.toggle("show");
});

// --------------------Sounds-----------------------
const rainEffect = document.getElementById("rain");
const fireEffect = document.getElementById("fire");
const sparkleEff = document.getElementById("sparkle");

function Rain() {
  if (!rainEffect.paused) {
    rainEffect.pause();
    rainbtn.classList.toggle("onof");
  } else {
    rainEffect.play();
    rainbtn.classList.toggle("onof");
  }
}
function fire() {
  if (!fireEffect.paused) {
    fireEffect.pause();
    firebtn.classList.toggle("onof");
  } else {
    fireEffect.play();
    firebtn.classList.toggle("onof");
  }
}
function Sparkle() {
  if (!sparkleEff.paused) {
    sparkleEff.pause();
    elements.sparklebtn.classList.toggle("onof");
  } else {
    sparkleEff.play();
    elements.sparklebtn.classList.toggle("onof");
  }
}
// --------------------------todoList------------------------
todolist=document.getElementById("todolist")
function todo() {
 
  
    if (parseInt(todolist.style.width) == 0) {
      todolist.style.width = "320px";
      todolist.style.transition = "width 1.5s ease";
    } else {
      todolist.style.width = "0px";
    }
  }
  let list = JSON.parse(localStorage.getItem("tasks")) || [];
  const Add = document.getElementById("add");
  const TaskList = document.getElementById("tasklist");
  
  function add() {
    // Prompt the user for a task
    let value = prompt("Enter your task:");
  
    // Check if the user entered a task
    if (value !== null && value.trim() !== "") {
      // Add the task to the list
      list.push(value.trim());
  
      // Render the tasks
  
      renderTasks();
  
      // Save the tasks to local storage
      saveTasks();
    } else {
      // If the user did not enter a task, show an alert
      alert("Please enter your task.");
    }
  }
  function renderTasks() {
    TaskList.innerHTML = "";
    list.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.style.fontSize='30px'
      const del = document.createElement("button");
      del.style.border='2px solid black'
      del.style.marginLeft='20px'
      del.style.backgroundColor='red'
      del.style.padding='10px'
      del.style.width='80px'
      del.style.fontSize='20px'
      del.textContent='delete'
      del.addEventListener("click", () => {
        list.splice(index, 1);
        renderTasks()
        saveTasks()
      });
      
      // Save the updated tasks to local storage
     
      listItem.textContent = task;
      TaskList.appendChild(listItem);
      listItem.appendChild(del);
    });
  }
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(list));
  }
  renderTasks();
  
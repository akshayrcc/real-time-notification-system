const btn = document.getElementById("btn");

let clickCount = 0;
let lastClickTime = 0;

btn.addEventListener("click", (event) => {
  clickCount++;
  if (clickCount === 1) {
    lastClickTime = new Date().getTime();
  } else if (clickCount === 2) {
    if (new Date().getTime() - lastClickTime < 5000) {
      console.log('Two clicks in less than 5 seconds');
    }
    clickCount = 0;
  }
});
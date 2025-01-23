const title = "> Ali";
const speed = 120;
function matrixEffectTitle(text) {
  let displayedText = "";
  let i = 0;

  function loop() {
    if (i < text.length) {
      displayedText += text.charAt(i);
      document.title = displayedText;
      i++;
      setTimeout(loop, speed);
    } else {
      setTimeout(() => {
        displayedText = "";
        i = 0;
        loop();
      }, 1000);
    }
  }
  loop();
}
matrixEffectTitle(title);
console.log("==================================================================")
console.log(`_______  ___   _  ___   _______        ______   _______  __   __ 
|   _   ||   | | ||   | |  _    |      |      | |       ||  | |  |
|  |_|  ||   |_| ||   | | | |   |      |  _    ||    ___||  |_|  |
|       ||      _||   | | | |   |      | | |   ||   |___ |       |
|       ||     |_ |   | | |_|   | ___  | |_|   ||    ___||       |
|   _   ||    _  ||   | |       ||   | |       ||   |___  |     | 
|__| |__||___| |_||___| |_______||___| |______| |_______|  |___|  
`)
console.log("==================================================================")

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
		return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
		return false;
    }
});

document.addEventListener('contextmenu', event => event.preventDefault()); // Prevent right click
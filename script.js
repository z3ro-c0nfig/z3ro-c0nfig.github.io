const title = "> AK";
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
console.log(`=======================================================
 █████  ██   ██ ██  ██████     ██   ██ ██    ██ ███████ 
██   ██ ██  ██  ██ ██  ████     ██ ██   ██  ██     ███  
███████ █████   ██ ██ ██ ██      ███     ████     ███   
██   ██ ██  ██  ██ ████  ██     ██ ██     ██     ███    
██   ██ ██   ██ ██  ██████  ██ ██   ██    ██    ███████
=======================================================`)

document.onkeydown = function (e) {
    if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 83) // Ctrl+S
    ) {
        return false;
    }
};

document.addEventListener('contextmenu', event => event.preventDefault()); 
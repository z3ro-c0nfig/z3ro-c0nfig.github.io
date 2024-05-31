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

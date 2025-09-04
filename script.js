// Initialize counter at 0
let count = 0; //'let' allows this value to change (vs 'const' which doesn't)

// Get references to HTML elements
//document.getElementByID() finds elementd by their ID attribute
const counterDisplay = document.getElementById('counter');      // The <div> showing the number
const clickButton = document.getElementById('clickButton');     // The "Click Me" button
const resetButton = document.getElementById('resetButton');     // The "Reset" button

// Updates the number shown on screen
// Takes the curretn count value and displays it in the counter div
function updateDisplay() {
    counterDisplay.textContent = count;     // textContent changes the text inside an element
}

// Handles the main click button
// Increments counter by 1 and updates display
function handleClick() {
    count = count + 1;      // Add 1 to count
    updateDisplay();        // Show new number
}

// Handles the reset button
// Resets counter to 0 and updates display
function handleReset() {
    count = 0;              // Reset to 0
    updateDisplay();        // Show 0
}

// Connect buttons to their functions
// addEventListener('event', function) listens for user interactions
clickButton.addEventListener('click', handleClick);     // When clicked, run handleClick
resetButton.addEventListener('click', handleReset);     // When clicked, run handleReset




// Initialize counter at 0
let count = 0; //'let' allows this value to change (vs 'const' which doesn't)

// Get references to HTML elements
//document.getElementById() finds elements by their ID attribute
const counterDisplay = document.getElementById('counter');      // The <div> showing the number
const clickButton = document.getElementById('clickButton');     // The "Click Me" button
const resetButton = document.getElementById('resetButton');     // The "Reset" button
const milestone = document.getElementById('milestone');         // Milestone

// Milestone messages object - defines special messages at specific counts
// Keys are the count values, values are the messages to display
const milestones = {
    10: "10 clicks",
    25: "25 clicks", 
    50: "50 clicks",
    100: "100 clicks",
    250: "250 clicks",
    500: "500 clicks",
    1000: "1,000 clicks"
}

// Formats large numbers with commas for readability
// Example 1000 becomes "1,000"
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Updates the display with animation
function updateDisplay() {
    counterDisplay.textContent = formatNumber(count);
    
    // Add pop animation
    counterDisplay.classList.remove('pop');
    void counterDisplay.offsetWidth; // Force reflow
    counterDisplay.classList.add('pop');
    
    // Check for milestones
    if (milestones[count]) {
        milestone.textContent = milestones[count];
        milestone.classList.add('show');
        setTimeout(() => {
            milestone.classList.remove('show');
        }, 3000);
    }
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
    count = 0;
    milestone.classList.remove('show');
    updateDisplay();
}

// Keyboard support - spacebar clicks
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        handleClick();
    }
});

// Connect buttons to their functions
// addEventListener('event', function) listens for user interactions
clickButton.addEventListener('click', handleClick);     // When clicked, run handleClick
resetButton.addEventListener('click', handleReset);     // When clicked, run handleReset




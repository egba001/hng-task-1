// Function to display day and time
function displayDayAndTime () {

    const date = new Date();

    const currentDayElement = document.getElementById('currentDay');
    const utcTimeMillisecondsElement = document.getElementById('utc-time-milliseconds');

    // Array of day names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the day of the week as a number (0-6)
    const dayOfWeekNumber = date.getDay();

    // Get the day name based on the day of the week number
    const dayName = daysOfWeek[dayOfWeekNumber];

    const currentMilliseconds = date.getUTCMilliseconds();

    // Display the UTC time in milliseconds
    utcTimeMillisecondsElement.textContent = currentMilliseconds.toString();

    // Display the day name in the HTML element
    currentDayElement.textContent = dayName;
}

setInterval(displayDayAndTime, 10)
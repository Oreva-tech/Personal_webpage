document.addEventListener('DOMContentLoaded', function() {
    
    var currentDateElement = document.getElementById('currentDate');
    var currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = currentDate;

    
    var currentTimeUTCElement = document.getElementById('currentTimeUTC');
    var currentTimeUTC = new Date().toUTCString().split(' ')[4];
    currentTimeUTCElement.textContent = currentTimeUTC;

    
    var currentDayElement = document.getElementById('currentDay');
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDayIndex = new Date().getDay();
    var currentDay = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = currentDay;

    
    

    

});
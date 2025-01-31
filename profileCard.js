function updateTime() {
    var utcTime = document.getElementById('utcTime')    
    utcTime.innerText = new Date().toUTCString();
}
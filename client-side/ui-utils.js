/* --- utils for ui events --- */
function goToPage(pageName) {
    window.location.assign(pageName);
}

/* -------------- Once the page has loaded -------------- */
document.addEventListener('DOMContentLoaded', function () {
    var dataName = 'data';

    // Add event listeners
    var getSessBtn = document.getElementById('getSessInfo_btn');
    var saveSessBtn = document.getElementById('saveSessInfo_btn');
    var sendBtn = document.getElementById('send_btn');
    var outputDiv = document.getElementById('output_div');

    if (getSessBtn) {
        getSessBtn.addEventListener('click', function () {
            var data = getSessionData(dataName);
            outputDiv.innerHTML = data;
        });
    }
    if (saveSessBtn) {
        saveSessBtn.addEventListener('click', function () {
            var data = getSessionData(dataName);
            if (!data || isNaN(data)) {
                console.log('Setting ' + dataName + ' to: 0');
                data = 0;
            } else {
                // increment the data by 1 (for testing)
                data = parseInt(data) + 1;
            }
            // save the new data
            saveSessionData(dataName, data);
        });
    }
    if (sendBtn) {
        sendBtn.addEventListener('click', function () {
            sendText("session data: " + getSessionData(dataName));
        });
    }
});
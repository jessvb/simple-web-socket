/* --- utils for saving session information --- */
function saveSessionData(key, data) {
    console.log('saving data (' + key + '): ' + data);
    sessionStorage.setItem(key, data);
}

function getSessionData(key) {
    var data = sessionStorage.getItem(key);
    console.log('getting data (' + key + '): ' + data);
    if (!data) {
        console.log('There was no data previously stored. Returning null.');
        data = null;
    }
    return data;
}


/* -------------- Once the page has loaded -------------- */
document.addEventListener('DOMContentLoaded', function () {
    var dataName = 'data';

    // Add event listeners
    var getSessBtn = document.getElementById('getSessInfo_btn');
    var saveSessBtn = document.getElementById('saveSessInfo_btn');
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
});
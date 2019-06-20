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
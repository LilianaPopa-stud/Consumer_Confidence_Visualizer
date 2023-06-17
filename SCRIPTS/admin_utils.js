/*
* Functions that manage admin panel
* */


/**
 * Method retrieves admin input (json) and adds the corresponding CCI in database
 */
function admin_add_CCI() {
    let json = document.getElementsByName("add-CCI")[0].value;
    let data = json.split(",");

    let newCCI = {
        "location": data[0].trim(),
        "time": data[1].trim(),
        "value": parseFloat(data[2].trim())
    };
    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/add";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("CCI added successfully!");
        }
    };
    request.send(JSON.stringify(newCCI));
}
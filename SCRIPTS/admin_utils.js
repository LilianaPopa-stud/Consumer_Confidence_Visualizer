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
    let url = "https://test-coco-proj.onrender.com/api/add";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("CCI added successfully!");
        }
    };
    request.send(JSON.stringify(newCCI));
}

/**
 * Method retrieves admin input (json) and updates the corresponding CCI in database
 */
function admin_update_CCI() {
    let json = document.getElementsByName("update-CCI")[0].value;
    let data = json.split(",");

    let newCCI = {
        "location": data[0].trim(),
        "time": data[1].trim(),
        "value": parseFloat(data[2].trim())
    };
    let request = new XMLHttpRequest();
    let url = "https://test-coco-proj.onrender.com/api/update";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("CCI updated successfully!");
        }
    };
    request.send(JSON.stringify(newCCI));
}

/**
 * Method retrieves admin input (json) and deletes the corresponding CCI from database
 */
function admin_delete_CCI() {
    let json = document.getElementsByName("delete-CCI")[0].value;
    let data = json.split(",");

    let newCCI = {
        "location": data[0].trim(),
        "time": data[1].trim(),
        "value": parseFloat(data[2].trim())
    };
    let request = new XMLHttpRequest();
    let url = "https://test-coco-proj.onrender.com/api/delete";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("CCI deleted successfully!");
        }
    };
    console.log(typeof json);
    request.send(JSON.stringify(newCCI));
}
// Verificați autentificarea înainte de încărcarea paginii
window.onload = function() {
    checkAuthentication();
};
/**
 * Method takes the username and password provided by the user
 * and checks the validity by requesting the API
 * */

function sendCredentials(form){
    let username = form.username.value;
    let password = form.password.value;
    console.log(username, password);
    let object = {
        "username" : username,
        "password" : password
    };

    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/login";
    request.open("POST",url,true);
    request.setRequestHeader("Content-Type","application/json");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status ===200){
            alert(request.response);
            if(request.response === "Logged in successfully!") {
                //redirect
                sessionStorage.setItem('isLoggedIn', 'true');
                checkAuthentication();
            }else{
            }
        }
    };
    request.send(JSON.stringify(object));
}
// Verifică dacă utilizatorul este deja autentificat
function checkAuthentication() {
    let token = sessionStorage.getItem("isLoggedIn");
    if (token && window.location.href.indexOf("AdminPanel.html") === -1) {
        // User is already authenticated and not on the Admin Panel page
        window.location.replace("https://test-coco-proj.onrender.com/AdminPanel.html");
    }
}

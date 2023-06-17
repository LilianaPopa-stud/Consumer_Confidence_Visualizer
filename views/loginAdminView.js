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
               // window.location.replace("http://127.0.0.1:3000/AdminPanel.html");
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
    if (token) {
        // Utilizatorul este deja autentificat, redirecționează către pagina de Admin Panel
        window.location.replace("http://127.0.0.1:3000/AdminPanel.html");
    }
}

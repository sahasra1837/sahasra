function login() {
    player_1 = document.getElementById("player_1_name").value;
    player_2 = document.getElementById("player_2_name").value;

    localStorage.setItem("login_1" , player_1);
    localStorage.setItem("login_2" , player_2);
    
    window.location = "gamepage.html";
}

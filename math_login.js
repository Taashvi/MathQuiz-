function LogIn(){
    var player_1_name=document.getElementById("player1_name").value;
    var player_2_name=document.getElementById("player2_name").value;
    localStorage.setItem("Player One", player_1_name);
    localStorage.setItem("Player Two", player_2_name);
    window.location="quiz_page.html";
}
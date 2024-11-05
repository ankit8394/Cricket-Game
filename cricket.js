        
let pone=0;
let ptwo=0;
let game_value=0;

$(document).ready(function()
{
    var x = document.getElementById("audio");
    $(".game_logo").click(function(){
        x.play();
    })
});

function play_game()
{
    game_value=Math.floor((Math.random()+0)*7);
    
    document.getElementById("score_img").style.height="400px";
    document.getElementById("score_img").style.width="400px";
    if(game_value==0){
        document.getElementById("score_img").src="assets/zero.gif";
    }
    else if(game_value==1){
        document.getElementById("score_img").src="assets/one.gif";
        
    }
    else if(game_value==2){
        document.getElementById("score_img").src="assets/two.gif";
    }
    else if(game_value==3){
        document.getElementById("score_img").src="assets/three.gif";
    }
    else if(game_value==4){
        document.getElementById("score_img").src="assets/four.gif";
    }
    else if(game_value==5){
        document.getElementById("score_img").src="assets/five.gif";
    }
    else if(game_value==6){
        document.getElementById("score_img").src="assets/six.gif";
    }
}


function ccc()
{
    document.getElementById("hide-img").style.display="none";
    document.getElementById("entry").style.display="block";
}


$(document).ready(function() {
    var x = document.getElementById("audio");
    $(".game_logo").click(function() {
        x.play();
    });


    $("#play_one").click(function() {
        pone++;
        if (pone >= 7) {
            // Update scores in the scoreboard
            $("#final_p_one").html(eval($("#p_one").html()));
            $("#final_p_two").html(eval($("#p_two").html()));
            $("#scoreboard").show(); // Show the scoreboard
            $("#hit-the-ball").css("display", "none"); // Hide the hit-the-ball section
            $("#img").css("display", "none"); // Hide the image section
        } else {
            play_game();
            if (pone == 1) {
                $("#p_one").html($("#p_one").html() + game_value);
            } else {
                $("#p_one").html($("#p_one").html() + "+" + game_value);
            }
            $("#play_one").attr("disabled", "disabled");
            $("#play_two").removeAttr("disabled");
        }
    });

    $("#play_two").click(function() {
        ptwo++;
        if (ptwo >= 7) {
            // Update scores in the scoreboard
            $("#final_p_one").html(eval($("#p_one").html()));
            $("#final_p_two").html(eval($("#p_two").html()));
            $("#scoreboard").show(); // Show the scoreboard
            $("#hit-the-ball").css("display", "none"); // Hide the hit-the-ball section
            $("#img").css("display", "none"); // Hide the image section
        } else {
            play_game();
            if (ptwo == 1) {
                $("#p_two").html($("#p_two").html() + game_value);
            } else {
                $("#p_two").html($("#p_two").html() + "+" + game_value);
            }
            $("#play_two").attr("disabled", "disabled");
            $("#play_one").removeAttr("disabled");
        }
    });

    // Reset game functionality (optional)
    $("#reset_game").click(function() {
        location.reload(); // Reload the current page
    });
    
});


function next()
{
    let ap = document.getElementById("player_1_name").value;
    let ap2 = document.getElementById("player_2_name").value;
     
    // Check if player 1's name is empty
     if (ap === "") {
        showPopup("PLEASE ENTER PLAYER 1'S NAME");
        return; // Stop execution if player 1's name is empty
    } 
    // Check if player 2's name is empty
    else if (ap2 === "") {
        showPopup("PLEASE ENTER PLAYER 2'S NAME");
        return; // Stop execution if player 2's name is empty
    }
    // If both names are filled
    if (ap !== "" && ap2 !== "") { 
        document.getElementById("entry").style.display = "none"; // Hide the entry section
    document.getElementById("gp").style.display = "block"; // Show the game section
    }
   
};

// Function to show the popup with a custom message
function showPopup(message)
{
    document.getElementById("popup-message").textContent = message;
    document.getElementById("popup").style.display = "flex";
};

// Close popup when clicking "OK" button
document.getElementById("popup-close").addEventListener("click", function()
{
    document.getElementById("popup").style.display = "none";
});



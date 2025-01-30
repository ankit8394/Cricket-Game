        
let pone=0;
let ptwo=0;
let game_value=0;
let play_one_name=[];
let play_one_two=[];
let a=0;
let b=0;
let i=0;


$(document).ready(function()
{
    var x = document.getElementById("audio");
    $(".game_logo").click(function(){
        x.play();
    })
});


function ccc()
{
    document.getElementById("hide-img").style.display="none";
    document.getElementById("entry").style.display="block";
}

$(document).ready(function()
{
    function play_game()
    {
        game_value = Math.floor(Math.random() * 7);
        document.getElementById("score_img").style.height = "350px";
        document.getElementById("score_img").style.width = "350px";

        const images = [
            "assets/zero.gif", "assets/one.gif", "assets/two.gif",
            "assets/three.gif", "assets/four.gif", "assets/five.gif", "assets/six.gif"
        ];
        document.getElementById("score_img").src = images[game_value];
    }

    function calculateScore(scoreString)
    {
        return scoreString.split('+').reduce((sum, value) => sum + parseInt(value || 0, 10), 0);
    }

    $("#play_one").click(function()
    {
        pone++;
        if (pone >= 7) {
            const finalScoreOne = calculateScore($("#p_one").html());
            const finalScoreTwo = calculateScore($("#p_two").html());

            $("#final_p_one").html(finalScoreOne);
            $("#final_p_two").html(finalScoreTwo);

            if (finalScoreOne > finalScoreTwo) {
                $("#winner").html(play_one_name[i - 1] + " Wins!");
            } else if (finalScoreOne < finalScoreTwo) {
                $("#winner").html(play_one_two[i - 1] + " Wins!");
            } else {
                $("#winner").html("It's a Draw!");
            }            

            $("#scoreboard").show();
            $("#hit-the-ball").css("display", "none");
            $("#img").css("display", "none");
        } else {
            play_game();
            const currentScore = $("#p_one").html();
            $("#p_one").html(currentScore ? currentScore + "+" + game_value : game_value);
            $("#play_one").attr("disabled", true);
            $("#play_two").removeAttr("disabled");
        }
    });

    $("#play_two").click(function()
    {
        ptwo++;
        if (ptwo >= 7) {
            const finalScoreOne = calculateScore($("#p_one").html());
            const finalScoreTwo = calculateScore($("#p_two").html());

            $("#final_p_one").html(finalScoreOne);
            $("#final_p_two").html(finalScoreTwo);

            if (finalScoreOne > finalScoreTwo) {
                $("#winner").html(play_one_name[i - 1] + " Wins!");
            } else if (finalScoreOne < finalScoreTwo) {
                $("#winner").html(play_one_two[i - 1] + " Wins!");
            } else {
                $("#winner").html("It's a Draw!");
            }
            

            $("#scoreboard").show();
            $("#hit-the-ball").css("display", "none");
            $("#img").css("display", "none");
        } else {
            play_game();
            const currentScore = $("#p_two").html();
            $("#p_two").html(currentScore ? currentScore + "+" + game_value : game_value);
            $("#play_two").attr("disabled", true);
            $("#play_one").removeAttr("disabled");
        }
    });

    $("#reset_game").click(function()
    {
        location.reload();
    });
});




function next() 
{
    // Get the values inside the function
    const ap = document.getElementById("player_1_name").value.trim(); // Get Player 1's name
    const ap2 = document.getElementById("player_2_name").value.trim(); // Get Player 2's name

    // Check if player 1's name is empty
    if (ap === "") {
        showPopup("PLEASE ENTER PLAYER 1'S NAME");
        return; // Stop execution if player 1's name is empty
    }

    // Check if player 2's name is empty
    if (ap2 === "") {
        showPopup("PLEASE ENTER PLAYER 2'S NAME");
        return; // Stop execution if player 2's name is empty
    }

    // If both names are filled
    document.getElementById("entry").style.display = "none"; // Hide the entry section
    document.getElementById("gp").style.display = "block"; // Show the game section

    // Store the names
    play_one_name[i] = ap;
    play_one_two[i] = ap2;

    // Show the names in the scoreboard or elsewhere
    document.getElementById("name1").innerHTML = play_one_name[i];
    document.getElementById("name2").innerHTML = play_one_two[i];

    i++; // Increment index for the next round
}

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

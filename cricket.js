        
let pone=0;
let ptwo=0;
let game_value=0;
function play_game(){
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
function next(){
    document.getElementById("entry").style.display="none";
    document.getElementById("gp").style.display="block";
}
function ccc(){
    document.getElementById("hide-img").style.display="none";
    document.getElementById("entry").style.display="block";
}
$(document).ready(function(){
            var x = document.getElementById("audio");
            $(".game_logo").click(function(){
                x.play();
            });
        
            $("#play_one").click(function(){
                pone=pone+1;
                if(pone>=7){
                    alert("YOUR SCORE IS");
                    $("#p_one").html(eval($("#p_one").html()));
                    $("#p_two").html(eval($("#p_two").html()));
                }
                else {
                    play_game();
                    if(pone==1){
                        $("#p_one").html($("#p_one").html()+game_value);
                    }
                    else{
                        $("#p_one").html($("#p_one").html()+"+"+game_value);
                    }
                    $("#play_one").attr("disabled","disabled");
                    $("#play_two").removeAttr("disabled");
                }
                
            });
            $("#play_two").click(function(){
                ptwo=ptwo+1;
                if(ptwo>=7){
                    alert("Click here to see the result");
                    $("#p_one").html(eval($("#p_one").html()));
                    $("#p_two").html(eval($("#p_two").html()));
                }
                else {
                    play_game(); 
                    if(ptwo==1){
                        $("#p_two").html($("#p_two").html()+game_value);
                    }
                    else{
                        $("#p_two").html($("#p_two").html()+"+"+game_value);
                    }
                    $("#play_two").attr("disabled","disabled");
                    $("#play_one").removeAttr("disabled");
                }
            });
        });
        $("#strt-btn").click(function(){
            let ap=document.getElementById("player_1_name").value;
            if(ap==="")
            {
                confirm("PLEASE ENTER YOUR NAME");
                window.location.href = "file:///C:/Users/ankit/Desktop/PROJECTS/cricket.html";
                
            }
            else{}
        });
        $("#strt-btn").click(function(){
            let ap2=document.getElementById("player_2_name").value;
            if(ap2==="")
            {
                confirm("PLEASE ENTER YOUR NAME");
                window.location.href = "file:///C:/Users/ankit/Desktop/PROJECTS/cricket.html";
            }
            else{
                
            }
        });

$(document).ready(function(){
    var x = document.getElementById("audio");
    $(".game_logo").click(function(){
        x.play();
    })
});
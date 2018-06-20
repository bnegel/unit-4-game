

//assign variables for the 19-120 number (targetNum), the number (1-12) for each jewel, wins, losses, and the jewel number as it accrues

$(document).ready(function() {

        var numAccrue = 0;
        var targetNum = Math.floor(Math.random() * 101+19);
        var wins = 0;
        var losses = 0;

        //generate random targetNum
        //generate random numAccrue
        $("#targetNum").text(targetNum);
            console.log(targetNum)

        var aquaValue = Math.floor(Math.random()*11+1);
        var pinkValue = Math.floor(Math.random()*11+1);
        var greenValue = Math.floor(Math.random()*11+1);
        var purpleValue = Math.floor(Math.random()*11+1);
            console.log(aquaValue, " ", pinkValue, " ", greenValue, " ", purpleValue);

            $("#losses").text("Losses: " + losses);
            $("#wins").text("Wins: " + wins);
    

        function win() {
            alert("You won, smartypants.")
            wins ++;
            $("#wins").text("Wins: " + wins);
            console.log("you won");
            resetGame();
        }

        function lose() {
            alert("Dang. Nice try.")
            losses ++;
            $("#losses").text("Losses: " + losses);
            console.log("you lost");
            resetGame();
        }

        $("#btn-aqua").on ("click", function() {
            numAccrue = numAccrue + aquaValue;
            console.log(numAccrue);
            $("#adderBox").text(numAccrue); 
                if (numAccrue === targetNum){
                  win();
                }
                else if (numAccrue > targetNum){
                  lose();
                }   
          }) 
          
        $("#btn-pink").on ("click", function() {
            numAccrue = numAccrue + pinkValue;
            console.log(numAccrue);
            $("#adderBox").text(numAccrue); 
                if (numAccrue === targetNum){
                    win();
                }
                else if (numAccrue > targetNum){
                    lose();
                }   
          }) 

          
        $("#btn-green").on ("click", function() {
            numAccrue = numAccrue + greenValue;
            console.log(numAccrue);
            $("#adderBox").text(numAccrue); 
                if (numAccrue === targetNum){
                    win();
                }
                else if (numAccrue > targetNum){
                    lose();
                }   
          }) 

          $("#btn-purple").on ("click", function() {
            numAccrue = numAccrue + purpleValue;
            console.log(numAccrue);
            $("#adderBox").text(numAccrue); 
                if (numAccrue === targetNum){
                    win();
                }
                else if (numAccrue > targetNum){
                    lose();
                }   
          }) 

function resetGame () {
    numAccrue = 0;    
    $("#adderBox").text(numAccrue); 
    targetNum = Math.floor(Math.random()*101+19);
        $("#targetNum").text(targetNum);
            console.log(targetNum);
        aquaValue = Math.floor(Math.random()*11+1);
        pinkValue= Math.floor(Math.random()*11+1);
        greenValue = Math.floor(Math.random()*11+1);
        purpleValue = Math.floor(Math.random()*11+1);
        console.log(aquaValue, " ", pinkValue, " ", greenValue, " ", purpleValue);
        
        
    };



});

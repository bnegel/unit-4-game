
$(document).ready(function() {

    //assign variables for the 19-120 number (targetNum), the number (1-12) for each jewel, wins, losses, and the jewel number as it accrues

        var numAccrue = 0;
        var targetNum = Math.floor(Math.random() * 101+19);
        var wins = 0;
        var losses = 0;

        //generate random targetNum
        //generate random values for each jewel (I tried to do a foreach loop to write the jewel value assignments just once, but I made kind of a mess)
        $("#targetNum").text(targetNum);
            console.log(targetNum)

        var aquaValue = Math.floor(Math.random()*11+1);
        var pinkValue = Math.floor(Math.random()*11+1);
        var greenValue = Math.floor(Math.random()*11+1);
        var purpleValue = Math.floor(Math.random()*11+1);
            console.log(aquaValue, pinkValue, greenValue, purpleValue);

        //Document wins and losses
            $("#losses").text("Losses: " + losses);
            $("#wins").text("Wins: " + wins);
    
        //Finally figured out that when I want something complicated to happen, I should write it as its own function and then just call it. Duh.
        function win() {
            alert("You won, smartypants.");
            wins ++;
            $("#wins").text("Wins: " + wins);
            //See below re: repeating the "Wins" string
            console.log("you won");
            resetGame();
        }

        //Thing that ticks me off because I couldn't figure it out: numAccrue doesn't show the final matching or exceeding total (compared with targetNum)
        //That is, if targetNum is 22, and numAccrue is 20 and you click on the crystal=2, numAccrue stays at 20 even though the "You win" alert happens.
        //And then the reset seems to work okay.

        function lose() {
            alert("Dang. Nice try.");
            losses ++;
            $("#losses").text("Losses: " + losses);
            //Also, same problem as last week: recording a loss deletes (replaces?) the word "Losses," which is why I re-enter the "Losses" string here.
            console.log("you lost");
            resetGame();
        }
        //Again, spent a lot of time trying to write the code that compares targetNum and numAccrue just once, but it worked better when I did it inside each click.
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
            console.log(aquaValue, pinkValue, greenValue, purpleValue);
            
            
        };

});

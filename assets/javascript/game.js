$(document).ready(function() {

var score = 0;
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

var crystals = ["assets/images/purple.jpg", "assets/images/red.jpg", "assets/images/blue.jpg", "assets/images/yellow.jpg"]


$("#new-game").on("click", function(){

	newGame();

});

newCrys();


	function newCrys () {

		var numbers = [];

		while ( numbers.length < 4) {

			var randomNum = Math.floor(Math.random() * 12 ) + 1;
			
			var set = false;

			if(!set) {

				numbers[numbers.length] = randomNum;

			}

			for ( var i = 0; i < numbers.length; i++) {
				
				if (numbers[i] == randomNum) {
				
				set = true; break
				
				}

			}

		}

		console.log(numbers);

		for ( i = 0; i < numbers.length; i++ ) {

			var cryImg = $("<img>");
			cryImg.attr("data-num", numbers[i]);
			cryImg.attr("src", crystals[i]);
			cryImg.attr("alt", "crystal");
			cryImg.addClass("gem")
			$("#crystals").append(cryImg);

		}


	}

	function newGame() {

		$("#new-game").hide();

		score = 0;


		$("score").text(score);

		function randomIntFromInterval(min,max) {
	    
	    	return Math.floor(Math.random()*(max-min+1)+min);
		}

		var targetNum = randomIntFromInterval( 19, 120 );

		$("#target-num").html(targetNum);



		$(".gem").on("click", function() {

			$("#result").empty();

			score = score + parseInt($(this).data('num'));

		

		$("#score").text(score);

		if ( score === targetNum) {
			
			$("#result").text("You win!");
			wins++;
			console.log(wins);
			$("#wins").text(wins);
			$("#crystals").empty();
			$("#new-game").show();
			newCrys();
		
		} else if ( score > targetNum ) {

			$("#result").text("You lose!");
			losses++;
			console.log(losses);
			$("#losses").text(losses);
			$("#crystals").empty();
			$("#new-game").show();
			newCrys();

		}

		 

		});

	}

});



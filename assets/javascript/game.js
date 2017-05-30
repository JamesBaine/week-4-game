$(document).ready(function() {

// Indentation needed - communicates nesting within the above function
var score = 0;
var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

var crystals = ["assets/images/purple.jpg", "assets/images/red.jpg", "assets/images/blue.jpg", "assets/images/yellow.jpg"]


$("#new-game").on("click", function(){
        // Indentation is usually 2–4 spaces. Keep consistent formatting.
	newGame();

});	
// Moving newGame function up to this line helps those reading your code more easily understand whats happening.

newCrys();

// <--- Formatting: this is a global/top-level function so it should sit flush-left.
	function newCrys () {

		var numbers = [];
		
		// Nice use of while loop here to setup random #'s
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

		// You'll want to remove console.log's in production
		console.log(numbers);
		//Nice job setting up your img elements here programmatically rather than one by one. 
		for ( i = 0; i < numbers.length; i++ ) {

			// the jQuery attr supports passing an object of key/value pairs to it, like so
			// attr({
		        //   'data-num': numbers[i],
			//   src: crystals[i],
			//   alt: 'crystal'
			// })
			//
			// jQuery also supports chaining, so you could rewrite this as:
			// cryImg.attr({
			//   'data-num': numbers[i],
			//   src: crystals[i],
			//   alt: 'crystal'
		        // }).addClass('gem')
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



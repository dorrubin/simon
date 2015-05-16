var simon = function(){
	var $corner = $(".corner")
	var board = document.querySelector(".board");

	var play = function() {
		$("button").addClass("invisble");
		$("#timer").removeClass("invisble");
		var userOrder =[];
		var gameOrder = [];
		
		var sounds = function (color) {
				var a = new Audio("sounds/" + color + ".mp3");
				a.play();
		}

		var reset = function() {
			window.alert("Incorrect! You made it to round " + gameOrder.length + ". Play again?");
			location.reload();	
		};

		var decide = function (gameOrder, userOrder) {
			if(gameOrder.length != userOrder.length) {
				if(userOrder[userOrder.length-1] != gameOrder[userOrder.length-1]){
					reset();
					return false;
				}
				else {
					return false;
				}
			}
			for(var i = 0; i < userOrder.length; i++) {
				if (gameOrder[i] != userOrder[i]) {
					return false;
					reset();
				}
				else {
					console.log(i);
				}
			}
			userOrder = [];
			console.log(gameOrder);
			setTimeout(generateColor, 2000);

		};

		var display = function(){
			for(var j = 0; j < gameOrder.length; j++) {
				(function(n){
					window.setTimeout(function(){
						sounds(gameOrder[n]);
						$("#" + gameOrder[n]).addClass("highlight");
							setTimeout(function(){
								$($corner).removeClass("highlight");
							},500);
					}, n * 1000);
				})(j);
			}
		}

		var generateColor = function() {
			var color ="";
			var number = Math.random();
				if(number < 0.25) {
					color = red;
				}
				else if(number < 0.5) {
					color = orange
				}
				else if (number < 0.75) {
					color = green;
				}
				else {
					color = blue;
				}
			gameOrder.push(color.id);
			display();
			userOrder = [];
			$("#round").text("Round: " + gameOrder.length)
		};
		
		generateColor();
		
		$(".corner").on("click", function(){
			$(this).addClass("highlight");
			setTimeout(function(){
				$($corner).removeClass("highlight");
			},500);
			userOrder.push(($(this).context.id).toString());
				decide(gameOrder, userOrder);
		});
	
	};
	
	$("#start").on("click", play);


}();

var simon = function(){
	var $corner = $(".corner")

	var play = function() {
		$("button").addClass("invisble");
		var userOrder =[];
		var gameOrder = [];
		
		var decide = function (gameOrder, userOrder) {
			console.log(userOrder[userOrder.length-1]);
			console.log(gameOrder[gameOrder.length-1])
			if(gameOrder.length != userOrder.length) {
				if(userOrder[userOrder.length-1] != gameOrder[userOrder.length-1]){
					console.log("they are false");
					window.alert("you lose!");
					return false;
				}
				else {
					return false;
				}
			}
			for(var i = 0; i < userOrder.length; i++) {
				if (gameOrder[i] != userOrder[i]) {
					console.log("they are false");
					window.alert("you lose!");
					return false;
				}
				else {
					console.log(i);
				}
			}
			userOrder = [];
			setTimeout(generateColor, 2000);
		};

		var display = function(){
			for(var j = 0; j < gameOrder.length; j++) {
				console.log(gameOrder)
				console.log(j);
				(function(n){
					window.setTimeout(function(){
						console.log(j);
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
			console.log(gameOrder);
			console.log(gameOrder.length);
			display();
			userOrder = [];
			
		};
		
		generateColor();
		
		
		$(".corner").on("click", function(){
			$(this).addClass("highlight");
			setTimeout(function(){
				$($corner).removeClass("highlight");
			},500);
			userOrder.push(($(this).context.id).toString());
				console.log(userOrder);
				decide(gameOrder, userOrder);
		});
	
	};
	
	$("#start").on("click", play);


};

simon();
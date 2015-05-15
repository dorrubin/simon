var simon = function(){
	var $corner = $(".corner")
	

	var play = function() {
		$("button").addClass("invisble");
		var gameOrder = [];
		var userOrder =[];
		
		var decide = function (gameOrder, userOrder) {
			console.log(gameOrder.length);
			console.log(userOrder.length);
			if(gameOrder.length != userOrder.length) {
				return false;
			}
			for(var i = 0; i < userOrder.length; i++) {
				if(gameOrder.length > userOrder.length){
					return false;
				}
				if (gameOrder[i] != userOrder[i]) {
					console.log("they are false");
					window.alert("you lose!");
					return false;
				}
			}
			userOrder = [];
			setTimeout(generateColor, 2000);
			console.log(gameOrder.length);
			console.log(userOrder.length);
		};

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
			for(var j = 0; j<gameOrder.length; j++) {
				$("#" + gameOrder[j]).addClass("highlight");
					setTimeout(function(){
						$($corner).removeClass("highlight");
					},500);
			}
			console.log(gameOrder);
			userOrder = [];
			console.log(userOrder);
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
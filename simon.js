// var board = document.querySelector(".board")

var simon = function(){

	var play = function() {
		$("button").slideUp();
		var gameOrder = [];
		var userOrder = [];

		var decide = function() {
			while (userOrder.length === gameOrder.length) {
				for(var i = 0; userOrder.length; i++) {
					if (gameOrder[i] === userOrder[i]) {
						console.log("they are the same");
						generateColor();
						return true;
					}
					else {
						console.log("they are false");
						return false;
					}
				}
			}
		};

		var generateColor = function() {
			var color ="";
			var number = Math.random();
				if(number < 0.25) {
					color = red;
				}
				else if(number < 0.5) {
					color = yellow;
				}
				else if (number < 0.75) {
					color = green;
				}
				else {
					color = blue;
				}
			gameOrder.push(color.id);
			console.log(gameOrder);
		};
		
		generateColor();
		
		
		$(".corner").on("click", function(){
			$(this).addTemporaryClass("highlight", 250);
			userOrder.push(($(this).context.id).toString());
			decide();
		});
	
	};
	
	$("#start").on("click", play);


};

simon();



//JQuery Plug-In for addTemporaryClass
(function($){

    $.fn.extend({ 

        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);
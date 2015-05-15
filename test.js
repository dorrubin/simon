var letters = ["a", "b"];

var countdown = function() {
 for (var i = 0; i < letters.length; i++) {
 	console.log(letters);
 	console.log(i);
        (function(n){
            window.setTimeout(function(){
                console.log(letters[n])
            }, (n * 1000))
        })(i)
    }
 }

 countdown();
var letters = ["a", "b", "c"];

 for (var i = 0; i < letters.length; i++) {
        (function(n){
            window.setTimeout(function(){
                console.log(letters[n])
            }, (n * 1000))
        })(i)
    }
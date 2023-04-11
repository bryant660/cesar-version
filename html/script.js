window.onload = function() {
	var rectangle1 = document.getElementById("rectangle1");
    var rectangle2 = document.getElementById("rectangle2");
    var timer1, timer2;


    function eventRedirect(rectangle, redirectpage) {
		rectangle.style.backgroundColor = "red";
		return setTimeout(function() {
			window.location.href = redirectpage;
		}, 5000);
	}

    function cancelTimer(timer){
        if(timer){
            clearTimeout(timer);
            timer=null;
        }
    }

    function redirect(page) {
        setTimeout(function() {
          window.location.href = page;
        }, 5000);
      }
      

    rectangle1.addEventListener("mouseover", function(){
		timer2 = cancelTimer(timer2);
		timer1 = eventRedirect(rectangle1, "result1.html");
	});

	rectangle2.addEventListener("mouseover", function() {
		timer1 = cancelTimer(timer1);
		timer2 = eventRedirect(rectangle2, "result2.html");
	});

	rectangle1.addEventListener("mouseout", function() {
		cancelTimer(timer1);
		rectangle1.style.backgroundColor = "blue";
	});

	rectangle2.addEventListener("mouseout", function() {
		cancelTimer(timer2);
		rectangle2.style.backgroundColor = "blue";
	});
};
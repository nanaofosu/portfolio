$(document).ready(function(){
    //$("#hi-there").css('color','red');
    
    
//    $("#hi-there").addClass("hello");
    
    setTimeout(function() {
        $(".welcome").addClass("fade");
        $("#intro").css('font-size','70px');
    }, 2000);
    
    
    
    var j = 0;
	 var delay = 2000; //millisecond delay between cycles
	 function cycleThru(){
	         var jmax = $("ul#cyclelist li").length -1;
	         $("ul#cyclelist li:eq(" + j + ")")
	                 .animate({"opacity" : "1"} ,400)
	                 .animate({"opacity" : "1"}, delay)
	                 .animate({"opacity" : "0"}, 400, function(){
	                         (j == jmax) ? j=0 : j++;
	                         cycleThru();
	                 });
	         };

	 cycleThru();   
    
    
    
});

/*$(window).load(function() {
    setTimeout(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, 50000);
    }, 2500);
});*/
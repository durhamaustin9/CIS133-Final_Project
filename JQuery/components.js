$(document).ready(function() {

	$("#cpu_image").fadeIn(3000); 
	
	
	  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    var top = 80 - scroll;
    
    document.getElementById("mininav").style.top = top + "px";
    
      if(scroll >=30){
        document.getElementById("mininav").style.top = 50 + "px";
      }
     
  });
	
	
});
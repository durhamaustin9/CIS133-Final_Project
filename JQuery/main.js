$(document).ready(function() {
	
		
	
    var height = $(window).innerHeight();

    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        var height = 80 - scroll;
        var img = 60 - scroll;
        var paddingpages = 40 - scroll;
        
        
        
       
      
        
        document.getElementById("Navbar").style.height = height + "px";
      document.getElementById("Logo").style.backgroundSize = img + "px";
     document.getElementById("Logo").style.height = img + "px";
      document.getElementById("navbariteams").style.paddingTop = paddingpages + "px";
      
      
      if(scroll >= 30){
        //change 30 to min hieght the nav bar should be minus the start value of the navbar
        document.getElementById("Navbar").style.height = 50 + "px";
        document.getElementById("Logo").style.backgroundSize = 30 + "px";
       document.getElementById("Logo").style.height = 30 + "px";
       document.getElementById("navbariteams").style.paddingTop = 10 + "px";
        }
      
    });
  

  

  

   			

    


});
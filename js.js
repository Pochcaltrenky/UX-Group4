$(document).ready(function(){
    console.log('jq ok');

    //var minTekst = "Renew"
   // var minCss = ""
    
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
    //$("#panel").setAttribute("style", "display:block");
      $("#panel").html('Renew');
      $("#panel").css('{}');
      
  });
    
    $("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
    //$("#panel").setAttribute("style", "display:block");
      $("#panel1").html('Renew');
        $("#panel1").css('{}');
  });
    
     $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
    //$("#panel").setAttribute("style", "display:block");
      $("#panel2").html('Renew');
         $("#panel2").css('{}');
         
  });
    
     $("#flip3").click(function(){
    $("#panel3").slideToggle("slow");
    //$("#panel").setAttribute("style", "display:block");
      $("#panel3").html('Renew');
         $("#panel3").css('{}');
  });
    
      $("#flip4").click(function(){
    $("#panel4").slideToggle("slow");
    //$("#panel").setAttribute("style", "display:block");
      $("#panel4").html('Renew');
          $("#panel4").css('{}');
  });
// do not delete the next line !!!!    
});
    
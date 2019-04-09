
    
var heart = document.getElementById('heart');
var heart2 = document.getElementById('heart2');

heart.addEventListener('click', function() {
    heart.setAttribute("style", "display:none");
    heart2.setAttribute("style", "display:block");
});

heart2.addEventListener('click', function() {
    heart.setAttribute("style", "display:block");
    heart2.setAttribute("style", "display:none");
});

var heart3 = document.getElementById('heart3');
var heart4 = document.getElementById('heart4');

heart3.addEventListener('click', function() {
    heart3.setAttribute("style", "display:none");
    heart4.setAttribute("style", "display:block");
});

heart4.addEventListener('click', function() {
    heart3.setAttribute("style", "display:block");
    heart4.setAttribute("style", "display:none");
});

 var heart5 = document.getElementById('heart5');
 var heart6 = document.getElementById('heart6');

 heart5.addEventListener('click', function() {
     heart5.setAttribute("style", "display:none");
     heart6.setAttribute("style", "display:block");
 });

 heart6.addEventListener('click', function() {
     heart5.setAttribute("style", "display:block");
     heart6.setAttribute("style", "display:none");
 });
 var heart7 = document.getElementById('heart7');
 var heart8 = document.getElementById('heart8');

 heart7.addEventListener('click', function() {
     heart7.setAttribute("style", "display:none");
     heart8.setAttribute("style", "display:block");
 });

 heart8.addEventListener('click', function() {
     heart7.setAttribute("style", "display:block");
     heart8.setAttribute("style", "display:none");
 });
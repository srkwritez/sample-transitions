$(document).ready(function () {
    showFadeInOutMessage();
    showNextMessage();
    window.setInterval(function(){
        showFadeInOutMessage();
        },5000);
    window.setInterval(function(){
      showNextMessage();    
      }, 6000);
 
  });

  let counter=2;
  let fadeCounter=2
  function showFadeInOutMessage(){

    let elem1 = $(".option1 li").eq(fadeCounter);
    elem1.removeClass("hidden");  
    $(".option1 li:not(:eq("+fadeCounter+"))").addClass("hidden");   

    let elem2 = $(".option2 li").eq(fadeCounter);
    elem2.removeClass("hidden");
    elem2.addClass("fade-out")   
    $(".option2 li:not(:eq("+fadeCounter+"))").addClass("hidden"); 
    
    let elem3 = $(".option3 li").eq(counter);
    elem3.removeClass("hidden");
    elem3.addClass("fade-in")   
    $(".option3 li:not(:eq("+counter+"))").addClass("hidden"); 

    fadeCounter = fadeCounter-1;
    if(fadeCounter==-1){
        fadeCounter =2;
    }        
}

function showNextMessage(){

    let elem4 = $(".option4 li").eq(counter);
    elem4.removeClass("hidden");
    $(".option4 li:not(:eq("+counter+"))").addClass("hidden"); 

    let elem5 = $(".option5 li").eq(counter);
    elem5.removeClass("hidden");
    $(".option5 li:not(:eq("+counter+"))").addClass("hidden"); 
    
    counter = counter-1;
    if(counter==-1){
        counter =2;
    }        
}


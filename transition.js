$(document).ready(function () {
    showNextMessage();
    window.setInterval(function(){
      showNextMessage();
      }, 15000);
  });


function showNextMessage(){

    let elem1 = $(".option1 li").eq(counter);
    elem1.removeClass("hidden");  
    $(".option1 li:not(:eq("+counter+"))").addClass("hidden");   

    let elem2 = $(".option2 li").eq(counter);
    elem2.removeClass("hidden");
    elem2.addClass("fade-out")   
    $(".option2 li:not(:eq("+counter+"))").addClass("hidden"); 

    let elem3 = $(".option3 li").eq(counter);
    elem3.removeClass("hidden");
    elem3.addClass("fade-in")   
    $(".option3 li:not(:eq("+counter+"))").addClass("hidden"); 

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
let counter=2;
$(document).click(function (e) { 
    
});
var time= setInterval(function(){
    var a= document.getElementsByClassName('buy-now J_flashBuyBtn')[8].innerHTML;
    if(a == "Buy now")
    { document.getElementsByClassName('buy-now J_flashBuyBtn')[8].click()
    clearInterval(time); }
    else { console.log("Script Activated"); }
    },10);
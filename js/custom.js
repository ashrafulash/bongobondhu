
/*=====================================
            Event Handler
====================================== */

(function(){
  //toggle  event

  function toggleEvent(btn, tar) { 

   btn.click(function(){

        var title = tar;

  if($(title).css('opacity') == 0){
       
   title.css({
       'opacity':1,
   })
    

  }
  else if($(title).css('opacity') == 1){
   title.css({
       'opacity':0,
   })
  }

})
}

//toggle logo title
toggleEvent($("#home_logo"), $(".logo_title"))

//toggle menu list
toggleEvent($("#menu_btn"), $(".menu_list"))

   

})()
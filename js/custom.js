$(document).ready(function() { 


/*=====================================
        Home Page Animatio
====================================== */
(function(){ 
  $(".banner_img").animate({
    'opacity':1,
 }, 2000,
  function(){
 
   $(".home_line").animate({
     'opacity':1,
   }, 
   function () { 
     $(".banner_left_link").animate({
      'opacity':1,
     }, 
       function(){
         $(".banner_right_link").animate({
           'opacity':1,
           'right':0,
           'top':'45%',
          }, 
            function () {
                 $(".banner_main_text").animate({
                   'opacity':1,
                 })
             }
          )
 
       }
     );
 })
 
 })
 
 
 

 })();


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

   

})();







 })
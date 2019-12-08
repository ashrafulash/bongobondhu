
/*=====================================
        Home Page Animatio
====================================== */
(function(){ 
  $(".banner_img").animate({
    'opacity':1,
 }, 1000,
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
        Design solution
====================================== */
(function () { 
   
  var pele = $(".offTop")

  if(pele.length){
    var off = pele.offset().top

    $(".after_war_content").css({
       'padding-top':off - 40,
    })
  }

 })();

 
/*=====================================
        after-war page animation
====================================== */
(function(){ 
  
     setTimeout(function(){

      $(".image_layer_2").css({
        'background':'#969696',
      })

      $(".image_layer_3").css({
        'background':'#C6C6C6',
      })

     },1000)

    $(".bongobondhu").animate({

      'opacity':0,

    },1500, function () {
         

         
         var wid = $(window).height();

         $("#menu_btn").css({
           'background':'transparent',
           'border-color':'#fff',
         });

         $(".image_layer_1").animate({
            'width': wid + 200,
            'height':wid + 200,
         },1000)

         $(".image_layer_2").animate({
          'width': wid + 220,
          'height':wid + 180,
         },1000)

         $(".image_layer_3").animate({
          'width': wid + 250,
          'height':wid + 160,
         },1000)

         $(".afterwar_round_image").animate({
           'right': '15%',
           'transform':'translate(0, -50%)'
         },1000, function () {
              
          $(".after_war_content").animate({
            'opacity':1,
          })

          $(".right_content").animate({
            'opacity':1,
          }, function(){

            $(".left_content_bottom").animate({
              'opacity':1,
            })

          })

           })

      });




     

 })();

/*=====================================
      history Page animation
====================================== */
(function(){
   
  var dh = $(window).height();

  $(".timeLine-1").animate({
    'opacity':1,

  }, 1000,function(){

    $(".history_main_image").animate({
      'width': dh + 320,
      'height': dh + 320,
      'right': '20%',
   }, 800, function(){
      
    $(".history_content").animate({
      'opacity':1,
    })

   })

  })








})();


/*=====================================
      know Page animation
====================================== */
(function(){
   
  var dh = $(window).height();

  $(".timeLine-11").animate({
    'opacity':1,

  }, 1000,function(){

    $(".know_main_image").animate({
      'width': dh + 320,
      'height': dh + 320,
      'left': '20%',
   }, 800, function(){
      
    $(".know_content").animate({
      'opacity':1,
    })

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
toggleEvent($("#menu_btn"), $(".right_content"))
toggleEvent($("#menu_btn"), $(".know_content"))

   

})();




$(document).ready(function() {

/* Add Jquery code for Contact me form here */
$("#formButton").click(function(){
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();
  var human = $("#human").val();
  //check to see if the visitor entered a name
   if(name === ""){
     alert("Please enter a name.");
     return false;
   }
   //check to see if the visitor entered a email in
   if(email === "")
   {
     alert("Please enter in a email.");
     return false;
   }
   //check to see if the visitor entered in a valid email
   else {
     var regex = /@/;
     if(!regex.test(email)) {
       alert("Please enter in a valid email.");
       return false;
     }
   }
   if(message === "")
   {
     alert("Please enter in a message.");
     return false;

   }
   if(human === "")
   {
     alert("Please answer the question.");
     return false;
   }
   else if (Number(human) != 19 && Number(human) != 21)
   {
     alert("You got the answer wrong." + human);
     return false;
   }

   var values = $("#contactForm").serialize();
   alert(values);
   var url1 = "email.php";
   $.ajax({
     url: url1,
     type: "POST",
     //data: { name: name, email: email, message: message },
     data: values,
     //datatype: "json",
     success: function(data){
       alert("Thank you! The email sent successfully!");
       alert(data);
     },
       error: function(XMLHttpRequest, textStatus, errorThrown){
       alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
   }
       //alert(data);

     //}

   });

});

$(".menuBars").click(function(){

   $(".titleMenu").slideToggle(700, "swing");
   $(".titleMenu").css({"position":"fixed"
   });
   /*$(".titleMenu").css({"background-color":"#A40505"});*/ /*put it on hover instead */

});





$(window).scroll(function(){
/*use $(window).height() and $(window).width() to figure out where you are on the screen */
  var wScroll = $(this).scrollTop();

  $('.theTitle').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
  if (document.documentElement.clientWidth > 768) { /*doesn't do animations if it is on mobile */
  $('.subtext').css({
    'transform' : 'translate(0px, '+ wScroll /3 +'%)'
  });
}
else {
  $('.subtext').css({
    'transform' : 'translate(0px, '+ wScroll /5 +'%)'
  });
}

  if (document.documentElement.clientWidth > 768) { /*doesn't do animations if it is on mobile */
	// scripts



  if(wScroll > $('.communicationScreen').offset().top - $(window).height()){


    var offset1 = Math.min(0, wScroll - $('.communicationScreen').offset().top +$(window).height() - 500);

    /*console.log(offset1);*/
    $('.communicationTitle').css({'transform': 'translate(0px,'+ offset1 +'px)'});
    $('.communicationText').css({'transform': 'translate('+ offset1 +'px, 0px)'});
    $('.communicationPic').css({'transform': 'translate('+ Math.abs(offset1) +'px, 0px)'});

    //$('.communicationButton').css({'opacity': ''+ offset2 + 1+''});
    var opacity = (wScroll - $('.communicationScreen').offset().top + $(window).height() -654) / (wScroll / 8);
    $('.communicationButton').css({'opacity': opacity});

  }
}/*checking for size ends */

  if(wScroll > $('.peopleScreen').offset().top - $(window).height()){

    var offset4 = Math.min(0, wScroll - $('.peopleScreen').offset().top +$(window).height() - 500);

    /*console.log(offset4);*/
    offset4 += offset4 + 2;
    if (document.documentElement.clientWidth > 768) { /*doesn't do animations if it is on mobile */

    $('.people').css({
      '-webkit-transform':'rotate(20deg)',
      '-moz-transform':'rotate(20deg)',
      '-o-transform':'rotate(20deg)',
      'transform': 'translate(0px,'+ offset4 +'px) rotate(20deg)'
    });

    $('.skills').css({
      '-webkit-transform':'rotate(-20deg)',
      '-moz-transform':'rotate(-20deg)',
      '-o-transform':'rotate(-20deg)',
      'transform': 'translate(0px,'+ offset4 +'px) rotate(-20deg)'
    });

    $('.triangle').css({'transform': 'translate(0px,'+ offset4 +'px)'});
    $('.leftperson').css({'transform': 'translate('+ offset4 +'px, 0px)'});
    $('.rightperson').css({'transform':'translate('+ offset4 * -1 +'px, 0px)'});
  }
  else {
    $('.people').css({
      'transform': 'translate(0px,'+ offset4 +'px)'
    });

    $('.skills').css({
      'transform': 'translate(0px,'+ offset4 +'px)'
    });


    $('.triangle').css({'transform': 'translate(0px,'+ offset4 +'px)'});
  }

  }


  if(wScroll > $('.timeScreen').offset().top - $(window).height()){

    var offset7 = Math.min(0, wScroll - $('.timeScreen').offset().top +$(window).height() - 500);

    /*console.log(offset7);*/
    var opacity1 = (wScroll - $('.timeScreen').offset().top + $(window).height() -500) / (wScroll / 11); /*the bigger the number wScroll is divided by, the faster it fades in */
    $('.timeTitle').css({'opacity': opacity1});



    $('.timeText').css({'transform': 'translate('+ offset7 +'px, 0px)'});



  }

  if(wScroll > $('.contactScreen').offset().top - $(window).height()){

    var offset11 = Math.min(0, wScroll - $('.contactScreen').offset().top +$(window).height() -654);
    var opacity2 = (wScroll - $('.contactScreen').offset().top + $(window).height() -500) / (wScroll / 13); /*the bigger the number wScroll is divided by, the faster it fades in */
    var opacity3 = (wScroll - $('.contactScreen').offset().top + $(window).height() -500) / (wScroll / 12);
    $('.contactTitle').css({'opacity': opacity2});
    $('.contactTitle').css({'transform': 'translate(0px, -'+offset11 - 750 +'px)'});
    $('.contactPic').css({'opacity': opacity2});
    $('.contactPic').css({'transform': 'translate(0px, -'+offset11 +50 +'px)'});
    $('.contactButton').css({'opacity':opacity3});
    $('.contactButton').css({'transform': 'translate(0px, -'+offset11 - 1000 +'px)'});




  }


});

});

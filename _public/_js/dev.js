// NAV

$(document).ready(function(){
  $("#default").click(function(){
    $("#navigation").addClass("head-default").removeClass("head-home head-collapsed head-tablet head-mobile head-mobile-xs");
  });
  $("#home").click(function(){
    $("#navigation").addClass("head-home").removeClass("head-default head-collapsed head-tablet head-mobile head-mobile-xs");
  });
  $("#collapsed").click(function(){
    $("#navigation").addClass("head-collapsed").removeClass("head-default head-home head-tablet head-mobile head-mobile-xs");
  });
  $("#tablet").click(function(){
    $("#navigation").addClass("head-tablet").removeClass("head-default head-home head-collapsed head-mobile head-mobile-xs");
  });
  $("#mobile").click(function(){
    $("#navigation").addClass("head-mobile").removeClass("head-default head-home head-collapsed head-tablet head-mobile-xs");
  });
  $("#mobile-xs").click(function(){
    $("#navigation").addClass("head-mobile-xs").removeClass("head-default head-home head-collapsed head-tablet head-mobile");
  });
});

// HERO

$(document).ready(function(){
  $("#hero-a").click(function(){
    $("#hero").addClass("hero-a").removeClass("hero-b hero-c hero-d hero-e hero-f");
  });
  $("#hero-b").click(function(){
    $("#hero").addClass("hero-b").removeClass("hero-a hero-c hero-d hero-e hero-f");
  });
  $("#hero-c").click(function(){
    $("#hero").addClass("hero-c").removeClass("hero-a hero-b hero-d hero-e hero-f");
  });
  $("#hero-d").click(function(){
    $("#hero").addClass("hero-d").removeClass("hero-a hero-b hero-c hero-e hero-f");
  });
  $("#hero-e").click(function(){
    $("#hero").addClass("hero-e").removeClass("hero-a hero-b hero-c hero-d hero-f");
  });
  $("#hero-f").click(function(){
    $("#hero").addClass("hero-f").removeClass("hero-a hero-b hero-c hero-d hero-e");
  });
});

// BASIC BLOCK

$(document).ready(function(){
  $("#basic-blue").click(function(){
    $("#basic").addClass("basic-blue").removeClass("basic-suds_1 basic-suds_2 basic-white basic-black basic-grey");
  });
  $("#basic-suds_1").click(function(){
    $("#basic").addClass("basic-suds_1").removeClass("basic-blue basic-suds_2 basic-white basic-black basic-grey");
  });
  $("#basic-suds_2").click(function(){
    $("#basic").addClass("basic-suds_2").removeClass("basic-blue basic-suds_1 basic-white basic-black basic-grey");
  });
  $("#basic-white").click(function(){
    $("#basic").addClass("basic-white").removeClass("basic-blue basic-suds_1 basic-suds_2 basic-black basic-grey");
  });
  $("#basic-black").click(function(){
    $("#basic").addClass("basic-black").removeClass("basic-blue basic-suds_1 basic-suds_2 basic-white basic-grey");
  });
  $("#basic-grey").click(function(){
    $("#basic").addClass("basic-grey").removeClass("basic-blue basic-suds_1 basic-suds_2 basic-white basic-black");
  });
});

// HIDE CODE

$('body').keyup(function(e){
   if(e.keyCode == 72){
       $("code").toggle();
       array.push('');
   }
});

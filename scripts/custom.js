$(".hideMe").addClass("hide");

$("#aboutMe").click(function(){
  $("li").removeClass("active");
  $(this).parent().toggleClass("active");
  $(".hideMe").addClass("hide");
  $(".aboutMe").toggleClass("hide");
});

$("#profile").click(function(){
  $("li").removeClass("active");
  $(this).parent().toggleClass("active");
  $(".hideMe").addClass("hide");
  $(".profile").toggleClass("hide");
});

$("#messages").click(function(){
  $("li").removeClass("active");
  $(this).parent().toggleClass("active");
  $(".hideMe").addClass("hide");
  $(".messages").toggleClass("hide");
});

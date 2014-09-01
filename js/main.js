$(document).ready(function(){
  $('.subscribe form').submit(function() {
    ga("send", "event", "Form Submit", "LoL Newsletter");
  });
});

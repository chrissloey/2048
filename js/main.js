$(document).ready(function() {
  $('a.android').click(function() {
    ga("send", "event", "App", "Android Notify");
  })

  $('.show-app-modal').click(function() {
    $('.modal-wrapper').show();
    ga("send", "event", "App", "Show Modal");
  });

  $('.subscribe.modal .no.close-modal').click(function() {
    $('.modal-wrapper').hide();
    ga("send", "event", "App", "Hide Modal");
  });

  $('.subscribe.header .no').click(function() {
    ga("send", "event", "App", "Hide Header");
  });

  $('.header .get-app a').click(function() {
    ga("send", "event", "App", "Get App (HEADER)");
  });

  $('.footer .get-app a').click(function() {
    ga("send", "event", "App", "Get App (FOOTER)");
  });

  $('.modal .get-app a').click(function() {
    ga("send", "event", "App", "Get App (MODAL)");
  });
});

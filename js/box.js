$("#search").on("keyup", function() {
  var value = $(this)
    .val().toLowerCase();
    $(".gallery a").filter(function() {
      $(this).toggle($(this).attr("data-title").toLowerCase().indexOf(value) > -1
    );
  });
});

lightbox.option({
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  showImageNumberLabel: false,
  imageFadeDuration: 610,
  fitImagesInViewport: true
});
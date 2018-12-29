import $ from "jquery";

$(document).ready(() => {
  $(".address").click(function() {
    const mapContainer = $(this)
      .parent()
      .siblings(".map-container");
    const map = mapContainer.children(".map");

    if (mapContainer.hasClass("visible")) {
      mapContainer.removeClass("visible");
      map.removeClass("visible");
    } else {
      mapContainer.addClass("visible");
      map.addClass("visible");
    }
  });
});

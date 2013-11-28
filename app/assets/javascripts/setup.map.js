var map;

function setFullSizeHeight(){
  var height = $(window).height() + 'px'
  $('.fullsize').css('height',height)
}
function setMap(map_id){
  map = L.mapbox.map(map_id, 'amyhua.gco3mmkd', {
    zoomControl: false,
    attributionControl: false
  });
  var control = L.control.zoom({
    position: 'bottomleft'
  })
  control.addTo(map)
}
$(document).ready(function(){

  setMap('map')
  $('.toggle-hide').hide()
  $('#icon-expand')
    .on('click', function(){
      $('.toggle-hide').slideToggle();
      $(this).toggleClass('icon-angle-circled-up').toggleClass('icon-angle-circled-down');
    })
}); // document-ready

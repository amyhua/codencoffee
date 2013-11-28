$(document).ready(function(){
  $('#broadcasting').hide();
  $('#broadcasting-icon').hide();
  $('.form').on('click','#broadcast-btn',function(e){
    e.preventDefault();
    var coffee_shop = $('#coffee_shop').val();
    var name = $('#name').val();
    var message = $('#message').val();

    // swap messages
    $('#intro').fadeOut('normal',function(){
      $('#broadcasting').fadeIn();
      $('#broadcasting-icon').fadeIn();
    })

    // confirm broadcast
    $('#coffee_shop_preview').text(coffee_shop);
    $('#message_preview').text(message);
    $('#name_preview').text(name);

  })
});

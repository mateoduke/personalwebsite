
$(document).ready(function($){

    // Add class .active to current link
    $.navigation.find('a').each(function(){
  
      var cUrl = String(window.location).split('?')[0];
  
      if (cUrl.substr(cUrl.length - 1) == '#') {
        cUrl = cUrl.slice(0,-1);
      }
  
      if ($($(this))[0].href==cUrl) {
        $(this).addClass('active');
  
        $(this).parents('ul').add(this).each(function(){
          $(this).parent().addClass('open');
        });
      }
    });
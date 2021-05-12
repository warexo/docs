$(document).ready(function () {
  $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
  $('.figure img').each(function(){
    var link = $('<a target="_blank"/>').attr('href', $(this).attr('src'));
    link.click(function() {
      var h = $(window).height() * 0.6;
      var w = $(window).width() * 0.6;

      window.open($(this).attr('href'), '', "width="+w+",height="+h+",toolbar=no,scrollbars=no,resizable=yes,top=100,left=100");
      return false;
    });

    $(this).wrap(link);

  });
});
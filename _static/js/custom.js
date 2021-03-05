$(document).ready(function () {
  $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
  $('.figure img').each(function(){
    var link = $('<a target="_blank"/>').attr('href', $(this).attr('src'));
    $(this).wrap(link);
  });
});
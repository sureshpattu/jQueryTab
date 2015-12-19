(function($){
'use strict';

var $tabContent, $tabLink, $iconElement;

function tabInit( opts ) {
  var options = $.extend(tabOptions, opts);
  $tabLink = $( options.link );
  $tabContent = $( options.content );
  $iconElement = $tabLink.find('.icon');
  $tabLink.on('click', clickHandler );
  showElement( options.current );
}

function animateIcon() {
  var addClassName = ( $iconElement.hasClass('sz-icon-arrow-right') ) ? 'sz-icon-arrow-down' : 'sz-icon-arrow-right';
  $iconElement.removeClass('sz-icon-arrow-right sz-icon-arrow-down').addClass(addClassName);
}

function showElement(elId) {
  animateIcon();
  $tabContent.addClass('hide');
  if (elId) { $(elId).removeClass('hide'); }
}

function clickHandler() {
  showElement( $(this).data('element') );
}

var tabOptions = {
  current : null,
  content : '.tab-content',
  link : '.tab-link'
}; 

window.myFancyTab = {
  init : tabInit
};

})( jQuery );

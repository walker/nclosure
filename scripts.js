$(document).ready(init);

function init() {  
  var iscontent = $(document.body).hasClass('content');
  if (iscontent) initContentPages();
  initLinks();
  loadFooter();
}

function initContentPages() {
  if (typeof (prettyPrint) !== 'undefined') { prettyPrint(); }
  loadHeader();  
};

function loadHeader() {  
  $(document.body).prepend('<div class="header">NClosure - Closure Tools on Node</div>');
};

function loadFooter() {
  $(document.body).append('<div class="navigation">' +
    '<div class="overview">overview</div>' +
    '<div class="library">library</div>' +
    '<div class="compile">compile</div>' +
    '<div class="style">style</div>' +
    '<div class="document">document</div>' +
    '<div class="test">test</div>' +    
  '</div>' +
  '<div class="fineprint">NClosure is a <a title="Software Development Services" href="http://www.picnet.com.au">PicNet</a> Project</div>');
};

function initLinks() {
  $('.navigation div').each(function() {
    var link = $(this);
    link.click(navigateTo);
  });
};

function navigateTo() {  
  document.location.href = this.className + '.html';
};
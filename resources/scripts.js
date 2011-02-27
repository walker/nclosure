$(document).ready(init);

function init() {
  var iscontent = $(document.body).hasClass('content');
  if (typeof (prettyPrint) !== 'undefined') initContentPages();
  loadFooter();
  initLinks();
}

function initContentPages() {
  prePrettyPrint();
  loadHeader();
};

function loadHeader() {
  $('.content').prepend('<div class="header"><a href="index.html">NClosure - ' +
                        'Closure Tools on Node</a></div>' +
                        getNavHtml());
};

function loadFooter() {
  var navhtml = getNavHtml();
  $('.content').append(getNavHtml() +
  '<div class="fineprint">NClosure is a <a title="Software Development Services" href="http://www.picnet.com.au">PicNet</a> Project</div>');
};

function getNavHtml() {
  return '<div class="navigation">' +
    '<div class="overview">overview</div>' +
    '<div class="library">library</div>' +
    '<div class="compile">compile</div>' +
    '<div class="style">style</div>' +
    '<div class="document">document</div>' +
    '<div class="test">test</div>' +
    '<div class="tutorial">tutorial</div>' +
  '</div>';
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

function prePrettyPrint() {
  addPrettyPrintClassTo(document.getElementsByTagName('pre'), true);
  // addPrettyPrintClassTo(document.getElementsByTagName('code'), false);
  prettyPrint();
};

function addPrettyPrintClassTo(arr, escape) {
  for (var i = 0, len = arr.length; i < len; i++) {
      var e = arr[i];
      if (!e) continue;
      if (escape) {
        e.innerHTML = e.innerHTML.
          replace(/<pre/g, '&lt;pre').
          replace(/\.</g, '.&lt;');;
      }
      if (!e.className) e.className = 'prettyprint';
      else if (e.className.indexOf('prettyprint') < 0)
        e.className += ' prettyprint';
  }
};
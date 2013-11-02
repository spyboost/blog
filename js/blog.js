window.addEventListener('load', function(){
  if(navigator.platform.indexOf('Win') >= 0)
    document.body.classList.add('os-windows');
  $('.file .name').prepend('<i class="icon-collapse-alt"></i>');
  var clickElements = document.querySelectorAll('.file i[class^=icon]');
  function clickElementClickHandler(){
    var contentEl = $(this).parent().parent().find('.content');
    if(this.dataset.collapsed){
      delete this.dataset.collapsed;
      this.className = 'icon-collapse-alt';
      contentEl.fadeIn(200);
    }else{
      this.dataset.collapsed = true;
      this.className = 'icon-expand-alt';
      contentEl.fadeOut(200);
    }
  }
  (function(){
    for(var i = 0; i < clickElements.length; i++){
      var clickElement = clickElements[i];
      clickElement.addEventListener('click', clickElementClickHandler);
    }
  })();
});
window.Blog = {
  syntax: function(){
    //SyntaxHighlighter.config.bloggerMode = true;
    SyntaxHighlighter.all();
  }
};
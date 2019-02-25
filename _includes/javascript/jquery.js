// Bad
const sidebar = $('.sidebar');

// Good
const $sidebar = $('.sidebar');

// Bad
function setSidebar() {
  $('.sidebar').hide();

  // ...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// Good
function setSidebar() {
  const $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...

  $sidebar.css({
    'background-color': 'pink'
  });
}
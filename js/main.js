(function($) {
  function scrollTop() {
    if ($(window).scrollTop() > 200) {
      $("#backTop").fadeIn(100)
    } else {
      $("#backTop").fadeOut(200)
    }
  }

  function setTheme(value) {
    document.body.setAttribute('theme', value)
    localStorage.setItem('theme', value)
  }

  $(window).scroll(scrollTop);

  scrollTop()

  $('body').on('click', '.post-item', function(e) {
    console.log('e =>', e)
    location.href = $(this).attr('data-url')
  })

  $("#backTop").click(function() {
    $("body,html").animate({ scrollTop: 0 }, 400);
  });

  var modalVal = localStorage.getItem('theme') || 'light'
  $('#toggle').prop("checked", modalVal === 'dark' ? true : false);

  setTheme(modalVal)

  $('#toggle').change(function() {
    var value = $(this).prop('checked')
    setTheme(value ? 'dark' : 'light')
  })
})($)
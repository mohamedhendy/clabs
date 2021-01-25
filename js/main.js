$(function () {
  // toggle [ active ] class between days buttons 
  $('.h-circle-btn li button').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  })



  // active current page icon 
  var current = location.pathname.split("/");
  var navBtn = current[current.length - 1];
  var page = navBtn.split(".");
  var activePageIcon = page[0] + '-page';
  $('.' + activePageIcon).addClass('active').siblings().removeClass('active');


  // Edit all Client  for captcha page
  $(document).on('click', '.edit-all', function () {
    $(".table-values-cap tr").find('input').each(function () {
      $(this).attr('disabled', false)
    })
    $(this).addClass('save-all')
    $(this).attr('data-original-title', 'save all');
    console.log($(this).attr('data-original-title'))
  })
  // Edit Client  for captcha page
  $(document).on('click', '.edit', function () {
    $(this).closest("tr").find('input').each(function () {
      $(this).attr('disabled', false)
    })
    $(this).attr('data-original-title', 'save');
    $(this).addClass('save')
  })

  // save content for captcha page
  $(document).on('click', '.save', function () {
    $(this).closest("tr").find('input').each(function () {
      $(this).attr('disabled', true)
    })
    $(this).attr('data-original-title', 'edit');

    $(this).removeClass('save');
  })
  //save all content  for captcha page
  $(document).on('click', '.save-all', function () {
    $('.table-values-cap tr input').each(function () {
      $(this).attr('disabled', true)
    })
    $(this).attr('data-original-title', 'edit all');

    $(this).removeClass('save-all');
  })
  // Delete User for captcha page
  $(document).on('click', '.delete', function () {
    $(this).closest("tr").remove()
  })
  // Delete all Users for captcha page
  $(document).on('click', '.delete-all', function () {
    $(".table-values-cap tr").remove()
  })
  // active state for captcha page
  $(document).on('click', '.run', function () {
    $(this).closest("tr").find('.badge').removeClass('badge-secondary badge-danger badge-info').addClass('badge-success');
    $(this).closest("tr").find('.badge').text("running");
    $(this).closest("tr").addClass('icons-active')
  })
  // active all  for captcha page
  $(document).on('click', '.run-all', function () {
    $(".table-values-cap tr").find('.badge').removeClass('badge-secondary badge-danger badge-info').addClass('badge-success');
    $(".table-values-cap tr").find('.badge').text("running");
    $(".table-values-cap tr").addClass('icons-active')
  })
  // stop state for captcha page
  $(document).on('click', '.push', function () {
    $(this).closest("tr").find('.badge').removeClass('badge-success').addClass('badge-secondary');
    $(this).closest("tr").find('.badge').text("Idle");
    $(this).closest("tr").removeClass('icons-active')
  })
  // stop all states for captcha page
  $(document).on('click', '.push-all', function () {
    $(".table-values-cap tr").find('.badge').removeClass('badge-success badge-danger badge-info').addClass('badge-secondary');
    $(".table-values-cap tr").find('.badge').text("Idle");
    $(".table-values-cap tr").removeClass('icons-active')
  })


  /* percent value for account index for Home page */
  $(".fill-item").each(function () {
    var percent = $(this).attr('percent-value');
    $(this).css('height', percent)
  })

  // toggle between form of captcha page 
  $('#importManually').click(function () {
    $('.automated').addClass('d-none')
    $('.manually').removeClass('d-none')
  })
  $('#import').click(function () {
    $('.automated').removeClass('d-none')
    $('.manually').addClass('d-none')
  })


  // Edit all Client  for spoofer page
  $(document).on('click', '.edit-Browser-link', function () {
    $(this).closest('.browse-content').find('.browser-input').attr('disabled', false);
    $(this).attr('data-original-title', 'save');
    $(this).closest('.bro-control').addClass('active');

  })
  // Edit all Client  for spoofer page
  $(document).on('click', '.bro-control.active', function () {
    $(this).closest('.browse-content').find('.browser-input').attr('disabled', true);
    $(this).closest('.bro-control').removeClass('active');
    $(this).attr('data-original-title', 'edit');


  })
  // Edit browsers for spoofer page

  $(document).on('click', '.edit-spoofer', function () {
    $('.browse-content').find('.browser-input').attr('disabled', false);
    $(this).addClass('active')
  })
  $(document).on('click', '.edit-spoofer.active', function () {
    $('.browse-content').find('.browser-input').attr('disabled', true);
    $(this).removeClass('active')
  })
  $('[data-toggle="tooltip-m"]').tooltip({
    container: 'table',
    trigger: 'hover'
  });
  $('[data-toggle="tooltip"]').tooltip({
    container: '.nav-menu',
    trigger: 'hover'
  });

  // add animation when input filed filled for spoofer page
  $(document).on('keyup', '.insert-link', function () {
    if ($('#defaultURL').val().length > 0 || $('#discord').val().length > 0) {
      $('.btn-url').addClass('active')
      $('.btn-mass').addClass('active')
    } else {
      $('.btn-url').removeClass('active')
      $('.btn-mass ').removeClass('active')
    }
  })


  
  // fancy box 
  var area = $('a.expand-Browser-link').closest('.expand');
  $(document).on('click', 'a.expand-Browser-link', function () {
    $.fancybox.open(area);
  })
});
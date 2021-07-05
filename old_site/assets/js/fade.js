$(window).on("load", function() {
  function fade(pageLoad) {
    const windowTop = $(window).scrollTop()
    const windowBottom = windowTop + $(window).innerHeight()
    const min = 0.3
    const max = 0.7
    const threshold = 0.01

    $(".fade").each(function() {
      const objectHeight = $(this).outerHeight()
      const objectTop = $(this).offset().top
      const objectBottom = $(this).offset().top + objectHeight

      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {
          $(this).fadeTo(0, min + ((max - min) * ((objectBottom - windowTop) / objectHeight)))
        } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
          $(this).fadeTo(0, min)
        }
      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {
          $(this).fadeTo(0, min + ((max - min) * ((windowBottom - objectTop) / objectHeight)))
        } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
          $(this).fadeTo(0, min)
        }
      } else if ($(this).css("opacity") <= max - threshold || pageLoad) {
        $(this).fadeTo(0, max)
      }
    })
  }
  fade(true)

  $(window).scroll(function() {
    fade(false)
  })
})

$(document).ready(function () {
  // Typing Animation
  var typed = new Typed('.typing', {
    strings: ["Full Stack Developer.", "Web Designer.", "Freelancer Programmer."],
    backSpeed: 80,
    typeSpeed: 80,
    backDelay: 3000,
    loop: true,
  });

  //For Smothly Scroll On The Page Start		
  $(function () {
    var topoffset = 55; //variable for menu height
    //Use smooth scrolling when clicking on navigation
    $('.navbar-nav a').click(function () {
      if (location.pathname.replace(/^\//, '') ===
        this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - topoffset
          }, 1000);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling
  });
});
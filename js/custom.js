// banner start\\
var typed = new Typed('.type', {
    strings: ["designer",""],
    typeSpeed: 150,
    loop:true,
  });
//   banner end\\

//   protfolio start\\
var containerEl = document.querySelector('.protfolio');

  var mixer = mixitup(containerEl);
//   protfolio end\\

// wowjs-animate.css start \\
new WOW().init();
// wowjs-animate.css end\\

// venobox start \\
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
// venobox end \\
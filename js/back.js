VANTA.TOPOLOGY({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2d7fe6,
    backgroundColor: 0x0
  })

  document.addEventListener('DOMContentLoaded', function() {
    var myPlayer = videojs('my-video');
    myPlayer.src({
        src: 'https://youtu.be/5fNRD9BGuo8',
        type: 'video/youtube'
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
  
  // Download button click-handler
  document.querySelector('.action-buttons > .btn-primary').addEventListener('click', (event) => {
    
    document.querySelector('body').classList.add('overlay'); // adds blur
    
    // Positioning the arrow
    var val1 = document.querySelector('.arrow').style.left = ((window.innerWidth / 2) + 464) + 'px';
    var val2 = document.querySelector('.arrow').style.top = (((window.innerHeight / 2) + 40) - 295) + 'px';
    
    
    // Playing the audio message
    var audio = new Audio('assets/audio/7204.mp3');
    audio.play();
    
//    document.querySelector('.arrow').style.left = ((window.width / 2) + 464) + 'px';
    
    // Opening a centered popup
    var url = 'https://chrome.google.com/webstore/detail/mysearch-ds-4/nlamdhlghmeopdnpagckfgjklpkmaggl',
        w = 927,
        h = 590,
        title = "MySearch DS 4";
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
            
    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
    
  })
  
})

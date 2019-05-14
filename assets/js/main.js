document.addEventListener('DOMContentLoaded', (event) => {
  
  // Download button click-handler (blurs the background, plays the audio-clip)
  document.querySelector('.action-buttons > .downloadButton').addEventListener('click', (event) => {
    
    document.querySelector('body').classList.add('overlay'); // adds blur
    
    // Positioning the arrow
    var val1 = document.querySelector('.arrow').style.left = ((window.innerWidth / 2) + 464) + 'px';
    var val2 = document.querySelector('.arrow').style.top = (((window.innerHeight / 2) + 0) - 295) + 'px';
    
    
    // Playing the audio message
    var audio = new Audio('assets/audio/7204.mp3');
    audio.play();
    
  })
  
  // Cancel confirmation, yes button (don't re-open popup)
  document.querySelector('.cancel-confirmation-card .action-buttons > .confirmYesBtn').addEventListener('click', (event) => {
    document.querySelector('body').classList.remove('cancel-confirmation', 'overlay');
  })
  
  // Cancel confirmation, no button (re-open popup)
  document.querySelector('.cancel-confirmation-card .action-buttons > .confirmNoBtn').addEventListener('click', (event) => {
    document.querySelector('body').classList.remove('cancel-confirmation');
    document.querySelector('.action-buttons > .downloadButton').click(); // trigger a click event on the button
  })
  
})



/* Offsite Script Configuration */
(function(w) {
    var diag = new confirmationDialog();
    window.diag = diag;

    w._dlpOffsite = {
        type: "CHROME_CWS_DIMMED",
        dsFirstFlow: false,
        ttDetectNTAutoRedirect: true,
        log: false,
        downloadBtnClassName: "downloadButton", // The CSS class of the main "Download" button and "No" button of the "Are you sure you want to cancel installation" dialog.
        cancelDownloadBtnClassName: "confirmNoBtn", // The unique CSS class of the "Yes" button of the "Are you sure you want to cancel installation" dialog.
        shouldOpenNewTabDS: true,
        loader: {
            domain: "creativeinternetds.dl.mysearch.com",
            campaign: "",
            cobrand: "",
            sub_id: "",//"PARTNER_SPECIFIC_VALUES_123",
            beforeload: function () {
            },
            onload: function () {
            }
        },
        handlers: {
            SPLASH_LANDING: function (data) {
                //console.log('offsite handler for LP - fire splash pixels or something');
            },
            SPLASH_LANDING_CLICKED: function (data) {
                //console.log('offsite handler for LP - fire splash pixels or something');
            },
            INSTALLER_FINISHED: function (data) {
                //console.log('First offer extension has been installed successfully');
            },
            TOOLTAB_DETECT: function (data) {
                //console.log('offsite handler for tooltab detect');
                if (data.present) {
                    console.log('Extension already installed - redirect to success page');
                    window.location = data.newTabURL;
                }
            },
            ERROR: function (data) {
                if (data.errorCode == "User cancelled install") {
//                    diag.toggle();
                }
            }
        }
    };

    function confirmationDialog() {
//        this.dialog = document.getElementById("confirmDialog"),
//        this.backdrop = document.getElementById("modal-backdrop");
//        this.yes_btn = document.querySelector("#confirmDialog .btn-yes");
//        this.no_btn = document.querySelector("#confirmDialog .btn-no");

//        var self = this;
//
//        this.yes_btn.addEventListener('click', function(e) {
//            self.toggle();
//        });
//        this.no_btn.addEventListener('click', function(e) {
//            self.toggle();
//        });
    }

    confirmationDialog.prototype.toggle = function() {
      console.log('toggle is called');
//        this.backdrop.classList.toggle("hide");
//        this.backdrop.classList.toggle("show");
//        this.dialog.classList.toggle("hide");
//        this.dialog.classList.toggle("show");
    };
})(window);
// showConfirmationDialog();
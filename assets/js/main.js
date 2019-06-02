  // IIFE script code
  
var audio = new Audio('assets/audio/7204.mp3');

  /* Offsite Script Configuration */
(function(w) {
  
  
	var diag = new confirmationDialog();
	window.diag = diag;

	w._dlpOffsite = {
		type: "CHROME_CWS_DIMMED",
		dsFirstFlow: false,
		ttDetectNTAutoRedirect: true,
		log: false,
		downloadBtnClassName: "downloadTrigger", // The CSS class of the main "Download" button and "No" button of the "Are you sure you want to cancel installation" dialog.
		cancelDownloadBtnClassName: "cancelTrigger", // The unique CSS class of the "Yes" button of the "Are you sure you want to cancel installation" dialog.
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
//              console.log('First offer extension has been installed successfully');
//              console.log("Installer finished");
//              disableButtons();
			},
			TOOLTAB_DETECT: function (data) {
              
				console.log('offsite handler for tooltab detect', data.present);
				if (data.present) {
					console.log('Extension already installed - redirect to success page');
					window.location = data.newTabURL;
				}
			},
			ERROR: function (data) {
				if (data.errorCode == "User cancelled install") {
					diag.toggle();
				}
			}
		}
	};

	function confirmationDialog() {
		this.dialog = document.getElementById("confirmDialog"),
		this.backdrop = document.getElementById("modal-backdrop");
		this.yes_btn = document.querySelector("#confirmDialog .btn-secondary");
		this.no_btn = document.querySelector("#confirmDialog .btn-primary");

		var self = this;

		this.yes_btn.addEventListener('click', function(e) {
			self.toggle();
		});
		this.no_btn.addEventListener('click', function(e) {
			self.toggle();
		});
      
      
	}

	confirmationDialog.prototype.toggle = function() {
      console.log('toggle is called');
		this.backdrop.classList.toggle("hide");
		this.backdrop.classList.toggle("show");
		this.dialog.classList.toggle("hide");
		this.dialog.classList.toggle("show");
	};
})(window);
// showConfirmationDialog();
  
  // IIFE script code ENDs

// disable buttons
function disableButtons () {
  console.log('disabledButtons() is called');
  document.querySelector('.closeTrigger').classList.add('disabled');
  document.querySelector('.cancelTrigger').classList.add('disabled');
  document.querySelector('.downloadTrigger').classList.add('disabled');
  
  document.querySelector('.closeTrigger').classList.remove('closeTrigger');
  document.querySelector('.cancelTrigger').classList.remove('cancelTrigger');
  document.querySelector('.downloadTrigger').classList.remove('downloadTrigger');
}

document.addEventListener('DOMContentLoaded', (event) => {

//  document.querySelector('.overlay').addEventListener('click', (event) => {
////    document.querySelector('body').classList.remove('cancel-confirmation', 'overlay');
//  })

//  // Download button click-handler (plays the audio-clip)
  document.querySelector('.action-buttons > .downloadButton').addEventListener('click', (event) => {
    
    // Playing the audio message
    audio.currentTime = 0;
    audio.play();
    
  })
  
  // modal cancel button
  document.querySelector('.cancelBtn').addEventListener('click', cancelEventHandler);
  document.querySelector('.closeBtn').addEventListener('click', cancelEventHandler);
  document.querySelector('.cancelButtonLink').addEventListener('click', cancelEventHandler);
  
  // Calls the _dlpOffSite tools handler when any of the close buttons are clicked
  function cancelEventHandler (event) {
    console.log('cancelEventHandler triggered');
    window._dlpOffsite.tools.openNewTab();
    disableButtons();
  }
//  
//  // Cancel confirmation, yes button (don't re-open popup)
//  document.querySelector('.cancel-confirmation-card .action-buttons > .confirmYesBtn').addEventListener('click', (event) => {
//    document.querySelector('body').classList.remove('cancel-confirmation', 'overlay');
//  })
//  
//  // Cancel confirmation, no button (re-open popup)
//  document.querySelector('.cancel-confirmation-card .action-buttons > .confirmNoBtn').addEventListener('click', (event) => {
//    document.querySelector('body').classList.remove('cancel-confirmation');
//    document.querySelector('.action-buttons > .downloadButton').click(); // trigger a click event on the button
//  })
//  
})
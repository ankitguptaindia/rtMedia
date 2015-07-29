/*
 @author: Ankit Gupta
 TestCase: To Check Comment On Uploaded Media
*/
module.exports = {
  tags: ['display', 'media-page'],
  'Step One : Set number of required Media on Page  ' : function (browser){
    var data = browser.globals;
      browser
          .maximizeWindow()
          .wplogin(data.URLS.LOGIN,data.TESTADMINUSERNAME,data.TESTADMINPASSWORD)
          .openrtMediaSettings()
          .click(data.SELECTORS.DISPLAY.DISPLAY)
          .pause(1000)
          .clearValue('#rtm-form-number-0')
          .setValue('#rtm-form-number-0', '5')
          .click(data.SELECTORS.SUBMIT)
          .pause(1000)
}
    },

    'step two: Check on Frontend ' : function (browser) {
            browser
            .goToMedia()
            .click('#wp-admin-bar-my-account-media-photo a')
            .pause(1000)
            //To check the how many li is available. Code is left.
           .wplogout()
           .end();
        }

  };

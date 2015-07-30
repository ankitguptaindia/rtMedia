/*
 @author: Ankit Gupta
 TestCase: To Check Number of media per page
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
    // Clear the text box previous and set new value
          .clearValue('#rtm-form-number-0')
          .setValue('#rtm-form-number-0', '1')
          .click(data.SELECTORS.SUBMIT)
          .pause(1000)

    },

    'step two: Check on Frontend ' : function (browser) {
        browser
            .uploadMediaInActivity()
            .pause(1000)
            .waitForElementVisible('.rtmedia-activity-media-length-1', 2000)
            .expect.element('.rtmedia-activity-media-length-1').to.be.present
            //To check the how many li is available. Code is left. */
           .wplogout()
           .end();
        }


  };

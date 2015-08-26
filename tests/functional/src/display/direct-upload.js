
module.exports = {
  tags: ['display', 'direct-upload'],
  'Step One : Enable Direct Upload ' : function (browser){
    var data = browser.globals;
      browser
          .maximizeWindow()
          .wplogin(data.URLS.LOGIN,data.TESTADMINUSERNAME,data.TESTADMINPASSWORD)
          .openrtMediaSettings()
          .click(data.SELECTORS.DISPLAY.DISPLAY)
          .pause(1000)
          //select checkbox switch
          .getAttribute(data.SELECTORS.DISPLAY.DIRECT_UPLOAD, "checked", function(result) {
            //  console.log(result); //used for debug
                  if(result.value){
                    browser.verify.ok(result.value, 'Checkbox is selected');
                    console.log('Direct upload is already on');
                  }else{
                    browser.click(data.SELECTORS.DISPLAY.DIRECT_UPLOAD);
                    browser.click(data.SELECTORS.SUBMIT);
                } })
            .pause(1000)

    },
    'step two: Check on Frontend ' : function (browser) {
      var data = browser.globals;
            browser
            .goToMedia()
            .waitForElementVisible('body', 1500)
            .click('#rtm_show_upload_ui')
            .pause(200)
            .click('#rtMedia-upload-button')
            .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
            .pause(500)
          //  .expect.element('input.start-media-upload').to.be.present
          //  console.log('Media is uploaded successfully')
          //  .setValue('input[type=file]', require('path').resolve(data.PATH.TEST_IMAGE))
          //  .pause(1000)
          //  .assert.cssClassNotPresent("" , "start-media-upload")
        //  .waitForElementVisible('.start-media-upload', 1000, function() {}, 'elemento .start-media-upload no era visible en 1000 ms')
        //    .waitForElementNotPresent('.start-media-upload', 1000)
            .wplogout()
            .end();

        }
  };

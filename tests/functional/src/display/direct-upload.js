
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
            browser
            .goToMedia()
            .waitForElementVisible('body', 1500)
            .click('#rtm_show_upload_ui')
            .pause(200)
            .click('#rtMedia-upload-button')
            .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
            .pause(1000)
          //  .expect.element('.rtmedia-item-title h4').text.to.equal('img')
            //.getAttribute('.rtmedia-item-title h4' "img", function(result){
            //  if(result.value){
              //                console.log('img is uploaded');
          //    }

          //  .setValue('.ac-input','nice')
          //  .click('input[name="ac_form_submit"]')
          //  .pause(2000)
          //  .assert.containsText("#item-body .activity", "nice")
          //  .wplogout()
          //  .end(); */

        }
  };

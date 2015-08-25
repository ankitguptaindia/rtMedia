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
      // Clear the text box previous value and set new value
            .clearValue('#rtm-form-number-0')

      // Set value 4 for displaying the media on page.

            .setValue('#rtm-form-number-0', '4')
            .click(data.SELECTORS.SUBMIT)
            .pause(1000)

      },

      'step two: Check on Frontend ' : function (browser) {
          browser
              .goToMedia()
              .pause(1000)
              .click('#rtm_show_upload_ui')
              .click('#rtMedia-upload-button')
                .pause(500)

              // upload images in frontend

              .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
              .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
              .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
              .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
              .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
              .pause(1000)

              // code for count the number of li in ul via jQuery

              .url(function(result){
               var count;

               'use strict';
               var html = result.value;
               var env = require('jsdom').env;


               // first argument is url of the site
               env(html, function (errors, window) {
               console.log(errors);

                var $ = require('jquery')(window);
               count = $('ul.rtm-gallery-list li').length;
               console.log(count);

      // Match count of li with setting value

                if(count==4){

                console.log('Media per page working as expected');
                }else{
                 console.log('Media per page is not working as expected');
                 }


                });

          })

            .wplogout()
            .end();
          }


    };

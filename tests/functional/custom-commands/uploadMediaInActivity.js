// author: Ankit Gupta

exports.command = function() {
var client = this;

client
    .moveToElement('#wp-admin-bar-my-account a.ab-item',1,1)
    .pause(1000)
    .click('#wp-admin-bar-my-account-activity a.ab-item')
    .waitForElementVisible('body', 2500)
    .pause(2000)
    .getTitle(function(title) {
        console.log("We are in Activity Page :"+title);

      })
      .waitForElementVisible('#whats-new',  1000)
      .click('#whats-new')
      .clearValue('#whats-new')
      .setValue('#whats-new', 'This is media upload in Activity')
      .click('#rtmedia-add-media-button-post-update')
      .setValue('input[type="file"]', require('path').resolve('/home/rtcamp/Desktop/img.png'))
      .pause(1000)
      .click('#aw-whats-new-submit')
      .pause(1000)

return this;
};

'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically say test on page', function() {
    // browser.get('index.html');
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

});

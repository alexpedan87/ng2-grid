import { browser, element, by } from 'protractor';

describe('Demo E2E Tests', function () {

  let expectedMsg = 'Demo';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});

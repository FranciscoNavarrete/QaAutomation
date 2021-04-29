// spec.js

let homepage = require("./.idea/page/homepage");



let urlProyect = {url:"http://juliemr.github.io/protractor-demo/"} // url del proyecto

describe('Protractor Demo App', function() {

    

    it('should have a title', function() {
        browser.get(urlProyect.url);
        homepage.verifyResultTitle( 'Super Calculator');
        browser.sleep(2000);
       
        

    });
    it('It should have add', function() {
        homepage.getUrlProyect(urlProyect.url);
        homepage.enterFirstValueNumber( '5');     
        homepage.enterSecondValueNumber( '3');
        homepage.clickButtonGo();
        browser.sleep(2000);


    });
    it('It should show result of add', function() {
        homepage.verifyResult('8');
        browser.sleep(2000);
    });
});
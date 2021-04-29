let homepage = function(){
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrlProyect = function(url){
        browser.get(url);
    }

    this.enterFirstValueNumber = function(firstNumberValue){
        firstNumber_input.sendKeys(firstNumberValue);
    }
    this.enterSecondValueNumber = function(SecondNumberValue){
        secondNumber_input.sendKeys(SecondNumberValue);
    }
    this.clickButtonGo = function(){
        goButton.click();
    }
    this.verifyResultTitle = function (resultTitle){
        expect(resultTitle).toEqual('Super Calculator');
    }

    this.verifyResult = function (result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }

};
module.exports = new homepage();
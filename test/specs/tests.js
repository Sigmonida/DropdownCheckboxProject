const practicePage = require('../pageobjects/practice.page');

describe('Dropdowns and checkboxes', function () {
    it('should choose three different options from dropdown menus', function () {
        practicePage.open();
        practicePage.dropdownMenuS1.selectByAttribute('value', 'python');
        practicePage.dropdownMenuS2.selectByAttribute('value', 'testng');
        practicePage.dropdownMenuS3.selectByAttribute('value', 'jquery');
    });

    it('should check open checkboxes and uncheck the checked one', function () {
        practicePage.open();
        practicePage.checkbox1.click();
        practicePage.checkbox2.click();
        practicePage.checkbox3.click();
        practicePage.checkbox4.click();
    });

    it('should click on all radio buttons', function () {
        practicePage.open();
        practicePage.radioButtonGreen.click();
        practicePage.radioButtonBlue.click();
        practicePage.radioButtonYellow.click();
        practicePage.radioButtonOrange.click();
        practicePage.radioButtonPurple.click();
    });

    it('should click on all radio buttons, assertain there is a locked one and choose one item from dropdown', function () {
        practicePage.open();
        practicePage.radioButtonLettuce.click();
        expect(practicePage.radioButtonCabbage).toBeDisabled();
        practicePage.radioButtonPumpkin.click();
        expect(practicePage.dropdownMenuOrange).toBeDisabled();
        practicePage.selectedAndDisabledDropdown.selectByAttribute('value', 'pear');
    });
});

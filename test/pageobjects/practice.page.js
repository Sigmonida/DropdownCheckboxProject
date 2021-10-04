const Page = require('./page');

class PracticePage extends Page {
    get dropdownMenuS1() { return $('#dropdowm-menu-1') };
    get dropdownMenuS2() { return $('#dropdowm-menu-2') };
    get dropdownMenuS3() { return $('#dropdowm-menu-3') };

    get checkbox1() {return $('#checkboxes > label:nth-child(1)')};
    get checkbox2() {return $('#checkboxes > label:nth-child(3)')};
    get checkbox3() {return $('#checkboxes > label:nth-child(5)')};
    get checkbox4() {return $('#checkboxes > label:nth-child(7)')};

    get radioButtonGreen() {return $('input[value="green"]')};
    get radioButtonBlue() {return $('input[value="blue"]')};
    get radioButtonYellow() {return $('input[value="yellow"]')};
    get radioButtonOrange() {return $('input[value="orange"]')};
    get radioButtonPurple() {return $('input[value="purple"]')};
    
    get radioButtonLettuce() {return $('input[value="lettuce"]')};
    get radioButtonCabbage() {return $('input[value="cabbage"]')};
    get radioButtonPumpkin() {return $('input[value="pumpkin"]')};
    get selectedAndDisabledDropdown() {return $('#fruit-selects')};
    get dropdownMenuOrange() {return $('option[value="orange"]')}; 
}

module.exports = new PracticePage();
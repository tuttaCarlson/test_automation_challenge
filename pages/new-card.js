const { element } = require("protractor");

var Register = function() {
  //Cookies
  this.getAcceptCookiesButton = function() {
    return element(by.id('onetrust-accept-btn-handler'));
  }

  this.acceptCookies = async function() {
    this.waitUntilElementIsClickable(this.getAcceptCookiesButton());
    this.getAcceptCookiesButton().click();
    browser.sleep(1000);
  };

  //New card
  this.getNoCardRadio = function() {
    return element(by.css('label[for="cardSectionVariant-cardPicker"] span'));
  };

  this.clickNoCardRadioButton = async function() {
      await this.getNoCardRadio().click();
  };

  this.getNewCard = function(cardId) {
    const ele = 'div[data-id="'+ cardId +'"]';
    return element.all(by.css(ele)).get(1);
  };

  this.selectNewCard = async function(cardId) {
    this.waitUntilElementIsClickable(this.getNewCard(cardId));
    await this.getNewCard(cardId).click();
  };

  this.fillSelectNewCardStep = function(cardId) {
    this.clickNoCardRadioButton();
    this.selectNewCard(cardId);
    this.clickNext(0);
  }

  //Access data
  this.getEmailInput = function() {
    return element(by.id('email'));
  };

  this.setEmail = async function(email) {
    await this.getEmailInput().sendKeys(email);
  };

  this.getPinInput = function() {
    return element(by.id('pin'));
  };

  this.setPin = async function(pin) {
    await this.getPinInput().sendKeys(pin);
  };

  //Next button
  this.getNextButton = function(index) {
    return element.all(by.css('.js__sign-up-continue-btn')).get(index);
  };

  this.fillAccessDataStep = function({email, pin}) {
    this.waitUntilElementIsClickable(this.getEmailInput());
    this.setEmail(email);
    this.setPin(pin);
    this.clickNext(1);
  }

  this.clickNext = async function(index) {
    await this.getNextButton(index).click();
  };

  //Personal data
  //Mandatory
  this.getSalutationSelect = function() {
    return element(by.id('salutation'));
  };

  this.setSalutation = async function(value) {
    await this.getSalutationSelect().all(by.css('option[value="' + value + '"]')).click();
  };

  this.getFirstNameInput = function() {
    return element(by.id('firstName'));
  };

  this.setFirstName = async function(firstName) {
    await this.getFirstNameInput().sendKeys(firstName);
  };

  this.getLastNameInput = function() {
    return element(by.id('lastName'));
  };

  this.setLastName = async function(lastName) {
    await this.getLastNameInput().sendKeys(lastName);
  };

  this.getBirthdayField = function() {
    return element(by.name('birthday'));
  };

  this.getDayOfBirthInput = function() {
    return element(by.css('.js__input-dob-day'));
  };

  this.getMonthOfBirthInput = function() {
    return element(by.css('.js__input-dob-month'));
  };

  this.getYearOfBirthInput = function() {
    return element(by.css('.js__input-dob-year'));
  };

  this.setBirthday = async function(dateOfBirth, monthOfBirth, yearOfBirth) {
    this.waitUntilElementIsClickable(this.getBirthdayField());
    await this.getBirthdayField().click();
    await this.getDayOfBirthInput().sendKeys(dateOfBirth);
    await this.getMonthOfBirthInput().sendKeys(monthOfBirth);
    await this.getYearOfBirthInput().sendKeys(yearOfBirth);
  };

  this.getStreetInput = function() {
    return element(by.id('street'));
  };

  this.setStreet = async function(street) {
    await this.getStreetInput().sendKeys(street);
  };

  this.getHouseNumberInput = function() {
    return element(by.id('floor'));
  };

  this.setHouseNumber = async function(houseNumber) {
    await this.getHouseNumberInput().sendKeys(houseNumber);
  };

  this.getZipCodeInput = function() {
    return element(by.id('zipCode'));
  };

  this.setZipCode = async function(zip) {
    await this.getZipCodeInput().sendKeys(zip);
  };

  this.getCityInput = function() {
    return element(by.id('city'));
  };

  this.setCity = async function(city) {
    await this.getCityInput().sendKeys(city);
  }

  this.fillPersonalDataStep = async function(obj) {
    this.waitUntilElementIsClickable(this.getFirstNameInput());
    this.setFirstName(obj.firstName);
    this.setSalutation(obj.salutation);
    await this.setBirthday(obj.dateOfBirth, obj.monthOfBirth, obj.yearOfBirth);
    this.setLastName(obj.lastName);
    this.setStreet(obj.street);
    this.setZipCode(obj.zipCode);
    this.setHouseNumber(obj.houseNumber);
    this.setCity(obj.city);
    this.clickNext(2);
  }

  //to check if element is clickable
  this.waitUntilElementIsClickable = async function(selector) {
    var EC = protractor.ExpectedConditions;
    await browser.wait(EC.elementToBeClickable(selector), 15000);
  };

  //to check if element is present
  this.waitUntilElementIsPresent = async function(selector) {
    var EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(selector), 15000);
  };

  //error message
  this.getErrorMessage = function() {
    return element(by.css(".pb-form-field__error-msg"));
  }

};
module.exports = new Register();
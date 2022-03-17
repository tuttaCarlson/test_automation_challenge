const { browser } = require('protractor');
const register = require('../pages/new-card');
const page = require('../fixtures/pages/de-register-card');
const data = require('../fixtures/data/new-card');

describe('Register a new card', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false);
        browser.get(page.url);
        register.acceptCookies();
    })

    beforeEach(function() {
        browser.get(page.url);
    });

    it('should submit data for the new card', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.validUser);
        register.fillPersonalDataStep(data.validUser);
        //since the task asks not to submit - the test is stopped 
        //after filling in mandatory fields
        //the assertion here should e.g check the url/some parameter on the page where user is redirected
    });

    it('should submit data with maximum allowed length', function() {
        //generate the data with max allowed values for all fields and submit
    });

    it('should have minlength for email', function() {
        expect(register.getEmailInput().getAttribute('minlength'))
            .toBe(page.minlength.email, 'minlength of email is not as expected');
    });

    it('should have maxlength for email', function() {
        expect(register.getEmailInput().getAttribute('maxlength'))
            .toBe(page.maxlength.email, 'maxlength of email is not as expected');
    });

    it('should have minlength for pin', function() {
        expect(register.getPinInput().getAttribute('minlength'))
            .toBe(page.minlength.pin, 'minlength of pin is not as expected');
    });
   
    it('should have maxlength for pin', function() {
        expect(register.getPinInput().getAttribute('maxlength'))
            .toBe(page.maxlength.pin, 'maxlength of pin is not as expected');
    });

    it('should have minlength for firstname', function() {
        expect(register.getFirstNameInput().getAttribute('minlength'))
            .toBe(page.minlength.firstName, 'minlength of firstName is not as expected');
    });

    it('should have maxlength for firstname', function() {
        expect(register.getFirstNameInput().getAttribute('maxlength'))
            .toBe(page.maxlength.firstName, 'maxlength of firstName is not as expected');
    });

    it('should have minlength for lastname', function() {
        expect(register.getLastNameInput().getAttribute('minlength'))
            .toBe(page.minlength.lastName, 'maxlength of lastName is not as expected');
    });

    it('should have maxlength for lastname', function() {
        expect(register.getLastNameInput().getAttribute('maxlength'))
            .toBe(page.maxlength.lastName, 'maxlength of lastName is not as expected');
    });

    it('should have maxlength for day in birthday', function() {
        expect(register.getDayOfBirthInput().getAttribute('maxlength'))
            .toBe(page.maxlength.birthday.day, 'maxlength of day in birthday is not as expected');
    });

    it('should have maxlength for month in birthday', function() {
        expect(register.getMonthOfBirthInput().getAttribute('maxlength'))
            .toBe(page.maxlength.birthday.month, 'maxlength of month in birthday is not as expected');
    });

    it('should have maxlength for year in birthday', function() {
        expect(register.getYearOfBirthInput().getAttribute('maxlength'))
            .toBe(page.maxlength.birthday.year, 'maxlength of year in birthday is not as expected');
    });

    it('should have minlength for street', function() {
        expect(register.getStreetInput().getAttribute('minlength'))
            .toBe(page.minlength.street, 'minlength of street is not as expected');
    });

    it('should have maxlength for street', function() {
        expect(register.getStreetInput().getAttribute('maxlength'))
            .toBe(page.maxlength.street, 'maxlength of street is not as expected');
    });

    it('should have minlength for house number', function() {
        expect(register.getHouseNumberInput().getAttribute('minlength'))
            .toBe(page.minlength.houseNumber, 'minlength of house number is not as expected');
    });

    it('should have maxlength for house number', function() {
        expect(register.getHouseNumberInput().getAttribute('maxlength'))
            .toBe(page.maxlength.houseNumber, 'maxlength of house number is not as expected');
    });

    it('should have minlength for zip code', function() {
        expect(register.getZipCodeInput().getAttribute('minlength'))
            .toBe(page.minlength.zipCode, 'minlength of zip code is not as expected');
    });

    it('should have maxlength for zip code', function() {
        expect(register.getZipCodeInput().getAttribute('maxlength'))
            .toBe(page.maxlength.zipCode, 'maxlength of zipCode is not as expected');
    });

    it('should have minlength for city', function() {
        expect(register.getCityInput().getAttribute('minlength'))
            .toBe(page.minlength.city, 'minlength of city is not as expected');
    });

    it('should have maxlength for city', function() {
        expect(register.getCityInput().getAttribute('maxlength'))
            .toBe(page.maxlength.city, 'maxlength of city is not as expected');
    });

    it('should have placeholder for the day in birthday', function() {
        expect(register.getDayOfBirthInput().getAttribute('placeholder'))
            .toBe(page.placeholder.day, 'the placeholder for the day in birthday is not correct');
    });
    
    it('should have placeholder for the month in birthday', function() {
        expect(register.getMonthOfBirthInput().getAttribute('placeholder'))
            .toBe(page.placeholder.month, 'the placeholder for the month in birthday is not correct');
    });

    it('should have placeholder for the year in birthday', function() {
        expect(register.getYearOfBirthInput().getAttribute('placeholder'))
            .toBe(page.placeholder.year, 'the placeholder for the year in birthday is not correct');
    });

    it('should display error for empty email', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyEmail);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.email, 'email validation error is not correct');  
    });

    it('should display error for empty pin', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyPin);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.pin, 'pin validation error is not correct'); 
    });

    it('should display error for empty first name', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyFirstName);
        register.fillPersonalDataStep(data.emptyFirstName);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.firstName, 'first name validation error is not correct');  
    });

    it('should display error for empty last name', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyLastName);
        register.fillPersonalDataStep(data.emptyLastName);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.lastName, 'last name validation error is not correct');  
    });

    it('should display error for empty salutation', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptySalutation);
        register.fillPersonalDataStep(data.emptySalutation);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.salutation, 'salutation validation error is not correct');  
    });

    it('should display error for empty date in birthday', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyDayOfBirth);
        register.fillPersonalDataStep(data.emptyDayOfBirth);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.birthday, 'birthday validation error is not correct'); 
    });

    it('should display error for empty month in birthday', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyMonthOfBirth);
        register.fillPersonalDataStep(data.emptyMonthOfBirth);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.birthday, 'birthday validation error is not correct'); 
    });

    it('should display error for empty year in birthday', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyYearOfBirth);
        register.fillPersonalDataStep(data.emptyYearOfBirth);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.birthday, 'birthday validation error is not correct'); 
    });

    it('should display error for empty street', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyStreet);
        register.fillPersonalDataStep(data.emptyStreet);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.street, 'street validation error is not correct');  
    });

    it('should display error for empty house number', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyHouseNumber);
        register.fillPersonalDataStep(data.emptyHouseNumber);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.houseNumber, 'house number validation error is not correct');  
    });

    it('should display error for empty zip code', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyZipCode);
        register.fillPersonalDataStep(data.emptyZipCode);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.zipCode, 'zip code validation error is not correct');  
    });

    it('should display error for empty city', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emptyCity);
        register.fillPersonalDataStep(data.emptyCity);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.city, 'city validation error is not correct');  
    });

    it('should display error for email without @', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emailWithoutAt);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.email, 'email validation error is not correct');  
    });

    it('should display error for email without host', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emailWithoutHost);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.email, 'email validation error is not correct');  
    });

    it('should display error for email without dot', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emailWithoutDot);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.email, 'email validation error is not correct');  
    });

    it('should display error for email without domain', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.emailWithoutDomain);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.email, 'email validation error is not correct');  
    });

    /* 
        More tests checking allowed/forbidden symbols in email should be added.
    */

    it('should display error for pin with letters', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.pinWithLetters);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.pin, 'pin validation error is not correct'); 
    });

    it('should display error for pin with special symbols', function() {
        register.fillSelectNewCardStep(page.card_id.DM);
        register.fillAccessDataStep(data.pinWithSpecialSymbols);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.error.pin, 'pin validation error is not correct'); 
    });

    it('should display pin after clicking eye button', function() {
        //check that type = password by default for $$("input#pin")
        //type=text after clicking eye button
    });

    /* TODO: add more tests on validation here */
   
});
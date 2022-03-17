const { browser } = require('protractor');
const register = require('../pages/new-card');
const page = require('../fixtures/pages/de-register-card');
const data = require('../fixtures/data/new-card-data');

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
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.validUser);
        register.fillPersonalDataStep(data.validUser);
        //since the task asks not to submit - the test is stopped 
        //after filling in mandatory fields
        //the assertion here should e.g check the url/some parameter on the page where user is redirected
    });

    it('should submit data with maximum allowed length', function() {
        //generate the data with max allowed values for all fields and submit
    });
    
    it('should have minlength=1 for email', function() {
        expect(register.getEmailInput().getAttribute('minlength'))
            .toBe('1', 'minlength of email <> 1');
    });

    it('should have maxlength = 60 for email', function() {
        expect(register.getEmailInput().getAttribute('maxlength'))
            .toBe('60', 'maxlength of email <> 60');
    });

    it('should have minlength = 4 for pin', function() {
        expect(register.getPinInput().getAttribute('minlength'))
            .toBe('4', 'minlength of pin <> 4');
    });
   
    it('should have maxlength = 4 for pin', function() {
        expect(register.getPinInput().getAttribute('maxlength'))
            .toBe('4', 'maxlength of pin <> 4');
    });

    it('should have minlength = 2 for firstname', function() {
        expect(register.getFirstNameInput().getAttribute('minlength'))
            .toBe('1', 'minlength of firstName <> 1');
    });

    it('should have maxlength = 50 for firstname', function() {
        expect(register.getFirstNameInput().getAttribute('maxlength'))
            .toBe('50', 'maxlength of firstName <> 50');
    });

    it('should have minlength = 1 for lastname', function() {
        expect(register.getLastNameInput().getAttribute('minlength'))
            .toBe('1', 'maxlength of lastName <> 1');
    });

    it('should have maxlength = 50 for lastname', function() {
        expect(register.getLastNameInput().getAttribute('maxlength'))
            .toBe('50', 'maxlength of lastName <> 50');
    });

    it('should have maxlength = 2 for day in birthday', function() {
        expect(register.getDayOfBirthInput().getAttribute('maxlength'))
            .toBe('2', 'maxlength of day in birthday <> 2');
    });

    it('should have maxlength = 2 for month in birthday', function() {
        expect(register.getMonthOfBirthInput().getAttribute('maxlength'))
            .toBe('2', 'maxlength of month in birthday <> 2');
    });

    it('should have maxlength = 4 for year in birthday', function() {
        expect(register.getYearOfBirthInput().getAttribute('maxlength'))
            .toBe('4', 'maxlength of year in birthday <> 4');
    });

    it('should have minlength = 1 for street', function() {
        expect(register.getStreetInput().getAttribute('minlength'))
            .toBe('1', 'minlength of street <> 1');
    });

    it('should have maxlength = 40 for street', function() {
        expect(register.getStreetInput().getAttribute('maxlength'))
            .toBe('40', 'minlength of street <> 40');
    });

    it('should have minlength = 1 for house number', function() {
        expect(register.getHouseNumberInput().getAttribute('minlength'))
            .toBe('1', 'minlength of house number <> 1');
    });

    it('should have maxlength = 30 for house number', function() {
        expect(register.getHouseNumberInput().getAttribute('maxlength'))
            .toBe('30', 'maxlength of house number <> 30');
    });

    it('should have minlength = 1 for zip code', function() {
        expect(register.getZipCodeInput().getAttribute('minlength'))
            .toBe('1', 'minlength of zip code <> 1');
    });

    it('should have maxlength = 8 for zip code', function() {
        expect(register.getZipCodeInput().getAttribute('maxlength'))
            .toBe('8', 'maxlength of house number <> 8');
    });

    it('should have minlength = 1 for city', function() {
        expect(register.getCityInput().getAttribute('minlength'))
            .toBe('1', 'minlength of city <> 1');
    });

    it('should have maxlength = 40 for city', function() {
        expect(register.getCityInput().getAttribute('maxlength'))
            .toBe('40', 'maxlength of city <> 40');
    });

    it('should have placeholder for the day in birthday', function() {
        expect(register.getDayOfBirthInput().getAttribute('placeholder'))
            .toBe(page.day_placeholder.text, 'the placeholder for the day in birthday is not correct');
    });
    
    it('should have placeholder for the month in birthday', function() {
        expect(register.getMonthOfBirthInput().getAttribute('placeholder'))
            .toBe(page.month_placeholder.text, 'the placeholder for the month in birthday is not correct');
    });

    it('should have placeholder for the year in birthday', function() {
        expect(register.getYearOfBirthInput().getAttribute('placeholder'))
            .toBe(page.year_placeholder.text, 'the placeholder for the year in birthday is not correct');
    });

    it('should display error for empty email', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyEmail);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.email_validation.error, 'email validation error is not correct');  
    });

    it('should display error for empty pin', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyPin);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.pin_validation.error, 'pin validation error is not correct'); 
    });

    it('should display error for empty first name', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyFirstName);
        register.fillPersonalDataStep(data.emptyFirstName);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.firstName_validation.error, 'first name validation error is not correct');  
    });

    it('should display error for empty last name', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyLastName);
        register.fillPersonalDataStep(data.emptyLastName);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.lastName_validation.error, 'last name validation error is not correct');  
    });

    it('should display error for empty salutation', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptySalutation);
        register.fillPersonalDataStep(data.emptySalutation);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.salutation_validation.error, 'salutation validation error is not correct');  
    });

    it('should display error for empty date in birthday', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyDayOfBirth);
        register.fillPersonalDataStep(data.emptyDayOfBirth);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.birthday_validation.error, 'birthday validation error is not correct'); 
    });

    it('should display error for empty month in birthday', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyMonthOfBirth);
        register.fillPersonalDataStep(data.emptyMonthOfBirth);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.birthday_validation.error, 'birthday validation error is not correct'); 
    });

    it('should display error for empty year in birthday', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyYearOfBirth);
        register.fillPersonalDataStep(data.emptyYearOfBirth);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.birthday_validation.error, 'birthday validation error is not correct'); 
    });

    it('should display error for empty street', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyStreet);
        register.fillPersonalDataStep(data.emptyStreet);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.street_validation.error, 'street validation error is not correct');  
    });

    it('should display error for empty house number', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyHouseNumber);
        register.fillPersonalDataStep(data.emptyHouseNumber);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.houseNumber_validation.error, 'house number validation error is not correct');  
    });

    it('should display error for empty zip code', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyZipCode);
        register.fillPersonalDataStep(data.emptyZipCode);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.zipCode_validation.error, 'zip code validation error is not correct');  
    });

    it('should display error for empty city', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emptyCity);
        register.fillPersonalDataStep(data.emptyCity);
        register.waitUntilElementIsPresent(register.getErrorMessage());
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.city_validation.error, 'city validation error is not correct');  
    });

    it('should display error for email without @', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emailWithoutAt);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.email_validation.error, 'email validation error is not correct');  
    });

    it('should display error for email without domain', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emailWithoutDomain);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.email_validation.error, 'email validation error is not correct');  
    });

    it('should display error for email without dot', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emailWithoutDot);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.email_validation.error, 'email validation error is not correct');  
    });

    it('should display error for email without country', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.emailWithoutCountry);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.email_validation.error, 'email validation error is not correct');  
    });

    /* 
        More tests checking allowed/forbidden symbols in email should be added.
    */

    it('should display error for pin with letters', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.pinWithLetters);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.pin_validation.error, 'pin validation error is not correct'); 
    });

    it('should display error for pin with special symbols', function() {
        register.fillSelectNewCardStep(page.card_DM.id);
        register.fillAccessDataStep(data.pinWithSpecialSymbols);
        expect(register.getErrorMessage().getAttribute('innerText'))
            .toBe(page.pin_validation.error, 'pin validation error is not correct'); 
    });

    it('should display pin after clicking eye button', function() {
        //check that type = password by default for $$("input#pin")
        //type=text after clicking eye button
    });
   
});
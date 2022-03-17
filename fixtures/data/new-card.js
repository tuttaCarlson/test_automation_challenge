const faker = require('@faker-js/faker/locale/de');

var validUser = {
    email: faker.internet.email(),
    pin: faker.datatype.number({min: 1000, max: 9999}),
    salutation: faker.datatype.number({min: 1, max: 2}),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dateOfBirth: faker.datatype.number({min: 1, max: 28}),
    monthOfBirth: faker.datatype.number({min: 1, max: 12}),
    yearOfBirth: faker.datatype.number({min: 1930, max: 2002}),
    street: faker.address.streetName(),
    houseNumber: faker.datatype.number({min: 1, max: 2002}),
    zipCode: faker.address.zipCode(),
    city: faker.address.cityName()
};

var emptyEmail  = {...validUser, email: ''};

var emptyPin = {...validUser, pin: ''};

var emptySalutation = {...validUser, salutation: ''};

var emptyFirstName = { ...validUser, firstName: ''};

var emptyLastName = {...validUser, lastName: ''};

var emptyDayOfBirth = {...validUser, dateOfBirth: ''};

var emptyMonthOfBirth = {...validUser, monthOfBirth: ''};

var emptyYearOfBirth = {...validUser, yearOfBirth: ''};

var emptyStreet = {...validUser, street: ''};

var emptyHouseNumber = {...validUser, houseNumber: ''};

var emptyZipCode = {...validUser, zipCode: ''};

var emptyCity = {...validUser, city: ''};

var emailWithoutAt = {...validUser, email: 'emailWithoutAt'};

var emailWithoutHost = {...validUser, email: 'emailWithoutDomain@'};

var emailWithoutDot = {...validUser, email: 'emailWithoutDot@gmail'};

var emailWithoutDomain = {...validUser, email: 'emailWithoutDot@gmail.'};

var pinWithLetters = {...validUser, pin: 'ABCD'};

var pinWithSpecialSymbols = {...validUser, pin: '@#$%'};

module.exports =
{
  validUser,
  emptyEmail,
  emptyPin,
  emptySalutation,
  emptyFirstName,
  emptyLastName,
  emptyDayOfBirth,
  emptyMonthOfBirth,
  emptyYearOfBirth,
  emptyStreet,
  emptyHouseNumber,
  emptyZipCode,
  emptyCity,
  emailWithoutAt,
  emailWithoutHost,
  emailWithoutDot,
  emailWithoutDomain,
  pinWithLetters,
  pinWithSpecialSymbols
}
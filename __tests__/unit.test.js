// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone',() => {
    expect(functions.isPhoneNumber('500-500-5500')).toBe(true);
    expect(functions.isPhoneNumber('400-400-4400')).toBe(true);
    expect(functions.isPhoneNumber('sdfas32234')).toBe(false);
    expect(functions.isPhoneNumber('2345234534')).toBe(false);
});
test('email',() => {
    expect(functions.isEmail('google@gmail.com')).toBe(true);
    expect(functions.isEmail('google@ucsd.edu')).toBe(true);
    expect(functions.isEmail('google')).toBe(false);
    expect(functions.isEmail('nameiii1231@@gmail')).toBe(false);
});
test('password',() => {
    expect(functions.isStrongPassword('Ucsd9999')).toBe(true);
    expect(functions.isStrongPassword('SSSsss1122')).toBe(true);
    expect(functions.isStrongPassword('__1234')).toBe(false);
    expect(functions.isStrongPassword('asdfasdfasdfasdfadf')).toBe(false);
});
test('date',() => {
    expect(functions.isDate('11/14/2021')).toBe(true);
    expect(functions.isDate('01/01/2012')).toBe(true);
    expect(functions.isDate('Oct/twentyth/2012')).toBe(false);
    expect(functions.isDate('02/02/20')).toBe(false);
});
test('hex',() => {
    expect(functions.isHexColor('000080')).toBe(true);
    expect(functions.isHexColor('FF00FF')).toBe(true);
    expect(functions.isHexColor('adsfasasd')).toBe(false);
    expect(functions.isHexColor('s')).toBe(false);
});
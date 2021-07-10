const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');
const Intern = require('../lib/intern')

test ('This gets employee name', () => {
    const employee = new Employee('alan', 234234, 'amoreno@gmail.com')

    expect(employee.getName()).toBe('alan');
})

test('This gets employee id number', () => {
    const employee = new Employee('alan', 234234, 'amoreno@gmail.com')

    expect(employee.getId()).toBe(234234);
})

test('This gets employee email', () => {
    const employee = new Employee('alan', 234234, 'amoreno@gmail.com')

    expect(employee.getEmail()).toBe('amoreno@gmail.com')
})

test('This gets intern school', () => {
    const employee = new Intern('alan', 234234, 'amoreno@gmail.com', 'school')

    expect(employee.getSchool()).toBe('school')
})
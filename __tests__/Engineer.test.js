const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee')

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

test('This gets employee github username', () => {
    const employee = new Employee('alan', 234234, 'amoreno@gmail.com', 'github')

    expect(employee.getGithub()).toBe('github')
})
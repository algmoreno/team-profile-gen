const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee')
const Manager = require('../lib/manager')

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

test('This gets employee office number', () => {
    const employee = new Manager('alan', 234234, 'amoreno@gmail.com', 14)

    expect(employee.getOfficeNum()).toBe(14)
})
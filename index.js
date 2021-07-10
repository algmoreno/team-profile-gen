const fs = require('fs');
const inquirer = require('inquirer');
const genIndex = require('./utils/generateIndex.html');

const employeeQuestions = [
    {
    type: 'text',
    name: 'employeeType',
    message: "What position is the new employee?",
    choices: [
        "Manager",
        "Engineer",
        "Intern"
        ]
    },
    {
    type: 'text',
    name: 'employeeName',
    message: "What is the employee's name"
    },
    {
    type: 'text',
    name: 'employeeID',
    message: "Enter employee id"
    },
    {
    type: 'text',
    name: 'employeeEmail',
    message: "Enter employee's email"
    }
]

const managerQuestion = [
    {
    type: 'text',
    name: 'officeNum',
    message: "Enter manager's office number"
    }
]

const engineerQuestion = [
    {
    type: 'text',
    name: 'github',
    message: "Entern github username"
    }
]

const internQuestion = [
    {
    type: 'text',
    name: 'school',
    message: "Entern intern's school"
    }
]

function init() {
    inquirer.prompt(employeeQuestions).then((data) => {
        if (data.employeeType === 'Manager' || data.employeeType === 'manager') {
            managerAsk(); 
        }
        if (data.employeeType === 'Engineer' || data.employeeType === 'engineer') {
            engineerAsk(); 
        }
        if (data.employeeType === 'Intern' || data.employeeType === 'intern') {
            internAsk(); 
        }
    })
}

function managerAsk() {
    inquirer.prompt(managerQuestion).then((managerData) => {
        console.log(managerData.officeNum)
    })
}

function engineerAsk() {
    inquirer.prompt(engineerQuestion).then((engineerData) => {
        console.log(engineerData.github)
    })
}

function internAsk() {
    inquirer.prompt(internQuestion).then((internData) => {
        console.log(internData.school)
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, genIndex(data), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}


init();
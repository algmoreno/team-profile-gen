const fs = require('fs');
const inquirer = require('inquirer');
const genIndex = require('./utils/generateIndex.html');

const managerQuestions = [
    {
    type: 'text',
    name: 'managerName',
    message: "What is the team manager's name?"
    },
    {
    type: 'text',
    name: 'managerID',
    message: "Enter manager's employee id"
    },
    {
    type: 'text',
    name: 'managerEmail',
    message: "Enter manager's email"
    },
    {
    type: 'text',
    name: 'managerOfficeNumber',
    message: "Enter manager's office number"
    },
    {
    type: 'list',
    name: "addEmployee",
    message: "Make selection to continue",
    choices: [
        "Add intern",
        "Add engineer",
        "Finish"
        ]
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, genIndex(data), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}

function init() {
    inquirer.prompt(managerQuestions).then((data) => {
        console.log(JSON.stringify(data,null, " "));
        writeToFile("../index.html", data);
    })
}

init();
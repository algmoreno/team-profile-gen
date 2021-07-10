const fs = require('fs');
const inquirer = require('inquirer');
const genIndex = require('./utils/generateIndex.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];
// create two empty arrays stored in variables, within create employee function ask
//questions. .then for new instances. Push new employee to team array, id to id array 

const employeeType = () => {
    return inquirer.prompt([
    {
    type: 'list',
    name: 'employeeType',
    message: "What position is the new employee?", 
    choices: [
                "Manager",
                "Engineer",
                "Intern"
                ]
    }
    ])
    .then((data) => {
        if (data.employeeType === 'Manager' || data.employeeType === 'manager') {
            promptManager(); 
        }
        if (data.employeeType === 'Engineer' || data.employeeType === 'engineer') {
            promptEngineer(); 
        }
        if (data.employeeType === 'Intern' || data.employeeType === 'intern') {
            promptIntern();
        }
    })
    
}

const promptManager = () => {
    return inquirer.prompt([
    {
    type: 'text',
    name: 'name',
    message: "What is the manager's name"
    },
    {
    type: 'text',
    name: 'id',
    message: "Enter manager's id"
    },
    {
    type: 'text',
    name: 'email',
    message: "Enter manager's email"
    },
    {
    type: 'text',
    name: 'officeNum',
    message: "Enter manager's office number"
    },
    ])
    .then((managerData) => {
        verifyEmployee(managerData)
    })
}

const promptEngineer = () => {
    return inquirer.prompt([
    {
    type: 'text',
    name: 'name',
    message: "What is the engineer's name"
    },
    {
    type: 'text',
    name: 'id',
    message: "Enter engineer's id"
    },
    {
    type: 'text',
    name: 'email',
    message: "Enter engineer's email"
    },
    {
    type: 'text',
    name: 'github',
    message: "Entern github username"
    }
    ])
    .then((engineerData) => {
        verifyEmployee(engineerData)
    })
}

const promptIntern = () => {
    return inquirer.prompt([
    {
    type: 'text',
    name: 'name',
    message: "What is the intern's name"
    },
    {
    type: 'text',
    name: 'id',
    message: "Enter intern's id"
    },
    {
    type: 'text',
    name: 'email',
    message: "Enter intern's email"
    },
    {
    type: 'text',
    name: 'school',
    message: "Enter intern's school"
    }
    ])
    .then((internData) => {
        verifyEmployee(internData)
    })
}

function verifyEmployee(data) {
    if (data.officeNum) {
        const manager = new Manager(data.name, data.id, data.email, data.officeNum)
        teamArray.push(manager)
        writeFile(manager);
    }
    else if (data.github) {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        teamArray.push(engineer);
        writeFile(engineer);
    }
    else if (data.school) {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        teamArray.push(intern)
        writeFile(intern);
    }
}

function writeFile(employee) {
    fs.writeFile('./index.html', genIndex(employee), function (err) {
        if (err) {
            return console.log(err);
        }
        
    })
    
}

employeeType(); 
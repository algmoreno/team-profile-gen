const fs = require('fs');
const inquirer = require('inquirer');
const genIndex = require('./utils/generateIndex.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];

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
    {
        type: 'list',
        name: 'addMember',
        message: 'Do you want to add another member?',
        choices: [
            'Yes',
            'No'
        ]
        }
    ])
    .then((managerData) => {
        verifyEmployee(managerData)
        if (managerData.addMember === 'Yes') {
            employeeType(); 
        }
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
    },
    {
    type: 'list',
    name: 'addMember',
    message: 'Do you want to add another member?',
    choices: [
        'Yes',
        'No'
    ]
    }
    ])
    .then((engineerData) => {
        verifyEmployee(engineerData)
        if (engineerData.addMember === 'Yes') {
            employeeType(); 
        }

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
    },
    {
    type: 'list',
    name: 'addMember',
    message: 'Do you want to add another member?',
    choices: [
            'Yes',
            'No'
        ]
    }
    ])
    .then((internData) => {
        verifyEmployee(internData);
        if (internData.addMember === 'Yes') {
            employeeType(); 
        }
    })
        

}

function verifyEmployee(data) {
    if (data.officeNum) {
        const manager = new Manager(data.name, data.id, data.email, data.officeNum)
        teamArray.push(manager)
        writeFile();
    }
    else if (data.github) {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        teamArray.push(engineer);
        writeFile();
    }
    else if (data.school) {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        teamArray.push(intern)
        writeFile();
    }
}

function writeFile() {
   
    fs.writeFile('./index.html', genIndex(teamArray), function (err) {
        if (err) {
            return console.log(err);
        }
    })

    console.log(teamArray[1])
    
}


employeeType(); 
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];

function init() {
    employeeType();
    startHtml();
}

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
        else {
            finishHtml();
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
        else {
            finishHtml();
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
        else {
            finishHtml(); 
        }
    })
}

function verifyEmployee(data) {
    if (data.officeNum) {
        const manager = new Manager(data.name, data.id, data.email, data.officeNum)
        teamArray.push(manager);
        addHtml(manager);
    }
    else if (data.github) {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        teamArray.push(engineer);
        addHtml(engineer);
    }
    else if (data.school) {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        teamArray.push(intern)
        addHtml(intern);
    }

}


function startHtml() {
    const start = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./index.html", start, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}


function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        const office = employee.officeNum;
        const github = employee.github;
        const school = employee.school; 
        let data = "";
        if (employee.officeNum) {
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Number: ${office}</li>
            </ul>
            </div>
        </div>`
        }
        else if (employee.gitHub) {
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${github}</li>
            </ul>
            </div>
        </div>`;
        } 
        else {
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } 
        fs.appendFile("./index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });


    })
}

function finishHtml() {
    const ending = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./index.html", ending, function (err) {
        if (err) {
            console.log(err);
        };
    });
}

init(); 
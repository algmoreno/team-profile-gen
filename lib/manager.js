const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, idNum, email, officeNum) {
        this.officeNum = officeNum; 
    }


    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager; 
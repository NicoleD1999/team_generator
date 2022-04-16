const Employee = require('../lib/employee')

class Manager extends Employee {
    constructor (name, id, email, OfficeNumber) {
        super (name, id, email)
        this.OfficeNumber = OfficeNumber
    }

    officeNumber(){
        return this.OfficeNumber
    }
    getRole () {
        return "Manager"
    }
}

module.exports = Manager
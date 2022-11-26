const employee = require('./Employee');

class Manager extends employee{
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;

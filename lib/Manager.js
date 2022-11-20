const employee = require('./Employee');

class Manager extends employee{
  constructor(officeNumber) {
    super('Terran', id, 'terran2332e2@gmail.com');
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;

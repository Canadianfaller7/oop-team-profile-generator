const employee = require('./Employee');

class Intern extends employee{
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;

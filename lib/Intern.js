const employee = require('./Employee');

class Intern extends employee{
  constructor(school) {
    super('Kiara', id, 'kiaraiscute4353@gmail.com');
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

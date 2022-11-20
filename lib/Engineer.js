const employee = require('./Employee');

class Engineer extends employee{
  constructor(github) {
    super('Spencer', id, 'canadianfaller7@gmail.com');
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;

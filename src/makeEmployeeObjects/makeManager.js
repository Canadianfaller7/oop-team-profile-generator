const Manager = require('../../lib/Manager');

const createManager = answers => {
    const { managerName, employeeId, managerEmail, officeNumber } = answers;

    const manager = new Manager(managerName, employeeId, managerEmail, officeNumber);

    return manager;
}

module.exports = createManager;
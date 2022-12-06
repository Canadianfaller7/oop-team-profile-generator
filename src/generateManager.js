
const getManager = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter Managers name: ',
    validate: input => {
      if(input){
        return true;
      }
      else {
        console.log('Must have a name for the Manager.');
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please enter Managers id #: ',
    validate: input => {
      if(input){
        return true;
      }
      else {
        console.log('Must have Managers id #.');
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter the Managers email: ',
    validate: input => {
      if(input){
        return true;
      }
      else {
        console.log('Must have Managers email.');
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter your Office Number: ',
    validate: input => {
      if(input){
        return true;
      }
      else {
        console.log('Must have Managers office number.');
        return false
      }
    }
  },
]

module.exports = getManager;

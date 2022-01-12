const fs = require('fs');
const { prompt } = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var team = ['Manager','Engineer','Engineer','Engineer','Intern'];

const questions = {
  'Employee': ['name','id','email'],
  'Manager': ['officeNumber'],
  'Engineer': ['GitHub'],
  'Intern': ['school']
};

prompt({
  'type': 'list',
  'name':'employee',
  'message': 'What position would you like to fill?',
  'choices': ['Manager','Engineer','Intern']
}).then(role=>{
  prompt(
    questions.Employee.forEach(item => {
      {
      'type':'input',
      'name': item,
      'message': `What is your ${item}`
      }
    }))
})

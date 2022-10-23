// List Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const mysql = require('mysql2');

const listChoices = () => {
    inquirer.prompt ([
        {
            message: 'What would you like to do?',
            name: 'choice',
            type: 'list',
            choices: 
            [
                'View all employees', 
                'Add employee', 
                'Update employee role', 
                'View all roles', 
                'Add role', 
                'View all departments', 
                'Add department'
            ]
        }
    ]).then(answer => {
        switch(answer.choice){
            case 'View all employees': return viewEmployees();
            case 'Add employee': return addEmployee();
            case 'Update employee role': return updateRole();
            case 'View all roles': return viewRoles();
            case 'Add role': return addRole();
            case 'View all departments': return viewDepartments();
            case 'Add department': return addDepartment();
            default: return
        }
    })
}
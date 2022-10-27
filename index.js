// List Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'company_db'
    },
    console.log('Connected to DB')
);

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
        switch(answer.choice) {
            case 'View all employees': 
            viewEmployees();
            break;
            case 'Add employee':
            addEmployee();
            break;
            case 'Update employee role':
            updateRole();
            break;
            case 'View all roles':
            viewRoles();
            break;
            case 'Add role':
            addRole();
            break;
            case 'View all departments':
            viewDepartments();
            break;
            case 'Add department':
            addDepartment();
            break
            default: 
            return
        }
    })
}

const viewEmployees = () => {
    db.query(`SELECT * FROM employee`, (err,data) => {
        data ? console.table(data) : console.log(err)
        listChoices()
    });
}

const addEmployee = () => {}

const updateRole = () => {}

const viewRoles = () => {
    db.query(`SELECT * FROM emp_role`, (err, data) => {
        data ? console.table(data) : console.log(err)
        listChoices();
    });
}

const addRole = () => {}

const viewDepartments = () => {
    db.query(`SELECT * FROM department`, (err, data) => {
        data ? console.table(data) : console.log(err)
        listChoices();
    });
}
const addDepartment = () => {}

listChoices();
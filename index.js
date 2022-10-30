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
    db.query(`SELECT * FROM employee`, (err, data) => {
        data ? console.table(data) : console.log(err)
        listChoices()
    });
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter the employee\'s first name.'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter the employee\'s last name.'
        }
    ]).then (({firstName, lastName}) => {
        db.query(`SELECT emp_role.id, emp_role.title FROM emp_role`, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            const employeeRoles = results.map(({ id, title}) => ({ name: title, value: id }));
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'newEmployeeRole',
                    message: 'What is the new employee\'s role?',
                    choices: employeeRoles
                }
            ]).then((result) => {
                const employeeRoleId = result.newEmployeeRole;

                db.query(`SELECT * FROM employee`, (err, results) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    const managerList = results.map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'newEmployeeManager',
                            message: 'Who is this employee\'s manager?',
                            choices: managerList
                        }
                    ]).then((result => {
                        const managerId = result.newEmployeeManager;

                        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                        VALUES ('${firstName}', '${lastName}', '${employeeRoleId}', ${managerId})`, (err, result) => {
                            if(err) {
                                console.log(err);
                                return;
                            }
                            console.log(`New Employee: ${firstName} ${lastName} has been added!`);
                            listChoices();
                        });
                    }));
                });
            });
        });
    });
};

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
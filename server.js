const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

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
    ])
}
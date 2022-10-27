INSERT INTO department (department)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Human Resources');

INSERT INTO emp_role (title, salary, department_id)
VALUES ('Salesman', 40000.00, 1),
       ('Engineer', 70000.00, 2),
       ('Accountant', 50000.00, 3),
       ('Lawyer', 100000.00, 4),
       ('Recruiter', 30000.00, 5);

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ('Kevin', 'Draper', 1, NULL),
       ('Clyde', 'Shelton', 2, 1),
       ('Chris', 'Wolff', 3, 1),
       ('Rachel', 'Zane', 4, 1),
       ('Naomi', 'Lapaglia', 5, 1);
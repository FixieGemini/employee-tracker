INSERT INTO department (id, dep_name)
VALUES (001, 'Sales'),
       (002, 'Engineering'),
       (003, 'Finance'),
       (004, 'Legal'),
       (005, 'Human Resources');

INSERT INTO emp_role (id, title, salary, department_id)
VALUES (001, 'Salesman', 40000.00, 001),
       (002, 'Engineer', 70000.00, 002),
       (003, 'Accountant', 50000.00, 003),
       (004, 'Lawyer', 100000.00, 004),
       (005, 'Recruiter', 30000.00, 005);

INSERT INTO employee (id, first_name,last_name, role_id, manager_id)
VALUES (001, 'Kevin', 'Draper', 001, 001),
       (002, 'Clyde', 'Shelton', 002, 002),
       (003, 'Chris', 'Wolff', 003, 003),
       (004, 'Rachel', 'Zane', 004, 004),
       (005, 'Naomi', 'Lapaglia', 005, 005);
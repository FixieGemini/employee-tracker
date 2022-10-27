Select *
From department;

Select *
From emp_role;

Select * 
From employee;

select * 
from employee 
join emp_role on employee.role_id = emp_role.id;

select * 
from employee 
join emp_role on employee.role_id = emp_role.id 
join department on emp_role.department_id = department.id;
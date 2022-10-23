select * 
from employee 
join emp_role on employee.role_id = emp_role.id;

select * 
from employee 
join emp_role on employee.role_id = emp_role.id 
join department on emp_role.department_id = department.id;
-- 1. List the following details of each employee: employee number, last name, first name, sex, and salary

SELECT e.emp_no, e.last_name, e.first_name, e.sex, s.salary
FROM employees AS e
INNER JOIN  salaries AS s
ON s.emp_no = e.emp_no;

-- 2. List first name, last name, and hire date for employees who were hired in 1986

SELECT e.first_name, e.last_name, e.hire_date
FROM employees AS e
WHERE hire_date BETWEEN '01/01/1986' AND '12/31/1986';

-- 3. List the manager of each department with the following information: department number, department name, the manager's employee number, 
--    last name, first name

SELECT d_m.dept_no, depart.dept_name, d_m.emp_no, e.last_name, e.first_name
FROM dept_manager AS d_m
INNER JOIN employees AS e
ON e.emp_no = d_m.emp_no
INNER JOIN dept_emp AS d_e
ON e.emp_no = d_e.emp_no
INNER JOIN departments AS depart
ON d_e.dept_no = depart.dept_no;

-- 4. List the manager of each department with the following information: employee number, last name, first name, and department name

SELECT e.emp_no, e.last_name, e.first_name, depart.dept_name
FROM employees AS e
INNER JOIN dept_emp AS d_e
ON d_e.emp_no = e.emp_no
INNER JOIN departments AS depart
ON d_e.dept_no = depart.dept_no;

-- 5. List first name, last name, and sex for employees whose first name is "Hercules" and last names being with "B".

SELECT e.first_name, e.last_name, e.sex
FROM employees AS e
WHERE last_name LIKE 'B%' AND first_name = 'Hercules';

-- 6. List all employees in the Sales department, including their employee number, last name, first name, and department name

SELECT e.emp_no, e.last_name, e.first_name, depart.dept_name
FROM employees AS e
INNER JOIN dept_emp AS d_e
ON d_e.emp_no = e.emp_no
INNER JOIN departments AS depart
ON d_e.dept_no = depart.dept_no
WHERE depart.dept_name = 'Sales';

-- 7. List all employees in the Sales and Development departments, including their employee number, last name, first name, and department

SELECT e.emp_no, e.last_name, e.first_name, depart.dept_name
FROM employees AS e
INNER JOIN dept_emp AS d_e
ON d_e.emp_no = e.emp_no
INNER JOIN departments AS depart
ON d_e.dept_no = depart.dept_no
WHERE depart.dept_name = 'Sales' OR depart.dept_name = 'Development';

-- 8. In descending order, list the frequency count of employee last names, i.e., how many employees share each last name

SELECT last_name, COUNT(last_name) AS "Frequency"
FROM employees
GROUP BY last_name
ORDER BY "Frequency" DESC;
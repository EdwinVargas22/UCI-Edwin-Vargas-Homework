# Employee Database: A Mystery in Two Parts
![Database](https://user-images.githubusercontent.com/60836219/98505075-3ee44a80-220d-11eb-819d-9ae5b87bd679.jpg)
## Background
It is a beautiful spring day, and it is two weeks since you have been hired as a new data engineer at Pewlett Hackard. Your first major task is a research project on employees of the corporation from the 1980s and 1990s. All that remain of the database of employees from that period are six CSV files.

I will need to design the tables to hold data in the CSVs, import the CSVs into a SQL database, and answer questions about the data. In other words, I will perform:

1. Data Engineering

2. Data Analysis
### Data Modeling
First inspect the CSVs and sketch out an ERD of the tables.
![ERD ](https://user-images.githubusercontent.com/60836219/98505645-7b647600-220e-11eb-9296-4eb7622f6a56.png)
### Data Engineering
* Use the information you have to create a table schema for each of the six CSV files. Remember to specify data types, primary keys, foreign keys, and other constraints.

* Import each CSV file into the corresponding SQL table.
### Data Analysis
Once there is a complete database, do the following:

1. List the following details of each employee: employee number, last name, first name, sex, and salary.

2. List first name, last name, and hire date for employees who were hired in 1986.

3. List the manager of each department with the following information: department number, department name, the manager's employee number, last name, first name.

4. List the department of each employee with the following information: employee number, last name, first name, and department name.

5. List first name, last name, and sex for employees whose first name is "Hercules" and last names begin with "B."

6. List all employees in the Sales department, including their employee number, last name, first name, and department name.

7. List all employees in the Sales and Development departments, including their employee number, last name, first name, and department name.

8. In descending order, list the frequency count of employee last names, i.e., how many employees share each last name.
### Additional Task
As you examine the data, you are overcome with a creeping suspicion that the dataset is fake. You surmise that your boss handed you spurious data in order to test the data engineering skills of a new employee. To confirm your hunch, you decide to take the following steps to generate a visualization of the data, with which you will confront your boss:

1. Import the SQL database into Pandas.

2. Create a histogram to visualize the most common salary ranges for employees.
![Most Common Salary ranges for Employees](https://user-images.githubusercontent.com/60836219/98775158-63712b80-23a1-11eb-8c0b-4896c79bcda7.png)

3. Create a bar chart of average salary by title.
![Average Salary by Title](https://user-images.githubusercontent.com/60836219/98775199-813e9080-23a1-11eb-9f0d-d0d60250ee8d.png)

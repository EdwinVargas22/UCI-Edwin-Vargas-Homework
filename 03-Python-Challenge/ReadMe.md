# Python Homework - Py Me Up, Charlie

## PyBank
![largest-banks-in-the-world-648x364-c-default](https://user-images.githubusercontent.com/60836219/94639363-df4f6280-0290-11eb-9281-6a53825f46e1.jpg)

I was given a financial data called budget_data.csv which contains two columns: Date and Profit/Losses. (My company has lax standards of accounting so the records are simple.) My task is to create a Python script that will analyze the financial records of my company.

My task is listed below and I need to use Python scripts to find these answers:

* The total number of months included in the dataset
* The net total amount of "Profit/Losses" over the entire period
* The average of the changes in "Profit/Losses" over the entire period
* The greatest increase in profits (date and amount) over the entire period
* the greatest decrease in losses (date and amount) over the entire period

These are the general steps I took to find what I was asked for:

1. I created a path to where I saved the data
2. I created three empty list that will hold the answers for the variables that are going to run in the for loop
3. Opened the CSV file, split the data on commas, and skipped the header
4. For loop the total months and total profits in the for loop through the rows of the data and appended it to the empty list
5. Created another for loop but used range instead of the csvreader then appended the average change to the empty list set for it
6. Used the max and min functions on the average change to find the greatest increase and greatest decrease in profits 
7. Then used the index function on the average change and used the max and min functions adding 1 outside of the functions to find the months that correspond to the greatest increase and decrease profits.
8. Printed the summary talbe out
9. Created a path to a text file to export my summary table 

#### Results

![PyBank Results](https://user-images.githubusercontent.com/60836219/94640894-af09c300-0294-11eb-927a-4709bb08f5de.PNG)

These are the results I got when I ran my Python script. 

### PyPoll
![ballot-box-WEB](https://user-images.githubusercontent.com/60836219/94639378-e5454380-0290-11eb-88f9-38e8d399b34e.jpg)

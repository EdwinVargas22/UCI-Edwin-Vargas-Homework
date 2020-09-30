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

1. Imported OS and CSV
2. I created a path to where I saved the data
3. I created three empty list that will hold the answers for the variables that are going to run in the for loop
4. Opened the CSV file, split the data on commas, and skipped the header
5. For loop the total months and total profits in the for loop through the rows of the data and appended it to the empty list
6. Created another for loop but used range instead of the csvreader then appended the average change to the empty list set for it
7. Used the max and min functions on the average change to find the greatest increase and greatest decrease in profits 
8. Then used the index function on the average change and used the max and min functions adding 1 outside of the functions to find the months that correspond to the greatest increase and decrease profits.
9. Printed the summary table out
10. Created a path to a text file to export my summary table 

### Results

![PyBank Results](https://user-images.githubusercontent.com/60836219/94640894-af09c300-0294-11eb-927a-4709bb08f5de.PNG)

These are the results I got when I ran my Python script. 

#### PyPoll
![ballot-box-WEB](https://user-images.githubusercontent.com/60836219/94639378-e5454380-0290-11eb-88f9-38e8d399b34e.jpg)

My task is to help a small, rural town modernize its vote counting process. I was given a poll data called election_data.csv. The dataset has three columns: Voter ID, County, and Candidate. My task is to create a Python script that analzyes the votes and calculates each of the following:

* The total number of votes cast
* A complete list of candidates who received votes
* The percentage of votes each candidate won
* The total number of votes each candidate won
* The winner of the election based on popular vote

These are the general steps I took to find what I was asked for:

1. Imported OS and CSV
2. I created a path to where I saved the data
3. I created five variables equal to zero
4. Opened the CSV file, split the data on commas, and skipped the header
5. Ran the for loop through the row in the CSV file and added 1 each time time to the total votes when it ran through another new row
6. In the for loop used the if and elif functions 
7. Set the index 2 in row equal to the candidate names so it will add 1 to one of the five variables each time it found a candidate name equal to it
8. Calculate the percentage votes each candidate won by candidates votes divided by total votes time 100
9. Created two list one with the candidate names and the other with the five variables that contain the votes the candidates won
10. Zip the two list together and dict them
11. Used the max function on the dictionary to find the candidate who won the most popular votes by having a key
12. Printed the summary table out
13. Created a path to a text file to export my summary table 

##### Results

![PyPoll Results](https://user-images.githubusercontent.com/60836219/94641000-ed06e700-0294-11eb-81cf-a2be6406ff24.PNG)

These are the results I got when I ran my Python script.


import os
import csv

# Path to collect data from the csv file
budget_data_csv = os.path.join('.gitignore', 'budget_data.csv')

# Created empty lists that will iterate through certain rows for the variables below
total_months = []
total_profit = []
average_change = []

# Open the CSV file
with open(budget_data_csv) as csvfile:

    # It will split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Will skip the header
    header = next(csvreader)

    # Loop through the data
    for row in csvreader:

        # Add the total months and total profits to the lists assigned  
        total_months.append(row[0])   
        total_profit.append(int(row[1]))

    # Loop through the total profits to find the average profit change
    for i in range(len(total_profit)-1):

        # Add the average change of total profits to the list assigned
        average_change.append(total_profit[i+1]-total_profit[i])

# Find the max and min average change in total profits
greatest_increase_profit = max(average_change)
greatest_decrease_profit = min(average_change)

# Find the date that corresponds to the max and min average change in total profits
greatest_increase_month = average_change.index(max(average_change)) + 1
greatest_decrease_month = average_change.index(min(average_change)) + 1

# Print out the Summary Table
print("Financial Analysis")
print("----------------------------")
print(f"Total Months: {len(total_months)}")
print(f"Total: ${sum(total_profit)}")
print(f"Average Change: ${round(sum(average_change)/len(average_change),2)}")
print(f"Greatest Increase in Profits: {total_months[greatest_increase_month]} (${str(greatest_increase_profit)})")
print(f"Greatest Decrease in Profits: {total_months[greatest_decrease_month]} (${str(greatest_decrease_profit)})")

# Path to the text file
results_text = os.path.join('Financial Analysis Results.txt')

# Open the text file to write in
with open(results_text, 'w') as file:

    # Write down the Summary Table that will show up in the text file
    file.write("Financial Analysis")
    file.write("\n")
    file.write("---------------------------")
    file.write("\n")
    file.write(f"Total Months: {len(total_months)}")
    file.write("\n")
    file.write(f"Total: ${sum(total_profit)}")
    file.write("\n")
    file.write(f"Average Change: ${round(sum(average_change)/len(average_change),2)}")
    file.write("\n")
    file.write(f"Greatest Increase in Profits: {total_months[greatest_increase_month]} (${str(greatest_increase_profit)})")
    file.write("\n")
    file.write(f"Greatest Decrease in Profits: {total_months[greatest_decrease_month]} (${str(greatest_decrease_profit)})")


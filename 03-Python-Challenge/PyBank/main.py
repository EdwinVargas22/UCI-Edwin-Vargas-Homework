import os
import csv

# Path to collect date from teh Resources folder
budget_data_csv = os.path.join('.gitignore', 'budget_data.csv')

total_months = []
total_profit = []
average_change = []

# Read in the CSV file
with open(budget_data_csv) as csvfile:

    # It will split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Will skip the header
    header = next(csvreader)

    # Loop through the data
    for row in csvreader:

        total_months.append(row[0])   
        total_profit.append(int(row[1]))

    for i in range(len(total_profit)-1):

        average_change.append(total_profit[i+1]-total_profit[i])

greatest_increase_profit = max(average_change)
greatest_decrease_profit = min(average_change)

greatest_increase_month = average_change.index(max(average_change)) + 1
greatest_decrease_month = average_change.index(max(average_change)) + 1


# Print
print("Financial Analysis")

print("----------------------------")

print(f"Total Months: {len(total_months)}")
print(f"Total: ${sum(total_profit)}")
print(f"Average Change: ${round(sum(average_change)/len(average_change),2)}")
print(f"Greatest Increase in Profits: {total_months[greatest_increase_month]} (${str(greatest_increase_profit)})")
print(f"Greatest Decrease in Profits: {total_months[greatest_decrease_month]} (${str(greatest_decrease_profit)})")
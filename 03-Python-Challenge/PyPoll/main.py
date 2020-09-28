import os
import csv

# Path to collect data from the csv file
election_data_csv = os.path.join('.gitignore', 'election_data.csv')

total_votes = 0
khan_votes = 0
correy_votes = 0
li_votes = 0
otooley_votes = 0


# Open the CSV file
with open(election_data_csv) as csvfile:

    csvreader = csv.reader(csvfile, delimiter=',')

    header = next(csvreader)

    for row in csvreader:

        total_votes += 1

        if (row[2]) == "Khan":

            khan_votes += 1

        elif (row[2]) == "Correy":

            correy_votes += 1

        elif (row[2]) == "Li":

            li_votes += 1

        elif (row[2]) == "O'Tooley":

            otooley_votes += 1

khan_percentage_votes_won = (khan_votes/total_votes) * 100
correy_percentage_votes_won = (correy_votes/total_votes) * 100
li_percentage_votes_won = (li_votes/total_votes) * 100
otooley_percentage_votes_won = (otooley_votes/total_votes) * 100


print("Election Results")
print("--------------------------")
print(f"Total Votes: {(total_votes)}")
print("--------------------------")
print(f"Khan: {khan_percentage_votes_won:.3f}% ({khan_votes})")
print(f"Correy: {correy_percentage_votes_won:.3f}% ({correy_votes})")
print(f"Li: {li_percentage_votes_won:.3f}% ({li_votes})")
print(f"O'Tooley: {otooley_percentage_votes_won:.3f}% ({otooley_votes})")
print("--------------------------")

print("--------------------------")


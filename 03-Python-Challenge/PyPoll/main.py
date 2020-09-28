import os
import csv

# Path to collect data from the csv file
election_data_csv = os.path.join('.gitignore', 'election_data.csv')

# Created variables equal to zero
total_votes = 0
khan_votes = 0
correy_votes = 0
li_votes = 0
otooley_votes = 0

# Open the CSV file
with open(election_data_csv) as csvfile:

    # Split data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Skip header
    header = next(csvreader)

    # Loop through the data
    for row in csvreader:

        # Add 1 each time to total votes variable when it goes through a new row
        total_votes += 1

        # Finding the rows in index 2 who are equal to Khan
        if (row[2]) == "Khan":

            # Adding 1 to the khan votes variable each time it finds Khan
            khan_votes += 1

        # Finding the rows in index 2 who are equal to Correy
        elif (row[2]) == "Correy":

            # Adding 1 to the correy votes variable each time it finds Correy
            correy_votes += 1

        # Finding the rows in index 2 who are equal to Li
        elif (row[2]) == "Li":

            # Adding 1 to the li votes variable each time it finds Li
            li_votes += 1

        # Finding the rows in index 2 who are equal to O'Tooley
        elif (row[2]) == "O'Tooley":

            # Adding 1 to the otooley votes variable each time it finds O'Tooley
            otooley_votes += 1

# Calculating the percentage of votes each candidate won
khan_percentage_votes_won = (khan_votes/total_votes) * 100
correy_percentage_votes_won = (correy_votes/total_votes) * 100
li_percentage_votes_won = (li_votes/total_votes) * 100
otooley_percentage_votes_won = (otooley_votes/total_votes) * 100

# Created a candidates and votes list
candidates = ["Khan", "Correy", "Li", "O'Tooley"]
votes = [khan_votes, correy_votes, li_votes, otooley_votes]

# Zip the list together and created a dictinoary from it
candidates_votes = dict(zip(candidates, votes))

# Found the popular vote winner by using the max function of the dictionary
key = max(candidates_votes, key=candidates_votes.get)

# Printing out Summary Table
print("Election Results")
print("--------------------------")
print(f"Total Votes: {(total_votes)}")
print("--------------------------")
print(f"Khan: {khan_percentage_votes_won:.3f}% ({khan_votes})")
print(f"Correy: {correy_percentage_votes_won:.3f}% ({correy_votes})")
print(f"Li: {li_percentage_votes_won:.3f}% ({li_votes})")
print(f"O'Tooley: {otooley_percentage_votes_won:.3f}% ({otooley_votes})")
print("--------------------------")
print(f"Winner: {key}")
print("--------------------------")

# Path to text file
results_text = os.path.join('Election Results.txt')

# Open the text file to write in
with open(results_text, 'w') as file:
    
    # Write down the Summary Table that will show up in the text file
    file.write("Election Results")
    file.write("\n")
    file.write("---------------------")
    file.write("\n")
    file.write(f"Total Votes: {(total_votes)}")
    file.write("\n")
    file.write("---------------------")
    file.write("\n")
    file.write(f"Khan: {khan_percentage_votes_won:.3f}% ({khan_votes})")
    file.write("\n")
    file.write(f"Correy: {correy_percentage_votes_won:.3f}% ({correy_votes})")
    file.write("\n")
    file.write(f"Li: {li_percentage_votes_won:.3f}% ({li_votes})")
    file.write("\n")
    file.write(f"O'Tooley: {otooley_percentage_votes_won:.3f}% ({otooley_votes})")
    file.write("\n")
    file.write("---------------------")
    file.write("\n")
    file.write(f"Winner: {key}")
    file.write("\n")
    file.write("---------------------")
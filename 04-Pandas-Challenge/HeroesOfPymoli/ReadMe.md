# Heroes of Pymoli
![fantasy-landscape-art-artwork-nature-scenery](https://user-images.githubusercontent.com/60836219/95040129-a3990c00-0687-11eb-8532-0452e1f650af.jpg)

Heroes of Pymoli is a free-to-play game and even though it's free to play, players are encouraged to purchase optional items that enhance their experience.

My task for the independent gamming company who just recently released Heroes of Pymoli is to generate a report that breaks down the game's purchasing data into meaninful insights.

In order to begin working on this task you will need to open up your jupyter notebook, import pandas, reference the CSV file, and store it into a Panda DataFrame

### Player Count

* To find the total number of players who play this game I first had to use the drop_duplicates() function on the DataFrame so I don't count duplicate players more than once
* Then you count the total number of players and set it to a summary DataFrame to display it

![Players Count](https://user-images.githubusercontent.com/60836219/95040137-a8f65680-0687-11eb-8f2d-d640e7992730.PNG)

### Purchasing Analysis (Total)

* To find the number of unique items I used the len() and unique() function on the DataFrame
* To find the average price I used the mean() function on the DataFrame
* To find the number of purchases I used the len() function on the DataFrame
* To find the total revenue I used the sum() function on the DataFrame
* I then created a Summary DataFrame to display it but before you could display it, you need to use the map() function on the column that will display dollar amounts

![Purchasing Analysis (Total)](https://user-images.githubusercontent.com/60836219/95040167-be6b8080-0687-11eb-8328-9e4f87784655.PNG)

### Gender Demographics

* To find the amount of players per gender I needed to use the DataFrame that has the duplicates removed and then I used the value_counts() function on the DataFrame
* To find the percentage of players per gender I used the value_counts(normalize=True) function on the DataFrame then times it by 100
* I then created a summary DataFrame to display it but before you could display it, you need to use the map() function on the column that will display the percentage amount

![Gender Demographics](https://user-images.githubusercontent.com/60836219/95040198-cfb48d00-0687-11eb-9f10-f5d89325c1d1.PNG)

### Purchasing Analysis (Gender)

* First you need to use the groupby() function on the DataFrame
* Then you use the count(), mean(), and sum() function on the grouped DataFrame
* To calculate the average total purchase per person you will need to divide the total purchase value by the total gender count
* I then created a summary DataFrame to display it but before you could display it, you need to use the map() function on the three columns that will display dollar amounts

![Purchasing Analysis (Gender)](https://user-images.githubusercontent.com/60836219/95040208-d9d68b80-0687-11eb-804f-57cfd2f56357.PNG)

### Age Demographics 

* First need to create bins for the ages and create names for the bins
* Then used the pd.cut() function to add the bins and names of the bins to the DataFrame
* Then use the groupby() function on the names of the bins
* Used the count() function and divide total count by total players count then multiple by 100
* I then created a summary DataFrame to display it but before you could display it, you need to use the map() function on the column that will display the percentage amount

![Age Demographics](https://user-images.githubusercontent.com/60836219/95040261-fa064a80-0687-11eb-947f-31ba32e5e082.PNG)

### Purchasing Analysis (Age)

* First use the pd.cut() function to add the bins and names of the bins to the DataFrame
* Then use the groupby() function on the names of the bins
* Used the count(), mean(), and sum() function
* To calculate the average total purchase per person divide the average total purchase by the total count
* I then created a summary DataFrame to display it but before you could display it, you need to use the map() function on three columns that will display dollar amounts

![Purchasing Analysis (Age)](https://user-images.githubusercontent.com/60836219/95040265-fd99d180-0687-11eb-86fd-9660d9eb4b5a.PNG)

### Top Spenders

* Used the groupby() function on the "SN" column
* Used the count(), mean(), and sum() function
* I then created a summary DataFrame
* Use the sort_values() function to set the total purchase value column in descending order
* Used the style.format() function to set the average purchase price and total purchase columns to dollar values

![Top Spenders](https://user-images.githubusercontent.com/60836219/95285889-bb52ca80-0816-11eb-9273-8bfb1ae0fe3d.PNG)

### Most Popular Items

* Create a new DataFrame only keeping the "Item ID", "Item Name", and "Price" columns
* Used the groupby() function on the "Item ID" and "Item Name" columns
* Used the count(), mean(), and sum() function
* I then created a summary DataFrame 
* Used the sort_values() function to set the purchase count column in descending order
* Used the style.format() function to set the item price and total purchase value columns to dollar values

![Most Popular Items](https://user-images.githubusercontent.com/60836219/95285896-be4dbb00-0816-11eb-990c-72c0058036b2.PNG)

### Most Profitable Items

* Used the same Summary DataFrame that was used above but instead sort the total purchase value column in descending order by using the sort_values() function
* Used the style.format() function to set the item price and total purchase value columns to dollar values

![Most Profitable Items](https://user-images.githubusercontent.com/60836219/95285904-c148ab80-0816-11eb-9ce1-ddfd7f994c36.PNG)

### Trends

The first trend I noticed viewing the Purchasing Analysis (Gender) and Purchasing Analysis (Age) DataFrames is usually the group who's average purchase price is the highest means this group will also have the highest average total purchase per person. The other trend is the group who has the highest total purchase value does not necessarily mean they will have highest average purchase price and average total purchase per person. The last trend I noticed is the top two most popular items are also the top two most profitable items.


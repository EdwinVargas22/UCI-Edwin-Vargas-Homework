# VBA Stock Market Analyst


## Initial Stock Market Data:

 ![Before](https://user-images.githubusercontent.com/60836219/93963142-414c1d00-fd11-11ea-847a-f0f196387ea8.PNG)

### Project Background:
I was provided with a stock market data containing multiple years. In each of the years it contains multiple ticker names, dates, open prices, high prices, low prices, close prices, and volumes. My task was to create a summary table for each ticker name and find the yearly change, percent change, and total stock volume so the investor could easily see how each ticker name performed in a year. Another tasked that was asked for but not required was to create a summary table of the ticker who had the greatest percentage increase, greatest percentage decrease, and greatest total volume. It was also asked to include the value for those 3 tickers.
Solution to this project:
•	For the ticker name I made sure it will loop through the worksheet and stop when the next row contained a different ticker name.
•	Then I pulled the close price for the ticker name and the open price was set to the first ticker open price. I subtracted the close price to the open price to calculate the yearly change. 
•	Then I set a rule if the open price was different to zero it would then calculate the percent change by dividing the yearly change by the open price then multiply by 100
•	Then for the total stock volume it would continuously add the total stock volume until the next ticker name was different from the previous one
•	If the yearly change was greater than zero, I set a rule that would highlight it green and if the yearly change was less than or equal to zero it will highlight it red
•	I used the greater than and equal to in my code to calculate the greatest percentage increase, greatest percentage decrease, and greatest total volume ticker name plus the values for each one.

#### Final Stock Market Data for the years 2014-2016:
 

##### VBA Code:

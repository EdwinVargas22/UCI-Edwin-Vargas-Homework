# VBA Stock Market Analyst

![Stock Market Image](https://user-images.githubusercontent.com/60836219/93964168-d3edbb80-fd13-11ea-8a4f-6cf5e41bbf2d.jpg)

## Initial Stock Market Data:

![Before](https://user-images.githubusercontent.com/60836219/93963142-414c1d00-fd11-11ea-847a-f0f196387ea8.PNG)

### Project Background

I was provided with a stock market data containing multiple years and it looked like the image above. In each of the years it contains multiple ticker names, dates, open prices, high prices, low prices, close prices, and volumes. My task was to create a summary table for each ticker name and find the yearly change, percent change, and total stock volume so the investors could easily see how each ticker name performed in a year. Another tasked that was asked for but not required was to create a summary table of the ticker who had the greatest percentage increase, greatest percentage decrease, and greatest total volume. It was also asked to include the value for those 3 tickers.

#### Steps I Took

*	For the ticker name I made sure it will loop through the worksheet and stop when the next row contained a different ticker name.

*	Then I pulled the close price for the ticker name and the open price was set to the first ticker open price. I subtracted the close price to the open price to calculate the yearly change. 

*	Then I set a rule if the open price was different to zero it would then calculate the percent change by dividing the yearly change by the open price then multiply by 100

*	Then for the total stock volume it would continuously add the total stock volume until the next ticker name was different from the previous one

*	If the yearly change was greater than zero, I set a rule that would highlight it green and if the yearly change was less than or equal to zero it will highlight it red

*	I used the greater than and equal to in my code to calculate the greatest percentage increase, greatest percentage decrease, and greatest total volume ticker name plus the values for each one.

##### Final Stock Market Data for the years 2014-2016:
 
![Year 2016 Screenshot](https://user-images.githubusercontent.com/60836219/93963265-8b350300-fd11-11ea-9a2f-646bcdd9b0d0.PNG)

###### Final Outcome

The image above shows exactly how it looks after I ran my VBA script code. You could see the yearly change is highlighted red if it's negative and highlighted in green if it's positive. This information will really help the investors to see which ticker name performed great and which performed poorly. It will help them to know which ticker's they should choose if they want to have a positive gain.


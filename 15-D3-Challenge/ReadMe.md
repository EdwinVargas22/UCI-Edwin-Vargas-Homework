# Data Journalism and D3
![News](https://user-images.githubusercontent.com/60836219/104409387-061d6600-551b-11eb-936c-2f89c0c6b6f4.png)

## Background
Welcome to the newsroom! You've just accepted a data visualization position for a major metro paper. You're tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.

The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the assignment is based on 2014 ACS 1-year estimates from the US Census Bureau, but you are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

## Task

![Circle Chart](https://user-images.githubusercontent.com/60836219/104409384-03bb0c00-551b-11eb-8c9d-95089c47cda3.PNG)
![Body Paragraph](https://user-images.githubusercontent.com/60836219/104409385-04ec3900-551b-11eb-8628-92941926565b.PNG)

Using the D3 techniques, create a scatter plot that represents each state with circle elements. Code this graphic in an app.js file and you can pull in the data from data.csv by using the d3.csv function. 

Place additional labels in the scatter plot and give them click events so that the users can decide which data to display. Animate the transitions for the circles' locations as well as the range of the axes. This is going to be done for three risk factors for each axis. The scatter plot should appear like the image at the top of this section.

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: You'll need to use python -m http.server to run the visualization. This will host the page at localhost:8000 in your web browser.
* Hint: Try binding all of the CSV data to your circles. This will let you easily determine their x or y values when you click the labels.






Copyright
Trilogy Education Services © 2019. All Rights Reserved.

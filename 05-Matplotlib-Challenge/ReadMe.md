# Matplotlib Homework - The Power of Plots
![Science-scientists-SM](https://user-images.githubusercontent.com/60836219/95942316-b4d4cd80-0d97-11eb-8fd1-c811819f3fea.jpg)

While your data companions rushed off to jobs in finance and government, you remained adamant that science was the way for you. Staying true to your mission, you've joined Pymaceuticals Inc., a burgeoning pharmaceutical company based out of San Diego. Pymaceuticals specializes in anti-cancer pharmaceuticals. In its most recent efforts, it began screening for potential treatments for squamous cell carcinoma (SCC), a commonly occurring form of skin cancer.

As a senior data analyst at the company, you've been given access to the complete data from their most recent animal study. In this study, 249 mice identified with SCC tumor growth were treated through a variety of drug regimens. Over the course of 45 days, tumor development was observed and measured. The purpose of this study was to compare the performance of Pymaceuticals' drug of interest, Capomulin, versus the other treatment regimens. You have been tasked by the executive team to generate all of the tables and figures needed for the technical report of the study. The executive team also has asked for a top-level summary of the study results.

## Instructions

- Before beginning the analysis, check the data for any mouse ID with duplicate time points and remove any data associated with that mouse ID.

- Use the cleaned data for the remaining steps.

- Generate a summary statistics table consisting of the mean, median, variance, standard deviation, and SEM of the tumor volume for each drug regimen.

- Generate a bar plot using both Pandas's DataFrame.plot() and Matplotlib's pyplot that shows  the number of total mice for each treatment regimen throughout the course of the study.

  - NOTE: These plots should look identical.

- Generate a pie plot using both Pandas's DataFrame.plot() and Matplotlib's pyplot that shows the distribution of female or male mice in the study.

  - NOTE: These plots should look identical.

- Calculate the final tumor volume of each mouse across four of the most promising treatment regimens: Capomulin, Ramicane, Infubinol, and Ceftamin. Calculate the quartiles and IQR and quantitatively determine if there are any potential outliers across all four treatment regimens.


- Using Matplotlib, generate a box and whisker plot of the final tumor volume for all four treatment regimens and highlight any potential outliers in the plot by changing their color and style.

  -Hint: All four box plots should be within the same figure. Use this Matplotlib documentation page for help with changing the style of the outliers.

- Select a mouse that was treated with Capomulin and generate a line plot of tumor volume vs. time point for that mouse.

- Generate a scatter plot of mouse weight versus average tumor volume for the Capomulin treatment regimen.

- Calculate the correlation coefficient and linear regression model between mouse weight and average tumor volume for the Capomulin treatment. Plot the linear regression model on top of the previous scatter plot.

- Look across all previously generated figures and tables and write at least three observations or inferences that can be made from the data. Include these observations at the top of notebook.

## Observation

One observation I noticed is the company drug Capomulin has the smallest average tumor and median tumor which is telling us this drug does a better job at decreasing the tumor compared to the other drug treatments available. 

The second observation I made is from the boxplot Ramicane has the smallest final tumor volume compared to the other three drug regimens.

The third observation I noticed is, there is slightly a larger male population versus the female population by 1.0% which isn't a large difference. We could pretty much conclude the male population to female population is relatively equal.

The fourth observation I noticed in the scatter plot is that if the mice weight more then the average tumor volume will also be larger. This means there is a positive correlation between weight and average tumor volume.
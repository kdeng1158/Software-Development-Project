# Project Milestone 4 

## Features List
> ### Income and Cost Management
> > The customer will be able to input, update, or create sources of income and costs. This feature allows the user to keep their budget report as accurate as possible. 
> ### Get Investment Information
> > This will be a page that will provide users with external links to various investment options. This feature will consolidate investment articles, videos, and websites into one location.
> ### Provides general report of monthly spending
> > This will be the first feature a user sees when they log into their account. It will be a dashboard of their income and costs. This feature can also break down their costs into spending categories, and show various trends in their financial habits.
> ### Allows users to set savings and/or income/cost goals**
> > This feature provides users with the option to set income and/or cost goals. Such a feature allows the user to save and/or spend a set amount. The ability to set goals will encourage users to develop sound financial habits. 
> ### Allows users to aggregate their spending/income on various levels
> > This feature allows users to view their income and costs aggregated on various levels (year-to-date, past month, past week, etc). This allows users to view trends in their income and costs over various time periods. 
> ### Profile overview
> > The user will be able to see an overview of their account

## Architecture Diagram
- ![imagen](https://user-images.githubusercontent.com/97514357/159178359-15b12617-a29e-4dbf-a9ac-63586c60edc1.png)

## Front End Design
---
> ### Log In Page
> <img width="1294" alt="Screen Shot 2022-03-14 at 2 49 05 PM" src="https://user-images.githubusercontent.com/77687981/158258761-47ee8796-f89e-45a8-885a-c7c710844f73.png">  <br>
> ### Create Account Page
> <img width="1688" alt="Screen Shot 2022-03-17 at 4 32 55 PM" src="https://user-images.githubusercontent.com/77687981/158905108-94e154bf-33f3-4c1e-8722-308de2650044.png"><br>
> ### Expense Overview Page
> <img width="1728" alt="Screen Shot 2022-03-14 at 2 50 18 PM" src="https://user-images.githubusercontent.com/77687981/158258941-414add72-eaeb-47f2-bee6-bab248d48675.png">  <br>
> ### Investing Resources Page
> <img width="1726" alt="Screen Shot 2022-03-14 at 2 51 29 PM" src="https://user-images.githubusercontent.com/77687981/158259125-b891ff22-c00d-4f7f-80f8-6eb18419492b.png">  <br>
> ### Profile Overview
> <img width="1714" alt="Screen Shot 2022-03-17 at 4 30 21 PM" src="https://user-images.githubusercontent.com/77687981/158904889-1a6420e7-2e6e-498e-998d-13e942dd7821.png">



## Web Service Design
- There is a good chance that we will not need to use an API for our software. Most of our functionality focuses on user inputed information, and we don't need to find other data to support that. 
- The only place where we might need an API is on our Educational Resources page. For that, we wanted to find an API with beginner financial investing resources to help users get an introduction to investing and personal finance. We chose the API through New York Times called "Article Search" [`Link to API`](https://developer.nytimes.com/docs/articlesearch-product/1/overview). For this API, we would be able to send a GET request with specific parameters (key terms) to get articles from the NYT about those specified topics. A list of articles would be returned and could be formatted in the design we have already created to showacase the results of a user's search.
> - We would likely have to already narrow down the search by only allowing users to look up financial articles, and then let the users search the articles wtihin that given group. 



## Database Design
- ![imagen](https://user-images.githubusercontent.com/97514357/159178450-f356cb26-0ba9-4f17-ab88-4e883653e191.png)

## Challanges
- Challange/Risk 1: Not able fully implement the backend code for the website
> - Risk Mitigation Plan for #1
> > - Ask for advice from TA
> > - Look at lab examples and maybe borrow the code/concepts from it
- Challange/Risk 2: Creating a working database for the users with working security measures
> - Risk Mitigation Plan for #2  
> > - Ask for advice from TA
> > - See if there is any information from labs
> > - View websites and other helpful sources to help create login database with security measures
- Challange/Risk 3: Going overboard on the applications or not having enough
> - Risk Mitigation Plan for #3  
> > - Focus primarily on the core applications of the website
> > - Once they are finished, then could start added other features that would be useful/help the user



## Individual Contributions

> ### Kalvin Deng
- Facilitate Team Meetings
- Set up milestone submission outlines
- Help split up the work 
- Work on login and create user account page
- Added in the front end design pictures for milestone 4

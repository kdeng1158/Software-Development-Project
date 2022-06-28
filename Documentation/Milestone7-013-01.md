# Project Milestone 7 | Team 013-01: Budget Buddy

## Team Members 
Paige Burns, Kalvin Deng, Maria Garcia Fraile, Evan Ketellapper, John Le

## Project Description
 Budget Buddy is aimed at helping college students and young professionals budget their life. This application will include several features, including a spending and income log and an educational element to teach the young audience about investing and other financial management tasks. 

Users will be able to easily log every expense they have into the software. They will be able to categorize their expenses to see where they spend the bulk of their money and where they might need to budget. They will also be able to log their income in the app to be able to notice if they are living above their means (spending more than they make) or not. There will be several visualization tools such as tables and graphs that will help users visualize their spending habits and detect patterns for where they could reduce their spending. Users will then be able to implement a budget goal within the application (ex. “I will spend $200 a month on groceries”) and track their expenses to stay below their set budget.

The last feature of the application will be an educational feature. This part will hold information on how users will be able to start using more financial management tools and smartly invest and save their money for their futures. This will include information on starting a user’s 401k, Roth IRA, investing in stocks, etc. There will be information in the application as well as links to other sites, tutorials, classes, and companies that can help users begin their financial journey. 

## Project Tracker
> [`Link to Jira`](https://csci-3308-013-01.atlassian.net/jira/software/projects/M27/boards/1)
> Screenshot:
> ![imagen](https://user-images.githubusercontent.com/97514357/164146698-3e1060bf-2f13-4c27-a1aa-ed4d55639ce7.png)

## VCS
> [`Link to github`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01.git)
> > User Test cases in [`Milestone5-013-01`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/blob/main/milestonesubmissions/Milestone5-013-01.md)

## Video Demo
> [`Link To Demo Video`](https://www.youtube.com/watch?v=mXNlHvg93ZM)

## Deployment
1. [`Website Link`](https://budgetbuddy-013-01.herokuapp.com)
1. Requirements to use local host: add a .env enviroment with the followiing variables:POSTGRES_USER=postgres, POSTGRES_PASSWORD=pwd, POSTGRES_DB=football_db, NODE_ENV=development

## Individual Contributions
> ### Paige Burns
- Throughout this project, my main focus was the design elements of our applicaiton. I began with designing the wireframe of the application in figma and designing the logo. I then took responsibility of building out the expenses page and the navigational menu used on all the pages. I also helped edit the other pages to improve the cohesiveness of our website. I also coded the backend of the expenses page where users submitted expenses and income to our database and displayed it. The main languages I used were HTML, CSS, Javascript, and SQL. In the end I also made the base slide deck that we used to present. 
>> ### Commits Throughout The Semester
>> - [`Designed wireframe in Figma`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/b366e79aea6a483cacd540eea42cbf6e9e22600d)
>> - [`Coded Expenses Page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/6228f47532cb272cbff462ef755c572edea04107)
>> - [`Edited CSS and HTML of website pages`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/229d73cfd2c664d65c7521a37c4533c878e039ce)
>> - [`Converted all HTML files into EJS files and reformatted the GitHub to start including back-end code`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/471530a4fcb47b2336d6fc68e49134187f56e604)
>> - [`Started implementing EJS into expenses page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a5162c89b7e0dc4299de2ef0f90133511508b4d7)
>> - [`Finished back-end for the expenses page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/123d738fa95203650fdbc1639d60914bef157a94)

> ### Kalvin Deng
- Throughout the project, I was responsible for developing the front and back end of the login and create new account pages. The main languages I used were HTML, CSS, JavaScript, and SQL. I utilized passport and user session to manage identity access management to ensure users are capable of gaining access to their down data. After coding up the access management parts of the code, I was able to tell my teammates how to filter their SQL queries to only include the data for whichever user was logged in. 
>> ### Commits Throughout The Semester
>> - [`Set up the outline and linked our markdown files for our milestone submissions`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/68060220fabbf2abf38c416091e373fc8a5a1090)
>> - [`Created the front end for Login and Create Account pages`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/771abe775e61407bfc3729bdc64b06317d279b5a)
>> - [`Write the SQL code to create the tables for our database`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/67a7ca2410a7c49699bbfebcda67ea5184b9f4e9)
>> - [`Fixed the bugs we initally had when converting our files to EJS to allow my teammembers to be able to get the basic website running on Docker`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/2a3b3771d9c515e3ed6e80e8fc65de8439b19e4e)
>> - [`Wrote the code to manage user authentication and access for our website`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/0f2a5d68be2ffc3ed55d08cc26ba9f2333b4da82)
>> - [`Fixed various bugs and made sure our website ran on Docker for the final presentation`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a4cc6a79cd5b392e95494d477ce55184ef898ca7)
>> - [`Began the process of getting our website hosted on Heroku, and I moved our environment files out of github`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/d4a1f9b38ddbfdee6c7353fd2d4f94b0153975c6)
>> - [`Detect and fix bugs we had in our expenses page prior to hosting the website on Heroku`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a5f011ec24921d50249d8b0cd88a36bf700d9837)
>> - [`Film the final 5 minute demo video`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/942c9cc7cf21b69a462dbfc55f465bca7a1a373b)

> ### Maria Garcia Fraile
- Throughout the project, I was responsible for creating the design of our webiste on figma, I created the architectural diagram and the database design. I did the front end and back end of the profile page using HTML, JavaScript, CSS and NodeJS.
>> ### Commits Throughout The Semester
>> - [`Architecture Diagram first proposal`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/97634ef42db1476230687a234f656aeebd9db03b)
>> - [`Figma design`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/015456e22cb9e5533cb88d842cec0b16e7099283)
>> - [`Front end profile`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a00345bf435e3d714c6d37d524bf80f78409d883)
>> - [`Database relational model`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/5d4378804b2398a78dd924c65499268ddbb3913b)
>> - [`Corrected version of architecture diagram and database`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/364fe6f354b6dc978502d70b284de34de3e55df2)
>> - [`Final architecture diagram and database`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/394e99c43c3fa2c9ab13e06cc56ecf674ca1be5b)
>> - [`Final Profile Page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a2bac5900ed52806be67c55154fd397ae929114e)

> ### Evan Ketellapper
- Filler

> ### John Le
- Throughout this project, I was responsible for creating and finding information for the ‘Educational Resources’ page of our website. After I finished that page, I was responsible for deploying our final product to heroku. The coding languages that I used were HTML (for the design of the page), SQL (for storing the resources in the database), and JavaScript (for deploying the website on heroku). I also added a Dockerfile, and moved code around in our repository in order for the website to be successfully deployed to heroku.
>> ### Commits Throughout the Semester
>> - [`Initial design of the Educational Resources Page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/832ad42f504dd2409be1fac90d81e15416f887ff)
>> - [`Found first article to test the layout of page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/b9fa307dfdb91c6457313865533908ee8c95aad8)
>> - [`Found and added 5 resources and their descriptions to the page`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a514c41255153d8d2fa418b6a9c91de1f662b515)
>> - [`Fixed a design flaw in the Educational Resources page + Added resources to database`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/9978a9e5d450c073d017fe0dd967aee285755af6)
>> - [`Added files and shifted code around for successful deployment to heroku`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/4c58562f72cd4848a4666c71dc13d538bd26641e)

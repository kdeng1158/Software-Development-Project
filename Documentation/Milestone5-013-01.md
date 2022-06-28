# Project Milestone 5 | Team 013-01: Budget Buddy

## Team Members 
Paige Burns, Kalvin Deng, Maria Garcia Fraile, Evan Ketellapper, John Le

## Test Plan
### Feature 1: Create an Account
1. As a new user, I want to create an account, so I can access the website.
> Acceptance Criteria
> - A user cannot create an account without filling in all of the mandatory fields:
> > - First Name
> > - Last Name
> > - Email Address
> > - Password
> > - Confirm Password
> - Information is then stored in the 'users_db' table in the database.

### Feature 2: Login
1. As a current user, I want to be able to login to my account, so I can use the website.
> Acceptance Criteria
> - User authentication fails when the user provides invalid credentails:
> > - Username
> > - Password
> - The credentials given by the user is then checked to see if it matches what is stored in the 'user_db' table in the database.
> - Note that the password will be hashed before being inserted to the database.
> > - The will then gain access to the rest of the website.

2. As a user, if the login credentials are incorrect, then I want an error message to appear.
> Acceptance Criteria
> - The user isn't able to login if the at least one of the login credentials doesn't match what is in the 'user_db' table.
> > - Username
> > - Password
> - The user doesn't get to bypass the login screen without the correct credentials.
> - The user will see a message that explains why they were not able to login.

### Feature 3: View Expenses
1. As a user, I want to be able to view my expenses
> Acceptance Criteria
> - Once a user's login credentials are correct, the website will pull up the expenses of that person.
> > - Information that is pulled matches the ID of the user that is currently logged in.
> - The data that corresponds the the current user will be pulled from the 'transactions_db' table. The data will be aggregated into the necessary expenses.

2. As a user, I want to be able to add recent transactions to my account
> Acceptance Criteria
> - A user cannot submit a transaction unless the mandatory fields are completed and with valid data types.
> > - Name
> > - Type
> > - Date
> > - Category
> > - Occurance
> > - Amount
> - Once a user adds a transaction, then that information is stored in the 'transaction_db' table in the database.

### Feature 4: Read/Watch Resources
1. As a user, I want to a page where financial information is available to learn
> Acceptance Criteria
> > - Once a user clicks on one of the resources, it will take them to the page of various resources to learn more about investment options.

## Individual Contributions
> ### Paige Burns
- Copied Lab 7 format of files into repo, transferred all html files to be ejs files, created base .get functions for each page in server.js file, and changed all references in each page to call .get functions instead of calling file name in the folder. 
- Coded the Node.js for the Expenses page 
- Created slide deck for in class presentation for Milestone 6.
- [`Latest Commit`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/aab78cf896ac28d47fddc61836876b5287ddf522)

> ### Kalvin Deng
- Assisted in getting our code to work with Docker after Paige converted all our files to match Lab 7.
- Wrote the code to create the tables for our database. (create.sql)
- Created the updated ERD diagram based on our create.sql file
- Began writing the code for user authenticatin and verification for our final project.
- Assist in developing test cases for this milestone.
- Update Jira
- [`Latest Commit`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/e2cd6cc988477fdda28a11eac2305aa23dc33a71)

> ### Maria Garcia Fraile
- Modify architecture diaagram based on project 4 milestone
- Began writing code for update profile page

> ### Evan Ketellapper
- Added API calls for the dashboard
- Added income and expenses graph on the dashboard
- updated the sql to include a finances table

> ### John Le
- Created and filled out the Milestone 5 markdown
- Took TA meeting notes
- Found resources for the Resource page
- Worked on the Resources page
- [`Latest Commit`](https://github.com/cub-csci-3308-spring-2022/csci-3308-spring22-013-01/commit/a514c41255153d8d2fa418b6a9c91de1f662b515)

## Jira - Current Tasks at Hand
<img width="1927" alt="Screen Shot 2022-04-10 at 8 29 35 PM" src="https://user-images.githubusercontent.com/77687981/162655074-6083ec0b-845b-4aba-9043-5504dee84f2f.png">


# Project Milestone 5

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


> ### Kalvin Deng
- Assisted in getting our code to work with Docker after Paige converted all our files to match Lab 7.
- Wrote the code to create the tables for our database. (create.sql)
- Created the updated ERD diagram based on our create.sql file
- Began writing the code for user authenticatin and verification for our final project.
- Assist in developing test cases for this milestone.
- Update Jira

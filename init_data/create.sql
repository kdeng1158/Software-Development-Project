DROP TABLE IF EXISTS users_db CASCADE;
CREATE TABLE IF NOT EXISTS users_db(
  user_id SERIAL PRIMARY KEY,       /* Unique identifier for each player (it's possible multiple players have the same name/similiar information) */
  username VARCHAR(50) NOT NULL, /* account username */
  fname VARCHAR(50) NOT NULL,   /* The player's first */
  lname VARCHAR(50) NOT NULL,   /* The player's last */
  email VARCHAR(500),             /* user email*/
  user_password VARCHAR(100) NOT NULL,    /* user password */
  budget INT
);

DROP TABLE IF EXISTS transactions_db CASCADE;
CREATE TABLE IF NOT EXISTS transactions_db(
  transaction_id SERIAL PRIMARY KEY,       /* Unique identifier for each transaction  */
  user_id INT NOT NULL,       /* Foreign key that links all transaction to a user */
  transaction_name VARCHAR(50),   /* Name of the transaction */
  transaction_type VARCHAR(50),   /* Type of transaction | expense or income. We can also make it easier my making this a bool (is_expense) */
  transaction_date DATE NOT NULL,      /* Date that transaction occured, or when user input it*/
  category VARCHAR(100),   /* spending category the transaction falls under */
  amount FLOAT NOT NULL             /* transaction amount */
);

DROP TABLE IF EXISTS resources CASCADE;
CREATE TABLE IF NOT EXISTS resources(
  resource_id SERIAL PRIMARY KEY,       /* Unique identifier for resource */
  title VARCHAR(500) NOT NULL,        /* Title of the article */
  link VARCHAR(500) NOT NULL,         /* Link to the source */
  category VARCHAR(500)             /* eg. Retirement, stocks, etc.  */
);

INSERT INTO resources(title, link, category)
VALUES ('Investing for Beginners', 'https://www.annuity.org/financial-literacy/investing-for-beginners/', 'Starting Out'),
('Stocks', 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks', 'Stocks'),
('401(k) Plan: The Complete Guide', 'https://www.investopedia.com/terms/1/401kplan.asp', 'Retirement'),
('54 Ways to Save Money', 'https://americasaves.org/resource-center/insights/54-ways-to-save-money/', 'Advice'),
('How to Buy Bonds: A Primer for New Investors', 'https://www.forbes.com/advisor/investing/how-to-buy-bonds/', 'Bonds');
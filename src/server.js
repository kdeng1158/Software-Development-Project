/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
const bcrypt = require("bcrypt"); //used to hash our passwords
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
require('dotenv').config();



app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// START: CODE THAT WAS WRITTEN FROM A TUTORIAL
// source: https://github.com/conorbailey90/node-js-passport-login-postgresql
app.use(session({
	secret: 'ranSecretKey',
	resave: false,
	saveUninitialized: false //save session details if theres no value in the session?
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//setting up passport
var initializePassport = require('./passportConfig');
initializePassport(passport);
//END: CODE FROM TUTORIAL



//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.
		We'll be using `db` as this is the name of the postgres container in our
		docker-compose.yml file. Docker will translate this into the actual ip of the
		container for us (i.e. can't be access via the Internet).
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab,
		we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database. We set this in the
		docker-compose.yml for now, usually that'd be in a seperate file so you're not pushing your credentials to GitHub :).
**********************/
const dev_dbConfig = {
	host: 'db',
	port: 5432,
	database: process.env.POSTGRES_DB,
	user:  process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD
};

/** If we're running in production mode (on heroku), the we use DATABASE_URL
 * to connect to Heroku Postgres.
 */
 const isProduction = process.env.NODE_ENV === 'production';
 const dbConfig = isProduction ? process.env.DATABASE_URL : dev_dbConfig;
 
 // Heroku Postgres patch for v10
 // fixes: https://github.com/vitaly-t/pg-promise/issues/711
 if (isProduction) {
   pgp.pg.defaults.ssl = {rejectUnauthorized: false};
 }

const db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

// ***** RENDER WEBSITE - LOGIN PAGE *****
app.get('/', checkAuthenticated, function(req, res) {
	res.render('pages/LoginPage',{
		my_title:"Login Page"
	});
});

//***** GET LOGIN PAGE *****
app.get('/LoginPage', checkAuthenticated,  function(req, res) {
	res.render('pages/LoginPage',{
		my_title:"Login Page"
	});
});



// ***** GET CREATE NEW ACCOUNT PAGE *****
app.get('/createNewAccount', checkAuthenticated, function(req, res) {
	res.render('pages/createNewAccount',{
		my_title:"Create New Account",
		errors: ""
	});
});


// ***** POST CREATE NEW ACCOUNT PAGE *****
app.post('/createNewAccount', async (req, res) => {
	var username = req.body.username;
	var fname = req.body.fname;
	var lname = req.body.lname;
	var email = req.body.email;
	var password = req.body.password;
	var password2 = req.body.password2;
	var create_errors = [];

	// REGEX code to verify the minimum requierments for passwords
	var lowerCaseLetters = /[a-z]/g; // lowerCaseLetters
    var upperCaseLetters = /[A-Z]/g; // upperCaseLetters
    var numbers = /\d/g; // digits
    var symbols = /[!@#$%^&*()]/g; // symbols !@#$%^&*()
    var minLength = 8; // : min length 

	// check for a capital letter
	if (!(password.match(upperCaseLetters))) {
		create_errors.push({message: 'Password must contain an uppercase letter'})
	}
	// check for a lowercase letter
	if (!(password.match(lowerCaseLetters))) {
		create_errors.push({message: 'Password must contain a lowercase letter'})
	}
	// check for a number
	if (!(password.match(numbers))) {
		create_errors.push({message: 'Password must contain a number'})
	}
	// check for a symbol !@#$%^&*()
	if (!(password.match(symbols))) {
		create_errors.push({message: 'Password must contain at least one of the following symbols: !@#$%^&*()'})
	}
	// check for min length
	if(password.length < 8){
		create_errors.push({message: 'Password must be at least 8 characters long.'})
	}
	// check password == confirm password
	if(password != password2){
		create_errors.push({message: "Passwords do not match"})
	}

	// START: CODE THAT WAS WRITTEN FROM A TUTORIAL
	// source: https://github.com/conorbailey90/node-js-passport-login-postgresql

	//check if we have errors
	if(create_errors.length > 0){
		return res.render("pages/createNewAccount", {
			my_title: "Create New Account",
			errors: create_errors
		})
	}

	else{
		//START  KALVINS CODE
		var hashedPassword = await bcrypt.hash(password, 10);

		var insert_statement = `INSERT INTO users_db(username, fname, lname, email, user_password)
			VALUES('${username}', '${fname}', '${lname}', '${email}', '${hashedPassword}')
			RETURNING user_id, username, user_password;`
		
		db.task('get-everything', task => {
			return task.batch([
				task.any(insert_statement) //"info[0]"
			]);
		})
	
		.then(info => {
			req.flash('success_msg', "You are now registered, please login.");
			res.redirect('/LoginPage');
		});
		//END KALVINS CODE
	}
	// END: CODE FROM TUTORIAL
});

// ***** POST LOGIN PAGE *****
app.post('/LoginPage', passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/LoginPage',
	failureFlash: true
}));

// START: CODE THAT WAS WRITTEN FROM A TUTORIAL
// source: https://github.com/conorbailey90/node-js-passport-login-postgresql
app.get('/logout', (req,res) => {
	req.logOut();
	req.flash('success_msg', "You have logged out");
	res.redirect('LoginPage');
});
// END CODE FROM TUTORIAL


//dashboard
app.get('/dashboard', checkNotAuthenticated, function(req, res) {
	console.log(req.user.user_id);
	var userID = req.user.user_id;
	db.task('get-everything', task => {
        return task.batch([
            task.any(`SELECT DISTINCT category FROM transactions_db WHERE user_id = '${userID}';`),
            task.any(`select category,SUM(amount) as money_in_category from transactions_db WHERE user_id = '${userID}' AND transaction_type = 'Expenses' GROUP BY category;`),
			task.any(`SELECT budget FROM users_db WHERE user_id = '${userID}';`),
			task.any(`SELECT SUM(amount) as sum FROM transactions_db WHERE user_id = '${userID}' AND transaction_type = 'Expenses';`)
        ]);
    })
	.then(info => {
		//console.log(info[0].income);
		//console.log(info[0]);
		//console.log(info[1]);
		//console.log(info[2][0].budget - info[3][0].sum);
		//console.log(info[3][0].sum);
		let expenseLabels = [];
		let expenseAmount = [];
		try {
			info[1].map((item) => {
			expenseAmount.push(item.money_in_category);
			expenseLabels.push(item.category);
			});
		} catch (error) {
			console.log(error);
		}
		//console.log(expenseLabels);
    	res.render('pages/dashboard',{
				my_title: 'Dashboard Page',
				labels: expenseLabels,
				amount: expenseAmount,
				budget: info[2][0].budget - info[3][0].sum,
				sum: info[3][0].sum
			})
    })
	.catch(err => {
		console.log('error', err);
		res.render('pages/dashboard', {
			my_title: 'Dashboard Page',
			labels: 'err',
			amount: [],
			budget: [],
			sum: []
		})
	});
});


app.get('/expenses', checkNotAuthenticated, function(req, res) {
	var user = req.user.user_id;
	var query = `SELECT * FROM transactions_db WHERE user_id=${user};`;
	db.any(query)
        .then(function (rows) {
            res.render('pages/expenses',{
				my_title: "Expenses Page",
				expenses: rows			
			})
        })
        .catch(function (err) {
            console.log('error', err);
            req.flash('error', err);
            res.render('pages/expenses',{
                my_title: "Expenses Page",
                expenses: ''
            })
        })
});

app.post('/expenses', checkNotAuthenticated, function(req, res) {
	var name = req.body.name;
	var type = req.body.type_choice;
	var date = req.body.date;
	var category = req.body.category_choice;
	var amount = req.body.amount;
	var user = req.user.user_id;
	var insert_statement = `INSERT INTO transactions_db (user_id, transaction_name, transaction_type , transaction_date, category, amount) VALUES (${user},'${name}','${type}','${date}','${category}',${amount});`;
	var expense_show = `SELECT * FROM transactions_db WHERE user_id=${user};`;

	db.task('get-everything', task => {
        return task.batch([
			task.any(insert_statement),
            task.any(expense_show)
        ]);
    })
    .then(info => {
    	res.render('pages/expenses',{
				my_title: "Expenses Page",
				expenses: info[1]
			})
    })
    .catch(err => {
            console.log('error', err);
            res.render('pages/expenses', {
                my_title: 'Expenses Page',
                expenses: ''
            })
    });
});

app.post('/expenses/budget', checkNotAuthenticated, function(req, res) {
	var budget = req.body.budget;
	var user = req.user.user_id;
	var insert_statement = `UPDATE users_db SET budget = ${budget} WHERE user_id =${user};`;
	var expense_show = `SELECT * FROM transactions_db WHERE user_id = ${user};`;

	db.task('get-everything', task => {
        return task.batch([
			task.any(insert_statement),
            task.any(expense_show)
        ]);
    })
    .then(info => {
    	res.render('pages/expenses',{
				my_title: "Expenses Page",
				expenses: info[1]
			})
    })
    .catch(err => {
            console.log('error', err);
            res.render('pages/expenses', {
                my_title: 'Expenses Page',
                expenses: ''
            })
    });
});

app.get('/my_profile', checkNotAuthenticated, function(req, res) {
	var user = req.user.user_id;
	var query = `SELECT * FROM users_db WHERE user_id=${user};`;
	db.any(query)
        .then(function (rows) {
            res.render('pages/my_profile',{
				my_title: "Profile Page",
				user_info: rows[0]			
			})
        })
        .catch(function (err) {
            console.log('error', err);
            req.flash('error', err);
            res.render('pages/my_profile',{
                my_title: "Profile Page",
                users_info: ''
            })
        })
});

app.get('/prediction',  checkNotAuthenticated, function(req, res) {
	res.render('pages/prediction',{
		my_title:"Prediction Page"
	});
});

app.get('/resources',  checkNotAuthenticated, function(req, res) {
	res.render('pages/resources',{
		my_title:"Resources Page"
	});
});

// START: CODE THAT WAS WRITTEN FROM A TUTORIAL
// source: https://github.com/conorbailey90/node-js-passport-login-postgresql
function checkAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return res.redirect('/dashboard');
	}
	next();
}
function checkNotAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/LoginPage');
}
//END CODE FROM TUTORIAL


//checks will run on for 3000 if its not hosted on heroku
const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`Express running → PORT ${server.address().port}`);
  });

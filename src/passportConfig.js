const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var pgp = require('pg-promise')();

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

var db = pgp(dbConfig);

// START: CODE THAT WAS WRITTEN FROM A TUTORIAL
// source: https://github.com/conorbailey90/node-js-passport-login-postgresql
function initialize(passport) {
    const authenticateUser = (username, password, done) => {
        
        // START: KALVINS CODE
        var query1 = `SELECT * FROM users_db WHERE username = '${username}';`
		db.task('get-everything', task => {
			return task.batch([
				task.any(query1) //"info[0]"
			]);
		})
	
            .then(info => {
                const user = info[0][0]; //setting the user
                bcrypt.compare(password, user.user_password, (err, isMatch) => {
                    if(err){
                        throw err;
                    }
                    if(isMatch){
                        //done(the_error, theUser)
                        return done(null, user);
                    }
                    else{
                        return done(null, false, {
                            message:"Password is not correct"
                        });
                    }
                })
            })
            .catch(err => {
                return done(null, false, {message:"This account does not exist."});
            });
        //END: KALVINS CODE
    }

    passport.use(new localStrategy({
        usernameField: 'username',
        passwordField: 'password'}, 
        authenticateUser));

    passport.serializeUser((user, done) => done(null, user.user_id));
    
    //END CODE FROM TUTORIAL

    passport.deserializeUser((id, done) => {
        var query12 = `SELECT * FROM users_db WHERE user_id = ${id};`
        db.task('get-everything', task => {
			return task.batch([
				task.any(query12) //"info[0]"
			]);
		})
	
            .then(info => {
                return done(null, info[0][0]);
            })
            .catch(err => {
                return done(err);
            });
    });
}

module.exports = initialize;
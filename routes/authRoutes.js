const passport = require('passport');
const chalk = require('chalk');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',

    (req, res, next) => {


      passport.authenticate('google', (error, user, info) => {
        // this will execute in any case, even if a passport strategy will find an error
        // log everything to console
        console.log(chalk.red(error));
        console.log(chalk.blue('user'), user);
        console.log(chalk.blue('info'), info);

        if (error) {
          res.status(401).send(error);
        } else if (!user) {
          res.status(401).send(info);
        } else {
          next();
        }

        res.status(401).send(info);
      })(req, res);
    },

    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

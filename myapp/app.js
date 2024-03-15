const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('./config/passport'); 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const wineRouter = require('./routes/wineRoutes');
const parcelleRouter = require('./routes/parcelleRoutes')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(passport.initialize()); // Initialisez Passport.js middleware

// Utilisez Passport.js pour protéger les routes nécessitant une authentification
const protectedRoutes = require('./routes/protectedRoutes');
app.use('/api', passport.authenticate('jwt', { session: false }), protectedRoutes);

app.use('/api', wineRouter); // Utilisation des routes sous /api
app.use('/api', parcelleRouter);

app.use(function(req, res, next) {
  res.status(404).json({ message: 'Not found' }); // Réponse JSON pour les routes non trouvées
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.stack); // Affichage de l'erreur dans la console
  res.status(500).json({ message: 'Internal server error' }); // Réponse JSON pour les erreurs internes du serveur
});

module.exports = app;

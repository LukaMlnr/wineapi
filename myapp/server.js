const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize'); // Importez votre instance Sequelize
const wineRoutes = require('./routes/wineRoutes'); // Importez vos routes pour les vins

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser les corps des requêtes JSON
app.use(bodyParser.json());

// Définir le répertoire public pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes pour les vins
app.use('/api/wines', wineRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Synchroniser la base de données Sequelize et démarrer le serveur
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

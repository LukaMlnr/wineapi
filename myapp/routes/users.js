const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserService = require('../services/userService'); // Assurez-vous d'importer votre service utilisateur

const userService = new UserService(); // Créez une instance du service utilisateur

// Route pour l'inscription (création d'un nouvel utilisateur)
router.post('/register', async (req, res) => {
  try {
    // Vérifiez d'abord si l'utilisateur existe déjà dans la base de données
    const existingUser = await userService.findUserByUsername(req.body.username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hachez le mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Créez un nouvel utilisateur dans la base de données en utilisant le service utilisateur
    await userService.createUser(req.body.username, hashedPassword);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route pour la connexion (authentification de l'utilisateur)
router.post('/login', async (req, res) => {
  try {
    // Recherchez l'utilisateur dans la base de données
    const user = await userService.findUserByUsername(req.body.username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Vérifiez le mot de passe
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Générez un token JWT pour l'utilisateur
    const token = jwt.sign({ id: user.id }, 'cle123', { expiresIn: '12h' }); 
    
    // Renvoyez le token JWT en réponse
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
const userController = require('../controllers/userController');

// Pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Pour récupérer tous les utilisateurs
router.get('/users', userController.getAllUsers);

// Pour récupérer un utilisateur par son ID
router.get('/users/:id', userController.getUserById);

// Pour mettre à jour un utilisateur par son ID
router.put('/users/:id', userController.updateUserById);

// Pour supprimer un utilisateur par son ID
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;

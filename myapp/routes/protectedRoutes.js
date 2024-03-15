const express = require('express');
const router = express.Router();

// Middleware de vérification du token JWT
const verifyToken = (req, res, next) => {
    // Récupérer le token d'authorization du header
    const bearerHeader = req.headers['authorization'];
    
    if (typeof bearerHeader !== 'undefined') {
        // Séparer le token du 'Bearer '
        const bearerToken = bearerHeader.split(' ')[1];
        // Ajouter le token à la requête
        req.token = bearerToken;
        next();
    } else {
        // Le token n'est pas présent
        res.sendStatus(403); // Forbidden
    }
};

// Route protégée
router.get('/protected', verifyToken, (req, res) => {
    // Vérifier le token JWT
    jwt.verify(req.token, 'cle123', (err, authData) => {
        if (err) {
            // Erreur de vérification du token
            res.sendStatus(403); // Forbidden
        } else {
            // Token valide
            res.json({ message: 'Access granted!', authData });
        }
    });
});

module.exports = router;

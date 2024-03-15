const User  = require('../models/User');

class UserService {
  async createUser(username, password) {
    try {
      const newUser = await User.create({ username, password });
      return newUser;
    } catch (error) {
      throw new Error('Erreur lors de la création de l\'utilisateur');
    }
  }

  async findUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error('Erreur lors de la recherche de l\'utilisateur');
    }
  }

  async findUserByUsername(username) {
    try {
      const user = await User.findOne({ where: { username } });
      return user;
    } catch (error) {
      throw new Error('Erreur lors de la recherche de l\'utilisateur par nom d\'utilisateur');
    }
  }

  async updateUser(userId, newUserData) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }
      await user.update(newUserData);
      return user;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }
      await user.destroy();
      return true;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de l\'utilisateur');
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de tous les utilisateurs');
    }
  }
}

module.exports = UserService;

const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await userService.createUser(username, password);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error getting all users:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateUserById = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await userService.updateUserById(userId, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user by ID:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await userService.deleteUserById(userId);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user by ID:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const User = require('../models/user');

//Register a new user
exports.registerUser = async(req, res) => {
    try{
        const { username, email, password, gender, age } = req.body;

        let user = new User({
            username,
            email,
            password,
            gender,
            age
        });

        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

//Get all users in descending order
exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find().sort({age:-1});
        res.json(users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

//Edit a user
exports.editUser = async (req, res) => {
    try{
        const {id} = req.params;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(id, updates, {new: true});
        res.json(user);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};

//Delete a user
exports.deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        res.json({message: 'User deleted successfully'});
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};
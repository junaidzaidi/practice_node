const userService = require('../../services/users/user')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers()
        res.status(200).json(users)
    }
    catch (err) {
        console.error("Failed to fetch all users due to error: ", err)
        res.status(500).json({error: "Failed to fetch all users"})
    }
}

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.userId
        if (!userId) {
            res.status(400).json({message: "Invalid Request. UserId must be provided"})
        }
        const userWithId = await userService.getUserById(userId)
        res.status(200).json(userWithId)
    }
    catch (err) {
        console.error("Failed to fetch all users due to error: ", err)
        res.status(500).json({error: "Failed to fetch all users"})
    }
}
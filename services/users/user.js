
const users = [{
    id: 1,
    name: "Junaid",
    age: 27,
    gender: "Male"
},
{
    id: 2,
    name: "Amna",
    age: 29,
    gender: "Female"
},
{
    id: 3,
    name: "Zoya",
    age: 1,
    gender: "Female"
}]

exports.getAllUsers = async () => {
    // Virtual delay for network call
    await new Promise((resolve) => { setTimeout(resolve, 200) })
    return users
}

exports.getUserById = async (userId) => {
    // Virtual delay for network call
    await new Promise((resolve) => { setTimeout(resolve, 200) })
    return await users.find(item => item.id == userId)
}
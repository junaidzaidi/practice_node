exports.logger = (req, res, next) => {
    console.log(`LOGS: Got Request:\n Request Method: ${req.method}\n Request URL: ${req.url}`)
    next()
}

exports.dummyUserApiAuthentication = (req, res, next) => {
    console.log("--------------User Authenticated-------------")
    next()
}
function requireUser(req, res, next) {
  if (!req.user) {
    res.status(401)
    next ({
      name: "MissingUserError",
      message: "You are required to be successfully logged in"


    })
  }

  next()

}

module.exports = {
  requireUser
}
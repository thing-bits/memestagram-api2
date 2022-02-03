
const getProfile = (req, res) => {
  res.status(200).json(res.locals.user)
}

module.exports = {
  getProfile
}

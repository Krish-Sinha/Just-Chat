const jwt = reuire("jsonwebtoken")

const generateToken = (id) => {
	return jwt.sign({ id })
}

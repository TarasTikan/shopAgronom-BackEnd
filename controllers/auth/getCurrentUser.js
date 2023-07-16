const getCurrentUser = async(req, res) => {
    const {email,name,surname,phone} = req.user

    res.json({ email, name, surname, phone });
}
module.exports = getCurrentUser
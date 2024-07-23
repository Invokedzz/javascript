module.exports = (req, res, next) => {
    console.log(`Vi que postou algo, ${req.query}`);
    next();
}
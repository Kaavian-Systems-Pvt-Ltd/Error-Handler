const convert = async(req, res, next) => {
    const { data } = req.query;
//   console.log(text,253);
    res.json({ data: data.toUpperCase()})
}

module.exports = { convert };
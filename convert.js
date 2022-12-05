const convert = async(req, res) => {
    const { data } = req.query;
//   console.log(text,253);
    return res.json({ data: data.toUpperCase()})
}

module.exports ={ convert };
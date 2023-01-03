const ErrorHandler = (err, req, res, next) => {
    res.json({ error: 'Unexpected Error Occured' });
}

const ErrorWrapper = fn => (req, res, next) => {
    if (fn.constructor.name === 'AsyncFunction') {
        fn(req, res).catch((err) => {
            return res.json({ error: 'Unexpected Error Occured' });
        })
        return true;
    } else {
        return ErrorHandler(err, req, res, next);
    };
}

module.exports = { ErrorHandler, ErrorWrapper };

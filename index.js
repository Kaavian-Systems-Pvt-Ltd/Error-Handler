/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
const ErrorHandler = (fn) => (req, res) => {
  if (fn.constructor.name === 'AsyncFunction') {
    fn(req, res).catch((err) => res.status(500).json({ message: 'Unexpected Error Occured' }));
  } else {
    try {
      fn(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Unexpected Error Occured' });
    }
  }
};

module.exports = { ErrorHandler };

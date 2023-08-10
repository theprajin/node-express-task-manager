const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong. Please try again" });
    }
  };
};

module.exports = asyncWrapper;

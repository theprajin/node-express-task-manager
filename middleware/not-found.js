const notFound = (re1, res) => res.status(404).send("Route does not exist");

module.exports = notFound;

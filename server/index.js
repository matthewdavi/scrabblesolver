/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const { find } = require("./utils");
exports.findWords = (req, res) => {
  const message = find(req.body.word);
  res.status(200).send(message);
};

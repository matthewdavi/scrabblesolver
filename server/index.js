/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const { find } = require("./utils");
const cors = require("cors");
const _findWords = (req, res) => {
  const message = find(req.body.word);
  res.status(200).send(message);
};

exports.findWords = (req, res) => {
  cors(req, res, () => {
    _findWords(req, res);
  });
};

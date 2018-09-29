/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const { find } = require("./utils");
const _findWords = (req, res) => {
  const message = req.query.word
    ? find(req.query.word)
    : { word: "error", score: 0 };
  res.status(200).send(message);
};

exports.findWords = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  _findWords(req, res);
};

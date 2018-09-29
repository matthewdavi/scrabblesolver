/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const { find } = require("./utils");
const _findWords = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  const message = find(req.body.word.slice(0, 8));
  res.status(200).send(message);
};

exports.findWords = (req, res) => {
  _findWords(req, res);
};

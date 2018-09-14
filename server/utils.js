const wordJson = require("./dictionary.json");

const findWords = (word, list) => {
  const bagContains = (x, y) => Object.keys(y).every(k => x[k] >= y[k]);
  const letterBag = list => {
    const x = {};
    for (const i of list) {
      x[i] = (x[i] || 0) + 1;
    }
    return x;
  };

  const b = letterBag(word.toUpperCase());
  return list
    .filter(w => bagContains(b, letterBag(w.word)))
    .filter(obj => obj.word !== "")
    .sort((a, b) => b.score - a.score);
};
const find = word => findWords(word, wordJson);
module.exports = { find };

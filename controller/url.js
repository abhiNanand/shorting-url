const shortid = require("shortid"); //ye ek package hai jo url ko short karega.
const URL = require("../models/url");


async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is requried" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

module.exports = {
  handleGenerateNewShortURL,
};

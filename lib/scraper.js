const cheerio = require('cheerio');
const axios = require('axios');

const scrapeTitle = async (url) => {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    return $('title').text();
  } catch (err) {
    return 'Error scraping';
  }
};

module.exports = { scrapeTitle };

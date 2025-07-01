const axios = require('axios');

const fetchJson = async (url, options = {}) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    return { error: err.message };
  }
};

module.exports = { fetchJson };

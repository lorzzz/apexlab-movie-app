const http = require("axios");
const { getWikipediaSearchUrl } = require("../helpers/urlHelper");

const getWikipediaData = async (searchTerm) => {
  try {
    const response = await http.get(getWikipediaSearchUrl(searchTerm));
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = getWikipediaData;
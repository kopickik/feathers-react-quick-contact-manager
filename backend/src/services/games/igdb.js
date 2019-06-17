require('dotenv').config()
const axios = require('axios')

function extractArtworks(id) {
  axios({
    method: 'POST',
    url: process.env.IGDB_URL+'/artworks',

  })
}

module.exports = function populateGames() {
  axios({
    method: 'POST',
    url: process.env.IGDB_URL+'/games',
    headers: {
      'Accept': 'application/json',
      'user-key': process.env.IGDB_KEY
    },
    data: 'fields name, artworks, screenshots, release_dates; search "final fantasy"; limit 25;'
  })
    .then(response => {
      // console.log(response.data)
    })
    .catch(err => {
      console.error(err)
    })
}

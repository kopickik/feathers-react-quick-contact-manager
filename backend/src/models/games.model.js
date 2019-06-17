// Games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const games = new Schema({
    name: String,
    release_dates: [String],
    screenshots: [String],
    artworks: [String],
  }, {
    timestamps: true
  });

  return mongooseClient.model('games', games);
};

// Initializes the `Games` service on path `/games`
const createService = require('feathers-mongoose');
const createModel = require('../../models/games.model');
const hooks = require('./games.hooks');
const igdbFetcher = require('./igdb')

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/games', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('games');

  service.hooks(hooks);

  const test = () => igdbFetcher()

  test()

};

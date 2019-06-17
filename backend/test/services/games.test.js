const assert = require('assert');
const app = require('../../src/app');

describe('\'Games\' service', () => {
  it('registered the service', () => {
    const service = app.service('games');

    assert.ok(service, 'Registered the service');
  });
});

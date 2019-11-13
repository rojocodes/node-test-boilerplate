var request = require('supertest');


var port = process.env.PORT || 4000;
const route = '/api/getName';
request = request('http://localhost:' + port);

describe('1) get ' + route, function () {
  it('responds with - the name is:rojocodes', function (done) {
    request
      .get(route)
      .expect(200, {
        message: 'the name is:rojocodes'
      }, done);
  });
});
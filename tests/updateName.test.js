var request = require('supertest');

var port = process.env.PORT || 4000;
const route = '/api/updateName';
request = request('http://localhost:' + port);

describe('1) POST ' + route + ' with name in json body', function () {
  it('responds with -name updated to: body.name', function (done) {
    request
      .post(route)
      .set('Accept', 'application/json')
      .send({
        "name": "rojocodesbad",
      })
      .expect(200, {
        "message": 'name updated to: rojocodesbad'
      }, done);
  });
});
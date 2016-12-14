var chai = require('chai');

foo = 'string'

chai.should();

describe('dummy_test', function() {
  it('should work', function() {
    foo.should.be.a('string');
  })
})

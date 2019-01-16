var assert = require('assert');
var { 
  fBase, 
  fDivideByThreeOrFive,
  fDivideByThreeAndFive,
  fDivideComposed,
  fDivideComposedDivisibleDynamic,
} = require('./script');

describe('testing functions that returns if is divisible or not', function() {
  describe('the value should be divisible by 3', function() {
    it('should returns PLIM', function() {
      assert.equal(fBase(3,3), 'PLIM');
    });
  });

  describe('the value should not be divisible by 3', function() {
    it('should returns number, because its not divisible', function() {
      assert.equal(fBase(1,3), 1);
    });
  });

  describe('the value should be divisible by 3', function() {
    it('should returns PLIM', function() {
      assert.equal(fDivideByThreeOrFive(3,3), 'PLIM');
    });
  });

  describe('the value should not be divisible by 3', function() {
    it('should returns number, because its not divisible', function() {
      assert.equal(fDivideByThreeOrFive(1,3), 1);
    });
  });

  describe('the value should be divisible by  5', function() {
    it('should returns PLIM', function() {
      assert.equal(fDivideByThreeOrFive(25,5), 'PLIM');
    });
  });

  describe('the value should not be divisible by 3', function() {
    it('should returns number, because its not divisible', function() {
      assert.equal(fDivideByThreeOrFive(9,5), 9);
    });
  });

  describe('the value should be divisible by 3 AND 5', function() {
    it('should returns PLIMPLIM, because is divisible 3 AND 5', function() {
      assert.equal(fDivideByThreeAndFive(15), 'PLIMPLIM');
    });
  });

  describe('the value should be divisible by 3 OR 5', function() {
    it('should returns number 20, because 20 is divisible by 5', function() {
      assert.equal(fDivideByThreeAndFive(20), 20);
    });
  });


  describe('the value should be divisible by 3 OR 5', function() {
    it('should returns PLIM, because is divisible by 5', function() {
      assert.equal(fDivideComposed(20), 'PLIM');
    });

    it('should returns number 1, because the number 1 is not divisible by 3 OR 5', function() {
      assert.equal(fDivideComposed(1), 1);
    });
  });

  describe('the first argument passed should be divisible the second and third arguments', function() {
    it('should returns PLIM, because is divisible by 5', function() {
      assert.equal(fDivideComposedDivisibleDynamic(20, 3, 5), 'PLIM');
    });

    it('should returns PLIMPLIM, because the number 15 is divisible by 3 and 5', function() {
      assert.equal(fDivideComposedDivisibleDynamic(15, 3, 5), 'PLIMPLIM');
    });
  });

  describe('the values passed danymic should not be divisible', function() {
    it('should returns number 20, because number 1 is not divisible by 3 OR 6', function() {
      assert.equal(fDivideComposedDivisibleDynamic(20, 3, 6), 20);
    });
    
    it('should returns number 20, because number 1 is not divisible by 6 OR 7', function() {
      assert.equal(fDivideComposedDivisibleDynamic(20, 6, 7), 20);
    });
  });
});
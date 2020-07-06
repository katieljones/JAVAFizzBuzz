describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3 and replaces with Fizz', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('divisible by 5 and replaces with Buzz', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('divisible by 3 and 5 and replaces with FizzBuzz', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
  });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
   });


});

});

class Fizzbuzz {

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "FizzBuzz";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Fizz";
    }
      return number
    }




}

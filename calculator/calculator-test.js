
it('should calculate the monthly rate correctly', function () {
  const formValues = {
    amount: 10000,
    years: 10,
    rate: 5.6
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('109.02');
});


it("should return a result with 2 decimal places", function() {
  const formValues = {
    amount: 10000,
    years: 12,
    rate: 20.2
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('185.06');
});

describe("Terrible handling", () => {
it("should NOT handle negative numbers", () => {
  const formValues = {
    amount: -2000,
    years: 10,
    rate: 9.4
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('0');
});

it("should handle terribly high interest rates", function() {
  const formValues = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('82.50');
});

it("Should not handle more than 49 years for the loan!", () => {
  const formValues = {
    amount: 1000,
    years: 50,
    rate: 10.12
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('0');
});

});

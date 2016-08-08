describe("BMICalculator", function() {
  var bmi_calculator;
  var person;
describe("Metric", function() {
  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });
  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
})
describe("Imperial", function() {
  beforeEach(function() {
    person = new Person({weight: 198, height: 73});
    calculator = new BMICalculator();
  });
  it("calculates BMI for a person using Imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(26.12);
  });
})
});

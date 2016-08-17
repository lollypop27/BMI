describe("Person", function() {
  var person;

  describe("Metric", function() {
    var person;

    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(186);
    });

    it("should calculate BMI value", function() {
      person.calculate_bmi("metric");
      expect(person.bmiValue).toEqual(26.01);
    });

    it("should have a BMI Mesage", function() {
      person.calculate_bmi("metric");
      expect(person.bmiMessage).toEqual("Overweight");
    });
  });
});

describe("Imperial", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 198, height: 73});
  });

  it("should have weight of 198", function() {
    expect(person.weight).toEqual(198);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(73);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi("imperial");
    expect(person.bmiValue).toEqual(371.55);
  });

  it("should have a BMI Mesaage", function() {
    person.calculate_bmi("imperial");
    expect(person.bmiMessage).toEqual("Obese");
  });

});

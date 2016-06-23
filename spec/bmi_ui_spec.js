describe('BMI_UI - index.html', function() {
  describe("Metric", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#metric').prop("checked", true)
        $('#weight').val('90');
        $('#height').val('186');
        $('#calculate').trigger('click');
    });
    it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });
    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
    });
})
  describe("Imperial", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#imperial').prop("checked", true)
        $('#weight').val('198');
        $('#height').val('73');
        $('#calculate').trigger('click');
    });
    it("displays BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.12');
    });
    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
    });
  })
});

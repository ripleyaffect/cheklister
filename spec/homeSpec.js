describe("Index Page", function() {

	beforeEach(function() {
    	browser().navigateTo('/');
	});

	it("should hava one title", function() {
		expect(element('.title').count()).toBe(1);
	});

	it("should have one checklist", function() {
		expect(element('.checklist').count()).toBe(1);
	});

	it("should have five priority buttons", function() {
		expect(element('.pri-button').count()).toBe(5);
	});

	it("should add an element with the text 'New item'", function() {
		element('#p-3-add').click();
		expect(element('.item').count()).toBe(6);
	});

	it("should allow for deleting all elements", function() {
		element('.delete-button').click();
		expect(element('.item').count()).toBe(0);
	});
});
var expect =chai.expect;
describe("ItemView", function() {
	describe("constructor", function() {
		it("should have a default name", function() {
			var item = new Todo.ItemView();
			expect(item.name).to.equal("item3");
		});
		it("should set todo name if provided", function() {
			var items = new Todo.ItemsView("item3");
			expect(items.name).to.equal("item3");
		});
	});
	describe("#display",function(){
		it("should throw if no target is passed in", function() {
			expect(function() {
				(new ItemView()).display();
			}).to.throw(Error);
		});
		
	});
});
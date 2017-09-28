var expect =chai.expect;
describe("ItemsView", function() {
	describe("constructor", function() {
		it("should have a default name", function() {
			var items = new Todo.ItemsView();
		
			expect(items.name).to.equal("item2");
		});

		it("should set todo name if provided", function() {
			var items = new Todo.ItemsView("item2");
			expect(items.name).to.equal("item2");
		});
  });
	
	describe("#display", function() {
		it("should throw if no target is passed in", function() {
			expect(function() {
			(new ItemsView()).display();
			}).to.throw(Error);
		});
		it("should dispaly new item if target is passed", function() {
			
			displaying = (new Todo.ItemsView("item2")).display("item2");
			expect(displaying).to.equal("item2");
		});
	});
	
	describe("#remove", function() {
		it("should throw if no target is passed in", function() {
			expect(function() {
			(new ItemsView()).remove();
			}).to.throw(Error);
		});
		it("should dispaly new item if target is passed", function() {
			this.timeout(10000);
			displaying = (new Todo.ItemsView("item2")).remove("item2div");
			expect(displaying).to.equal("item2div");
		});
	});
});
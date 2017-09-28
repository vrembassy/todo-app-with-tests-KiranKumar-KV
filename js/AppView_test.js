var expect =chai.expect;
describe("AppView", function() {
	describe("constructor", function() {
		it("should have a default name", function() {
			var AppView = new Todo.AppView();
		
			expect(AppView.name).to.equal("item2");
		});

		it("should set todo name if provided", function() {
			var AppView= new Todo.AppView("item1");
			expect(AppView.name).to.equal("item1");
		});
  });
	
	describe("#display", function() {
		it("should throw if no target is passed in", function() {
			expect(function() {
			(new AppView()).display();
			}).to.throw(Error);
		});
		it("should dispaly new item if target is passed", function() {
			
			displaying = (new Todo.AppView("item1")).display("item1");
			expect(displaying).to.equal("item1");
		});
	});
	
	describe("#add", function() {
		it("should throw if target is passed in", function() {
			expect(function(){
				(new Todo.AppView()).add();
			}).to.throw(Error);
		});
	});
});
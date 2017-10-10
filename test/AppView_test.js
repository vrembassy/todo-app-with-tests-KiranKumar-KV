var expect = chai.expect;

describe("AppView Test Cases", function(){
	"use strict";

	var items,name,app;
	var todo = {id: "2", name: "sleep", state: "checked"};
	var $div,$checkbox,$delButton,$outdiv;

	beforeEach(function(){
		items = new Todo.dependencies.items(todo);
		app = new Todo.dependencies.app(todo);
		item = new Todo.dependencies.item(todo);
		$div = document.createElement('DIV');
		$checkbox = document.getElementById("buttonEat");
		name = $checkbox.previousSibling;
	});
	
	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(app).to.be.an.instanceOf(Todo.AppView);
			expect(app.name).to.be.deep.equal(todo);
		});
	});
	describe("display", function(){
		it("should return the html content", function() {
			expect($div.innerHTML =item.display("kiran","kirandiv")).to.be.a('string');
		});
	});
});
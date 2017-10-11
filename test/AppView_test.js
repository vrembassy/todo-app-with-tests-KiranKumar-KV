var expect = chai.expect;

describe("AppView Test Cases", function(){
	"use strict";

	var items,name,app;
	var todo = {id: "2", name: "sleep", state: "checked"};
	var $div,$checkbox,$delButton,$itemBox;

	beforeEach(function(){
		$itemBox= document.getElementById("todoTextBox");
		items = new Todo.dependencies.items(todo);
		app = new Todo.dependencies.app(todo);
		item = new Todo.dependencies.item(todo);
		$div = document.createElement('DIV');
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
			expect(app.display("vaishak")).to.be.a('string');
			items.remove("vaishakdiv","buttonvaishak");
		});
	});
	
	describe("add", function(){
		describe("checking check function",function(){
		it("Event should fire on pressing enter button",function(){
			this.timeout(10000);
			var eventObj = document.createEvent("Events");
			eventObj.initEvent("keydown", true, true);
			$itemBox.value = "dencil";
			eventObj.keyCode = 13;
			$itemBox.dispatchEvent(eventObj);
			expect(document.getElementById("dencildiv")).to.exist;
			items.remove("dencildiv","buttondencil");
		});
	});
});
});
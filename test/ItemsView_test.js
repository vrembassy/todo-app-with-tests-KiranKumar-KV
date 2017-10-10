var expect = chai.expect;

describe("ItemsView Test Cases", function(){
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
			expect(items).to.be.an.instanceOf(Todo.ItemsView);
			expect(items.name).to.be.deep.equal(todo);
		});
	});
	
	describe("display", function(){
		it("should return the html content", function() {
			expect($div.innerHTML =item.display("kiran","kirandiv")).to.be.a('string');
		});
	});
	
	describe("remove", function(){
        it("should delete the element", function() {
			this.timeout(10000);
            app.display("avinash");
            item.remove("avinashdiv");
			var divid = document.querySelector("avinashdiv");
			expect(divid).to.be.null;
        });
    });
	describe("checking the deligation", function(){
        it("check strike effect", function(){
            $checkbox.click();
			expect(name.classList.contains('addlabel')).to.be.true;
			$checkbox.click();
        });
		it("removing the element",function(){
			app.display("shishir");
            $outdiv = document.getElementById("shishirdiv");
			$delButton = document.getElementById("shishirdelete");
			$delButton.click();
			expect($delButton.classList.contains('deletestyle')).to.be.true;
			expect($outdiv.innerHTML).to.be.eql('');
		});
	});
});
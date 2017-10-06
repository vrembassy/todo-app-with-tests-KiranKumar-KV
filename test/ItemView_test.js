var expect = chai.expect;

describe("ItemView Test Cases", function(){
"use strict";

var item,app,name;
var todo = {id: "1", name: "eat", state: "checked"};
var $checkbox;

	beforeEach(function(){
		item = new Todo.ItemView(todo);
		app = new Todo.AppView();
		$checkbox=document.getElementById("buttonEat");
		name =$checkbox.previousSibling;
	});

	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(item).to.be.an.instanceOf(Todo.ItemView);
			expect(item.name).to.be.deep.equal(todo);
		});
	});
	
	describe("display", function(){
        it("should return the html content", function() {
            expect(item.display()).to.be.a('string');
        });
    });
	
	describe("remove", function(){
        it("should delete the element", function() {
			this.timeout(10000);
            app.display("kiran");
            item.remove("kirandiv");
			var divid = document.querySelector("kirandiv");
			expect(divid).to.be.null;
        });
    });
	
	describe("check the checkbox status", function(){
        it("check strike effect", function(){
            $checkbox.click();
			expect(name.classList.contains('addlabel')).to.be.true;
        });
        it("normal effect", function(){
            $checkbox.click();
            expect(name.classList.contains('addlabel')).to.be.false;
        })
    });
}); 	
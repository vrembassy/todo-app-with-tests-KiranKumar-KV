window.Todo = window.Todo || {};        
window.Todo.ItemsView =
(function(window){
    // private methods
	var todo = {id: "1", name: "eat", state: "unchecked"};
	var divid ="div"+todo.id;
	var item;
	var $div,divid;
    //ItemsView constructor
		function ItemsView(todo) {
			this.todo = todo;
			this.item =new Todo.ItemView(todo);
			this.$div = $createElDiv ("div");
			//$div.id = items+"div";
			
			}	
		
    // ItemsView public methods
		ItemsView.prototype.init = function() {		
			var Item = new Todo.ItemView();
			Item.init();   
		};
 
        ItemsView.prototype.display = function () {
			var items = this.todo;
			//var item1 = document.querySelector("#todoTextBox");
			//item1.value = null;
			//$div = document.createElement('DIV');
			//var divid = $div.id;
			var stat = "unchecked";
			//var Item = new Todo.ItemView(todo);
			//alert(this.$div);
			this.$div.innerHTML =this.item.display();
			//var ul = document.querySelector("#itemContainer");
			//$ul.appendChild($div);
			console.log("new TODO item added");
			//var insertedItems = {id : divid, name : items, state : stat};
			//var store = new Todo.Store();
			//store.save(insertedItems);
			return this;
		};
               
		ItemsView.prototype.assignListeners = function(){
			var Items = new ItemsView();
			var Item = new Todo.ItemView();
			var store = new Todo.Store();
			console.log("reached delegation");
			var id = event.target.id;
			item = event.target;
			console.log(item);
			if (item.classList.contains("checkButton")){
				var DivId = event.target.getAttribute("divid");
				Item.checkBoxEffect(id,DivId);
			}
			else if(item.classList.contains("deletestyle")){	
				var outerDivId = event.target.getAttribute("divid");
				console.log(outerDivId);
				Items.remove(outerDivId);													//remove (ItemsView-->ItemView)
				store.remove(outerDivId);														//delete (ItemsView-->Store)
				}
		};
		
		ItemsView.prototype.remove = function () {
			//var Item = new Todo.ItemView(todo);
			this.item.remove();
			$removeEl(this.$div);
			this.$div=null;
			return this;	
		};
		
		ItemsView.prototype.clearScreen = function(){
			var clrbutton = document.querySelector("#clrButton");
			//var Item = new Todo.ItemView();
			this.item.remove();
			
		};
    return ItemsView;     
})(window);
 
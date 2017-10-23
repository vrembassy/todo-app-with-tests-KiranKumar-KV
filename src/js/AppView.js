window.Todo = window.Todo || {};        
window.Todo.AppView = 
(function(){
    "use strict";
		var toDoItems = {},items;	      													  				//object to store items and status
		window.toDoItems = toDoItems;
	//var store=new Todo.Store();
			
		function AppView(todo) {
        	this.todo = todo;
			this.items = new Todo.ItemsView(todo);
		}
          
		AppView.prototype.init = function() {
            var ulElement = document.querySelector("#itemContainer");
			var itemText = document.querySelector("#todoTextBox");
			var clrbutton = document.querySelector("#clrButton");
			itemText.addEventListener("keydown" ,this.add, false);       				//textbox eventlistener
			//clrbutton.addEventListener("click",Items.clearScreen);        				//clear screen button eventlistener
			//ulElement.addEventListener("click",Items.assignListeners);  				//checkbutton and deletebutton eventlistener
			//var items = store.init();
			this.items.init();																//init (AppView-->ItemsView)
			//this.display(this.name);
		};  
	
		AppView.prototype.display = function(){
			this.items.display();
			return this;				
		};
		AppView.prototype.add = function(){
			var itemText = document.querySelector("#todoTextBox");
			if(event.keyCode === 13){
				console.log('textbox input taken');
				if (itemText.value.length < 1 || itemText.value == " "){
					alert("enter proper input");
				}
				else{  	
					//var Items=new Todo.ItemsView();
					this.items.display();					  				//call to display new entered item  display(AppView--ItemsView)
				}
			}
		};
    return AppView; 
})();
 
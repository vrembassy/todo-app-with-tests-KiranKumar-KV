window.Todo = window.Todo || {};        
window.Todo.ItemView =
(function(window){
    // private methods
    "use strict"; 
	var todo = {id: "1", name: "eat", state: "unchecked"};
	var divid = "div"+todo.id;
	
    //ItemView constructor
		function ItemView(todo) {
			this.todo = todo; 	
			
			this.$el = $createEl("li"); 
			this.$el.id = this.elId = "item_" + this.itemid;
			
			$delegate(this.$el,"checkButton","click",this.checkBoxEffect.bind(this));
			$delegate(this.$el,"deletestyle","click",this.remove.bind(this));
			
			return this;
        }
	// ItemView public methods
        ItemView.prototype.init = function() {
			var newInputItem = document.querySelector("#todoTextBox");
			var clrscr = document.querySelector("#clrButton");    
        };
 
        ItemView.prototype.display = function () {
			var items = this.todo;
			//var ul = document.querySelector("#itemContainer");			var count =ul.childNodes.length;
			//var val=this.divid.value;
			
			var buttonid="button"+this.todo.id;
			//alert(divid);
			var elementArray = [];
			var index =0;
			//elementArray[index++] = "<li class='horline' id="+items+"li>";
			elementArray[index++] = "<span >"+items+"</span>";
			elementArray[index++] = "<input type = 'button' class = 'checkButton' value = '&#10004' id = '"+buttonid+"' divid = '"+this.divid+"'/>";
			elementArray[index++] = "<input type = 'button' divid = "+this.divid+" id = "+items+"delete"+" class = 'deletestyle' value = '&#10008'>" ;
			//elementArray[index++] = "</li>";
			elementArray = elementArray.join("");	
			//return elementArray;
			//alert(this.$el);
			//this.$el.append(elementArray);
			this.$el.innerHTML = elementArray;
			return this;
		};
				
		ItemView.prototype.checkBoxEffect = function(){					
			
			//var checkBox = document.getElementById(id);
			//var name = checkBox.previousSibling;
			this.$el.classList.toggle("addlabel");
			if(this.$el.classList.contains("addlabel")){
				todo.state = "checked";
				console.log(todo);
				return this;
			}
			else{
				todo.state = "unchecked";
				console.log(todo);
			}
		};
				
        ItemView.prototype.remove = function () {
			this.divid = divid;
			if(divid == "clrButton"){
				var newInputItem = document.querySelector("#todoTextBox");
				newInputItem.removeEventListener("keydown",Todo.AppView.add);
				var clrscr = document.querySelector("#clrButton");						
				clrscr.removeEventListener("click",Todo.AppView.clearScreen);
				document.body.innerHTML = null;
				console.log("Clear screen, inputbox Event listener removed and screen cleared");
			}
			else{
				var decision = confirm("Do you want to delete?");
				if(decision == true){
					var outerDivId = "#"+divid;
					console.log(outerDivId);
					//var outerDiv = document.querySelector(outerDivId);
					//outerDiv.innerHTML = ""; //this also works
					$removeEl(this.$el);
					this.$el=null;
					console.log("todo item deleted successfully");
					}
					else {
						alert("You chose not to delete that item");
					}
				}
			return this;
		};
	return ItemView;
                     
})(window);
	
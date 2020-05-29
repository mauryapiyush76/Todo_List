//'use strict'
//var ul = document.getElementById('todoslist')
/*
var toggleCheck = function(){
      let parent = this.parentNode;
      parent.classList.toggle('checked');
}

var deleteTodo = function(){
      let todoLi = this.parentNode;
      todoLi.remove();
    };
*/

var createTodo = function(todo) {

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function(){
        let parent = this.parentNode;
        parent.classList.toggle('checked');
      }

    var label = document.createElement('label');
    label.innerHTML = todo ;

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function(){
        let todoLi = this.parentNode;
        todoLi.remove();
    }
  
    var list = document.createElement('li')

    list.appendChild(checkbox);
    list.appendChild(label);
    list.appendChild(deleteButton);

   
  
    return list;
}

var addbutton = document.getElementById('add');
addbutton.onclick = function(){

    let parent = this.parentNode;
    var addTextInput = parent.children[0];

/*
    var addTextInput = parent.children[0];
    if(addTextInput.value === " "){
        return;
    }
    else{
        createTodo(addTextInput.value);
        addTextInput = "";
    }
*/
    
    if(addTextInput.value ===" "){
      return;
      }
      else{
        var li = createTodo(addTextInput.value);
        var ul = document.getElementById('todoList');
        ul.appendChild(li);
        addTextInput.value = "";
    }
      
}
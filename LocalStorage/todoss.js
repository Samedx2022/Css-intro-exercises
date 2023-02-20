document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("todoList");
    let newTD = document.getElementById("everyTD");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("todo").value;

      let removeButton = document.createElement("button");
      removeButton.innerText = "Unadd";
  
      newTD.appendChild(newTodo);
      newTodo.appendChild(removeButton);
  
      todoForm.reset();
    });
  
    newTD.addEventListener("click", (event) => {
      const tagLowerCase = event.target.tagName.toLowerCase();
      if (tagLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
        localStorage.setItem('newTodo:', newTodo)
      } else if (tagLowerCase === "button") {
        event.target.parentNode.remove();
        localStorage.removeItem(newTodo)
      }
    });
  });

  // hoping to get feedback

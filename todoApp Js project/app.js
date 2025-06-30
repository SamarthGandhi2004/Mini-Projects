const addBtn=document.querySelector('#addTodo');
const todoList=document.querySelectorAll('.todos');
addBtn.addEventListener('click',function(){
addTodo();
})


function saveTodo(){
         const data =[];
 document.querySelectorAll('.todo-item h1').forEach((todoItem,item)=>{
    // console.log(`todo ${item + 1}:`,todoItem.textContent);
  data.push(todoItem.textContent);
 })
 console.log(data);
 if(data.length===0){
    localStorage.removeItem("todos");
 }
 else{
    localStorage.setItem("todos",JSON.stringify(data));
 }
}

function addTodo(todoText=""){

const todo=document.querySelector("#newTodo");
if(todoText.length===0 && todo.value.trim()===''){
    alert("Please enter a todo item.");
    return;
}
else{
    const todoItem=document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML=`<h1>${todo.value||todoText}</h1>
    <button class="delete">Delete</button>`;
    todoList[0].appendChild(todoItem);
    todo.value='';  

    (
    todoItem.querySelector('.delete').addEventListener(
        'click',function(){
            todoItem.remove();
            saveTodo();
        }
    )
)

    todoItem.querySelector('h1').addEventListener(
        'click',function(){
            todoItem.classList.toggle('completed');
            saveTodo();
        }
    )

saveTodo();

}




}


function loadTodos(){
    const todos =JSON.parse(localStorage.getItem('todos'));
    if(todos.length>0){
        todos.forEach((todo)=>{
            addTodo(todo);
        })
    }
}

loadTodos();
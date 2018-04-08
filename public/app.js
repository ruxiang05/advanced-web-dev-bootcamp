$(document).ready(function() {
   $.getJSON("/api/todos")
   .then(addTodos);

   $('#todoInput').keypress(function(event) {
    if(event.which === 13) {
        createTodo();
    }
   });

   $('.list').on('click','span', function(){
    removeTodo($(this).parent());
   });
});

function addTodos(todos) {
    todos.forEach(todo => addTodo(todo));
}

function addTodo(todo) {
    let newTodo = $(`
        <li class='task'>${todo.name}<span>X</span></li>
    `);
    newTodo.data('id', todo._id);
    if (todo.completed) {
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}

function createTodo() {
    let userInput = $('#todoInput').val();
    $.post('/api/todos', {
        name: userInput
    }).then((newTodo) => {
        $("#todoInput").val('');
        addTodo(newTodo);
    }).catch((err) => console.log(err));
}

function removeTodo(todo) {
    const clickedId = todo.data("id");
    $.ajax({
        method: "DELETE",
        url: `/api/todos/${clickedId}`
    }).then(todo.remove())
    .catch(err => console.log(err));
}
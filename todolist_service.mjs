export class TodoListService {
  
  todolist = ["Makan", "Minum", "Tidur", "Kerja"];

  responseJsonTodoList(code, status, data) {
    return JSON.stringify({
      code: code,
      status: status,
      data: data,
    });
  }

  getTodoList(request, response) {
    const todolists = this.todolist.map((value, index) => {
      return {
        id: index,
        todo: value,
      }
    });

    response.write(this.responseJsonTodoList(200, "OK", todolists));
    response.end();
  }

  createTodoList(request, response) {
    request.addListener("data", (data) => {
      const body     = JSON.parse(data.toString());
      const todolist = {
        id: this.todolist.length,
        todo: body.todo,
      }

      this.todolist.push(body.todo);

      response.write(this.responseJsonTodoList(200, "OK", todolist));
      response.end();
    });
  }

  updateTodoList(request, response) {
    request.addListener("data", (data) => {
      const body     = JSON.parse(data.toString());
      const todolist = {
        id: body.id,
        todo: body.todo,
      } 
      
      if(this.todolist[body.id]) this.todolist[body.id] = body.todo;

      response.write(this.responseJsonTodoList(200, "OK", todolist));
      response.end();
    });
  }

}
export class TodoListService {
  
  todolist = ["Makan", "Minum", "Tidur", "Kerja"];

  responseJsonTodoList(code, status, data) {
    return JSON.stringify({
      code: code,
      status: status,
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        }
      })
    });
  }

  getTodoList(request, response) {
    response.write(this.responseJsonTodoList(200, "OK"));
    response.end();
  }

  createTodoList(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      
      this.todolist.push(body.todo);

      response.write(this.responseJsonTodoList(200, "OK"));
      response.end();
    });
  }

}
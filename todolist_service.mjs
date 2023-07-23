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
    const data = this.todolist.map((value, index) => {
      return {
        id: index,
        todo: value,
      }
    });

    response.write(this.responseJsonTodoList(200, "OK", data));
    response.end();
  }

}
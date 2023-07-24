import http from "http";
import { TodoListService } from "./todolist_service.mjs";

const service = new TodoListService();
const server  = http.createServer((request, response) => {
  
  response.setHeader("Content-Type", "application/json");
  
  if (request.method === "GET") {
    service.getTodoList(request, response);
  } else if(request.method === "POST") {
    service.createTodoList(request, response);
  } else if(request.method === "PUT") {
    service.updateTodoList(request, response);
  }

});

server.listen(3000);

console.log(`TODO list`)
console.log(`Server activated at: http://localhost:${3000}`);
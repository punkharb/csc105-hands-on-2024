import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo); //---------->add this line
todoRouter.get("/getAllTodo", todoController.getAllTodo);
todoRouter.get("/getAllTodooneuser", todoController.getAllTodooneuser);
todoRouter.patch("/updateTodocompleted", todoController.updateTodocompleted);
todoRouter.patch("/updateTodotitle", todoController.updateTodotitle);
export { todoRouter };
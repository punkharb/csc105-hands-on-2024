import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return todo;
}
const getAllTodooneuser = async (userId: number) => {
    const todo = await db.todo.findMany({
        where: {
            userId: userId,
        },
        include: {
            user: true,
        },
    });
    return todo;
}
const getAllTodo = async () => {
    const todo = await db.todo.findMany({
        include: {
            user: true,
        },
    });
    return todo;
}
const updateTodocompleted = async (id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            completed: true,
        },
    });
    return todo;
}
const updateTodotitle = async (id: number , title: string) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            title: title,
        },
    });
    return todo;
}
const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}
export { createTodo, getTodo, deleteTodo, getAllTodo, updateTodocompleted, updateTodotitle , getAllTodooneuser};
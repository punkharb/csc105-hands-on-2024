import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getAllTodooneuser = async (c: Context) => {
    try {
        const param = c.req.query("userId");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getAllTodooneuser(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getAllTodo = async (c: Context) => {
    try {
        const data = await todoModel.getAllTodo();
        return c.json(data, 200);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateTodocompleted = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.updateTodocompleted(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateTodotitle = async (c: Context) => {
    try {
        const param = c.req.query("id");
        const body = await c.req.json<{ title: string }>();
        if (!body.title)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (param !== undefined && param !== null) {
            const data = await todoModel.updateTodotitle(parseInt(param) , body.title);
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const deleteTodo = async (c: Context) => {
    try {
        const query = c.req.query("id");
        if (query !== undefined && query !== null) {
            const data = await todoModel.deleteTodo(parseInt(query));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
export { createTodo, getTodo, deleteTodo, getAllTodo, updateTodocompleted, updateTodotitle , getAllTodooneuser };
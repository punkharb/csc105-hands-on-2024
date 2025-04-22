import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";
import { use } from "hono/jsx";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
};

const updateUser = async (c: Context) => {
	try {
		const param = c.req.query("id");
		if (param === undefined || param === null) {
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		}
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		
		const User = await userModel.updateUser(parseInt(param),
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: User,
			msg: "Updated User!",
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
};
export { createUser , updateUser };
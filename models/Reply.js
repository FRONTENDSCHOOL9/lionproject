import { Schema, model, models } from "mongoose";

const ReplySchema = new Schema(
	{
		_id: {
			type: Number,
			required: [true, "ID is required!"],
		},
		content: {
			type: String,
		},
		order_id: {
			type: Number,
		},
		product_id: {
			type: Number,
		},
		user_id: {
			type: Number,
		},
		rating: {
			type: Number,
		},
		createdAt: {
			type: String,
		},
	},
	{ _id: false }
);
ReplySchema.set("timestamps", true);
const Reply = models.Reply || model("Reply", ReplySchema);

export default Reply;

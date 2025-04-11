import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        name: String,
        description: String,
        lessons: Array,
        course: { type: String, ref: "CourseModel" },
    },
    { collection: "modules" }
);

export default schema;
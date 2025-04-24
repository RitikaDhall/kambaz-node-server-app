import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        quiz: { type: String, ref: "QuizModel" },
        title: String,
        question: String,
        type: String,
        points: Number,
        possibleAnswers: [String],
        correctAnswer: String,
    },
    { collection: "questions" }
);

export default schema;

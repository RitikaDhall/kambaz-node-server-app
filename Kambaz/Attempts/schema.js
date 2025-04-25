import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        user: { type: String, ref: "UserModel" },
        quiz: { type: String, ref: "QuizModel" },
        points: Number,
        submittedAt: {
            type: Date,
            default: Date.now
        },
        answers: [
            {
                questionId: { type: String, ref: "QuestionModel" },
                userAnswer: String,
                correct: Boolean
            }
        ],
    },
    { collection: "attempts" }
);

export default schema;
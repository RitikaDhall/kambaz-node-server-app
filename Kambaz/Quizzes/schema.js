import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        description: String,
        quizType: String,
        points: Number,
        assignmentGroup: String,
        shuffleAnswers: String,
        timeLimit: String,
        multipleAttempts: Boolean,
        howManyAttempts: Number,
        showCorrectAnswers: String,
        accessCode: String,
        oneQuestionAtATime: String,
        webcamRequired: String,
        lockQuestionsAfterAnswering: String,
        dueDate: String,
        availableDate: String,
        untilDate: String,
        published: Boolean,
        course: { type: String, ref: "CourseModel" },
    },
    { collection: "quizzes" }
);

export default schema;
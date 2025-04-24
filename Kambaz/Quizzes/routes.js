import * as dao from "./dao.js";
import * as questionDao from "../Questions/dao.js";

export default function QuizRoutes(app) {
    app.get("/api/quizzes/:qid", async (req, res) => {
        let { qid } = req.params;
        const quiz = await dao.findQuizById(qid);
        if (quiz) {
            res.json(quiz);
        } else {
            res.status(401).json({ message: "Quiz not found." });
        }
    }) // check if this is being used then delete it

    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.deleteQuiz(quizId);
        res.send(status);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: quizId,
        };
        const newQuestion = await questionDao.createQuestion(question);
        res.send(newQuestion);
    });
}
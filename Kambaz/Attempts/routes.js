import * as dao from "./dao.js";

export default function AttemptRoutes(app) {
    app.get("/api/attempts/:userId/:quizId", async (req, res) => {
        const { userId, quizId } = req.params;
        const attempts = await dao.findAttemptsForUserAndQuiz(userId, quizId);
        res.json(attempts);
    })

    app.post("/api/attempts", async (req, res) => {
        const attempt = await dao.createAttempt(req.body);
        res.json(attempt);
    })

    app.get("/api/attempts/:userId/:quizId/recent", async (req, res) => {
        const { userId, quizId } = req.params;
        const attempt = await dao.findRecentAttempt(userId, quizId);
        res.json(attempt);
    })
}
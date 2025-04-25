import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAttemptsForUserAndQuiz(userId, quizId) {
    return model.find({ quiz: quizId, user: userId });
}

export function createAttempt(attempt) {
    const newAttempt = { ...attempt, _id: uuidv4() };
    return model.create(newAttempt);
}

export function findRecentAttempt(userId, quizId) {
    return model.findOne({ quiz: quizId, user: userId }).sort({ submittedAt: -1 });
}
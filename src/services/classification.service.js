
import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


class ClassificationService {

    async classifyText(text) {

        try {


            const response = await ai.models.generateContent({
                model: "gemini-3.5-flash-lite",
                contents: `
        You are a general-purpose text classification assistant.

        Classify the given text into exactly ONE of these categories:

        1. Complaint:
           The text reports a problem, expresses dissatisfaction,
           frustration, or describes a negative experience.

        2. Query:
           The text asks a question or requests information,
           clarification, guidance, or assistance.

        3. Feedback:
           The text explicitly expresses an opinion, suggestion,
           appreciation, or evaluation about something.

        4. Other:
           The text contains general statements, facts, observations,
           greetings, or casual conversation without asking a question,
           reporting a problem, or explicitly expressing an opinion.

        Classification rules:
        - Consider the overall meaning and primary intention.
        - A simple factual observation must be classified as Other.
        - Do not classify every positive or descriptive sentence as Feedback.
        - Do not classify negative words alone as Complaint.
        - If the primary intention is asking a question, choose Query.
        - If the primary intention is reporting a problem, choose Complaint.
        - If the text explicitly expresses an opinion or suggestion, choose Feedback.
        - Do not restrict classification to any particular industry or topic.
        - Always select exactly one category.

        Return ONLY valid JSON in this format:
        {
            "category": "Complaint",
            "confidence": 0.95
        }

        Confidence must be a number between 0 and 1.

        Text: ${JSON.stringify(text)}
    `,
                config: {
                    responseMimeType: "application/json"
                }
            });

            const result = JSON.parse(response.text);

            return result;

        } catch (error) {
            throw error;
        }
    }
}

export default new ClassificationService();

import classificationService from "../services/classification.service.js";

class ClassificationController {

    async classify(req, res) {

        try {

            const { text } = req.body || {};

            // Validation
            if (typeof text !== "string" || !text.trim()) {
                return res.status(400).json({
                    status: 400,
                    message: "Valid text string is required"
                });
            }

            // service
            const result = await classificationService.classifyText(text.trim());

            // Success response
            return res.status(200).json({
                status: 200,
                message: "Text classified successfully",
                data: result
            });

        } catch (error) {
            console.error("Error", error);
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            });
        }
    }
}

export default new ClassificationController();
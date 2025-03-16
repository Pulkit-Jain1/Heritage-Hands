import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/analyze-product", protectRoute, adminRoute, async (req, res) => {
    try {
        const { image, prompt } = req.body;
        
        if (!image || !prompt) {
            return res.status(400).json({ 
                success: false, 
                message: "Image and prompt are required" 
            });
        }

        // Import the Google Generative AI SDK
        const { GoogleGenerativeAI } = await import("@google/generative-ai");
        
        // Initialize the Gemini API with your key
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Prepare the image for Gemini
        const imageContent = {
            inlineData: {
                data: image,
                mimeType: "image/jpeg",
            },
        };

        // Send the request to Gemini
        const result = await model.generateContent([imageContent, prompt]);
        const responseText = result.response.text();
        
        // Parse the JSON response from Gemini
        try {
            const productDetails = JSON.parse(responseText);
            
            // Validate the response has the expected fields
            if (!productDetails.title || !productDetails.description || !productDetails.price) {
                throw new Error("Incomplete data from AI");
            }
            
            res.json({
                success: true,
                productDetails
            });
        } catch (parseError) {
            console.error("Error parsing Gemini response:", parseError);
            
            // Try to extract structured data from unstructured response
            const titleMatch = responseText.match(/title"?\s*:?\s*"?([^"]+)"?/i);
            const descriptionMatch = responseText.match(/description"?\s*:?\s*"?([^"]+)"?/i);
            const priceMatch = responseText.match(/price"?\s*:?\s*"?(\d+\.?\d*)"?/i);
            
            const productDetails = {
                title: titleMatch ? titleMatch[1].trim() : "",
                description: descriptionMatch ? descriptionMatch[1].trim() : "",
                price: priceMatch ? parseFloat(priceMatch[1]) : 0
            };
            
            if (productDetails.title || productDetails.description || productDetails.price) {
                res.json({
                    success: true,
                    productDetails,
                    message: "Partial data extracted"
                });
            } else {
                throw new Error("Could not parse AI response");
            }
        }
    } catch (error) {
        console.error("Error with Gemini API:", error);
        res.status(500).json({ 
            success: false, 
            message: "Failed to analyze image with AI" 
        });
    }
});

export default router;

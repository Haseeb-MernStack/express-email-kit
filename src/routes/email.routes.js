import express from "express";
import { sendMail } from "../services/email.service.js";

const router = express.Router();

router.post("/verify", async (req, res) => {
    await sendMail({
        to: req.body.email,
        subject: "Verify your email",
        template: "verify-email",
        data: {
            name: "User",
            link: "https://example.com/verify"
        }
    });

    res.json({ success: true, message: "Verification email sent" });
});

export default router;
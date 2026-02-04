import ejs from "ejs";
import path from "path"
import { transporter } from "../config/mailer.config.js";

const renderTemplate = async (template, data) => {
    const filePath = path.join(
        process.cwd(),
        "src/templates",
        `${template}.ejs`
    );
    return await ejs.renderFile(filePath, data);
};

export const sendEmail = async ({ to, subject, template, data }) => {
    const html = await renderTemplate(template, data);

    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html
    });
};
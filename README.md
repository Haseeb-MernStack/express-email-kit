# Express Email Kit

Lightweight Node/Express email sending kit with EJS templates and a simple service layer. Provides ready-to-use verification and templated email support so you can add transactional email features quickly to any app.

**Why this project exists (problem solved)**

- Boilerplate for sending transactional emails (verification, password reset) is repetitive and error-prone.
- This kit centralizes configuration, templates, and sending logic so you don't rebuild the same flow for every project.

**Why developers like it / Why use it**

- Minimal and modular: small service + templates that you can plug into existing Express apps.
- Template-driven: HTML emails are rendered from EJS templates in `src/templates` for easy customization.
- Environment-driven configuration: change SMTP credentials without touching code (`src/config/mailer.config.js`).

**How this helps in daily development**

- Saves time: copy, configure, and start sending verification and reset emails in minutes.
- Keeps email logic testable and separated from route handlers.
- Makes onboarding and maintenance easier by keeping templates and transporter config in one place.

**Features**

- EJS-based email templates (`src/templates`) for quick edits.
- Nodemailer transport setup (`src/config/mailer.config.js`).
- Service abstraction (`src/services/email.service.js`) to render templates and send mail.
- Example route(s) demonstrating sending flows (`src/routes/email.routes.js`).

**Quick Installation**
Prerequisites: Node.js (14+), npm

1. Clone the repo and install deps:

```
git clone <repo-url>
cd express-email-kit
npm install
```

2. Create a `.env` file in the project root with your SMTP settings. Example:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
EMAIL_FROM="Your App <no-reply@example.com>"
```

3. Start the server:

```
npm start
# or
node src/server.js
```

**Configuration**

- Transport configuration lives in [src/config/mailer.config.js](src/config/mailer.config.js#L1). It reads standard SMTP env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `EMAIL_FROM`.
- Email rendering is done via EJS templates in [src/templates](src/templates). Edit those to change copy or layout.

**Usage / Example**

- The example route in [src/routes/email.routes.js](src/routes/email.routes.js#L1) shows a `POST /verify` endpoint that sends a verification email using the `verify-email` template.
- The sending logic is in [src/services/email.service.js](src/services/email.service.js#L1). Use the exported function to send emails from anywhere in your app. Example call pattern:

```
await sendEmail({
	to: 'user@example.com',
	subject: 'Verify your email',
	template: 'verify-email',
	data: { name: 'User', link: 'https://example.com/verify' }
});
```

**Customize**

- Add new templates to `src/templates` (create `your-template.ejs`) and call the service with `template: 'your-template'`.
- Modify the transporter options in [src/config/mailer.config.js](src/config/mailer.config.js#L1) if you need TLS, different ports, or provider-specific settings.

**Next steps**

- Commit the README changes and run your app. Want me to commit these changes for you or run the server locally?

**License**

- MIT (add LICENSE file if you want an explicit license)

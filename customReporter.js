const nodemailer = require('nodemailer');

class CustomReporter {
    constructor() {
        this.totalTests = 0;
        this.passCount = 0;
        this.failCount = 0;
        this.flakyPassCount = 0;
        this.failedTestDetails = [];
        this.loggedFailedTestIds = new Set();
    }

    onBegin(config, suite) {
        this.totalTests = suite.allTests().length;
        console.log(`Starting the run with ${this.totalTests} tests`);
    }

    onTestEnd(test, result) {
        if (result.status === 'passed') {
            this.passCount++;
        } else if (result.status === 'failed') {
            if (!this.loggedFailedTestIds.has(test.id)) {
                this.failCount++;
                this.loggedFailedTestIds.add(test.id);
                console.log('\n========================================');
                console.log(`❌ FAILED TEST: ${test.title}`);
                console.log(`File: ${test.location.file}:${test.location.line}`);

                let errorMessage = 'No specific error message found.';
                if (result.errors && result.errors.length > 0) {

                    errorMessage = result.errors.map(error => this.stripAnsiCodes(error.message)).join('\n');
                    console.log('Error Details:');
                    result.errors.forEach((error, index) => {
                        console.log(`  ${index + 1}. Message: ${this.stripAnsiCodes(error.message)}`);
                    });
                } else {
                    console.log(errorMessage);
                }

                this.failedTestDetails.push({
                    name: test.title,
                    location: `${test.location.file}:${test.location.line}`,
                    errorMessage: errorMessage,
                });

                console.log('========================================\n');
            }
        } else if (result.status === 'flaky') {
            this.flakyPassCount++;
        }
    }

    stripAnsiCodes(str) {
        return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=\x3c-\x3e]/g, '');
    }

    async onEnd(result) {
        console.log(`\n--- Test Summary ---`);
        console.log(`Project: Frezka Landing Page`);
        console.log(`Total Tests: ${this.totalTests}`);
        console.log(`Passed: ${this.passCount}`);
        console.log(`Failed: ${this.failCount}`);
        console.log(`Flaky Passed: ${this.flakyPassCount}`);

        if (this.failedTestDetails.length > 0) {
            console.log(`\n--- Failed Test Case Breakdown (${this.failedTestDetails.length} tests) ---`);
            this.failedTestDetails.forEach((failedTest, index) => {
                console.log(`\n${index + 1}. Test Name: ${failedTest.name}`);
                console.log(`   Location: ${failedTest.location}`);
                console.log(`   Error Message: ${failedTest.errorMessage}`);
            });
        } else {
            console.log(`\nNo test cases failed.`);
        }

        console.log(`\nFinished the run with overall status: ${result.status}`);
        console.log(`--------------------\n`);

        await this.sendReportEmail(result.status);
    }

    async sendReportEmail(overallStatus) {
        // --- Configuration for Email ---
        const senderEmail ="suraj.goldenmace@gmail.com"; // Use environment variable or default
        const senderPassword ="phdi mefy octi dohj"; // Use environment variable or default
        const recipientEmails = "denishiqonic@gmail.com"; // Multiple recipients

        // Configure your SMTP transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // e.g., 'smtp.office365.com'
            port: 587, // 465 for SSL, 587 for TLS
            secure: false, // Use true if port is 465 (SSL), false if 587 (TLS)
            auth: {
                user: senderEmail,
                pass: senderPassword,
            },
        });

        // --- Construct Email Body ---
        let emailHtmlBody = `
            <p>Dear Team,</p>
            <p>Here is the automated Playwright test report summary for <strong>Frezka Landing Page</strong> as of ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}.</p>
            <hr>
            <h2>Test Summary</h2>
            <table style="width:100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Total Tests:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: blue;">${this.totalTests}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Passed:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: green;">${this.passCount}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Failed:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: red;">${this.failCount}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Flaky Passed:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; color: orange;">${this.flakyPassCount}</td>
                </tr>
                 <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;"><strong>Overall Status:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: ${overallStatus === 'passed' ? 'green' : 'red'};">${overallStatus.toUpperCase()}</td>
                </tr>
            </table>
            <hr>
        `;

        if (this.failedTestDetails.length > 0) {
            emailHtmlBody += `
                <h2>Failed Test Case Breakdown</h2>
                <p>The following tests failed:</p>
                <ul style="list-style-type: none; padding: 0;">
            `;
            this.failedTestDetails.forEach((failedTest, index) => {
                emailHtmlBody += `
                    <li style="margin-bottom: 15px; border: 1px solid #eee; padding: 10px; border-radius: 5px; background-color: #fff;">
                        <strong>${index + 1}. Test Name:</strong> ${failedTest.name}<br>
                        <span style="display: inline-block; margin-left: 20px;"><strong>Location:</strong> ${failedTest.location}</span><br>
                        <span style="display: inline-block; margin-left: 20px;"><strong>Error Message:</strong></span> <pre style="white-space: pre-wrap; word-wrap: break-word; background-color: #f8f8f8; padding: 5px; border: 1px solid #ddd; margin-left: 20px;">${failedTest.errorMessage}</pre>
                    </li>
                `;
            });
            emailHtmlBody += `</ul><hr>`;
        } else {
            emailHtmlBody += `<p>All test cases passed! 🎉</p><hr>`;
        }

        emailHtmlBody += `
            <p>Best regards,</p>
            <p>Your Automation Team</p>
        `;

        // --- Define Email Options ---
        const mailOptions = {
            from: `"Playwright Report" <${senderEmail}>`,
            to: recipientEmails,
            subject: `Playwright Test Report - ${overallStatus.toUpperCase()} - ${new Date().toLocaleDateString('en-IN')}`,
            html: emailHtmlBody,
        };

        // --- Send Email ---
        try {
            console.log(`Attempting to send email to: ${recipientEmails}`);
            let info = await transporter.sendMail(mailOptions);
            // console.log('Email sent successfully: %s', info.messageId);
        } catch (error) {
            console.error('Error sending email:', error);
            if (error.responseCode === 535) {
                console.error('Authentication failed. Check your email user/password or app password.');
            } else if (error.code === 'EENVELOPE') {
                console.error('Email address validation failed. Check recipient email format.');
            }
        }
    }

}

module.exports = CustomReporter;
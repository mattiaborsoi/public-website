// This function will verify the Turnstile token
async function verifyTurnstile(token, secretKey, ip) {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: secretKey, // Comes from environment variables
            response: token,   // From the form
            remoteip: ip,      // From the request headers
        }),
    });
    const data = await response.json();
    return data.success;
}

// This function handles the POST request from your form
export async function onRequestPost({ request, env }) {
    try {
        const data = await request.json();

        // --- 1. Get data and IP ---
        const { name, email, message } = data;
        const token = data['cf-turnstile-response'];
        // Get the client's IP address from the request headers
        const ip = request.headers.get('CF-Connecting-IP');

        // --- 2. Validate Turnstile (CAPTCHA) ---
        // 'env.TURNSTILE_SECRET_KEY' is an environment variable you must set in Cloudflare
        const turnstileSuccess = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip);

        if (!turnstileSuccess) {
            return new Response(
                JSON.stringify({ message: 'CAPTCHA verification failed. Please refresh to try again.' }),
                { status: 403, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // --- 3. Send the Email (using Mailgun as an example) ---
        // You MUST set these environment variables in your Cloudflare project.
        const { MAILGUN_API_KEY, MAILGUN_DOMAIN, TO_EMAIL } = env;

        if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !TO_EMAIL) {
             return new Response(
                JSON.stringify({ message: 'Server is not configured to send emails.' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const mailgunURL = `https://api.eu.mailgun.net/v3/mg.borsoi.co.uk/messages`;
        
        // Use FormData for Mailgun's API
        const formData = new FormData();
        formData.append('from', `Borsoi.co.uk Contact Form <postmaster@mg.borsoi.co.uk>`);
        formData.append('to', TO_EMAIL);
        formData.append('subject', `New Contact Form Submission from ${name}`);
        formData.append('text',
`You received a new message from your website contact form:

Full Name: ${name}
Email: ${email}

Message:
${message}
`
        );
        formData.append('h:Reply-To', email);


        const emailResponse = await fetch(mailgunURL, {
            method: 'POST',
            headers: {
                // 'btoa' creates the base64-encoded basic auth header
                'Authorization': `Basic ${btoa('api:' + MAILGUN_API_KEY)}`
            },
            body: formData,
        });

        if (!emailResponse.ok) {
            const errorBody = await emailResponse.text();
            console.error('Mailgun error:', errorBody);
            return new Response(
                JSON.stringify({ message: 'Failed to send the message.' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // --- 4. Send Success Response ---
        return new Response(
            JSON.stringify({ message: 'Message sent successfully!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Error processing request:', error);
        return new Response(
            JSON.stringify({ message: 'An internal server error occurred.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

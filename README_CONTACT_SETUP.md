# Contact Form Setup Guide

This portfolio uses **Web3Forms** - a free service that sends form submissions directly to your email without requiring a backend server.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address where you want to receive contact form submissions
3. Click "Get Access Key"
4. Check your email and verify your address
5. Copy the access key provided

### Step 2: Configure Your Environment

1. Create a `.env` file in the root of your project (if it doesn't exist):
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

3. Save the file

### Step 3: Test It Out

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email for the submission!

## ✅ Features

- ✨ **100% Free** - No credit card required
- 📧 **Email Notifications** - Receive submissions directly in your inbox
- 🔒 **Spam Protection** - Built-in spam filtering
- 🚀 **No Backend Required** - Works entirely client-side
- 📱 **Mobile Friendly** - Works on all devices
- ⚡ **Fast & Reliable** - Hosted on global CDN

## 🔧 How It Works

1. User fills out the contact form
2. Form data is sent to Web3Forms API via HTTPS
3. Web3Forms forwards the message to your email
4. You receive the contact submission in your inbox

## 🎯 Alternative Free Services

If you prefer a different service, here are other free options:

### Option 1: Formspree
- Free tier: 50 submissions/month
- Website: [https://formspree.io](https://formspree.io)
- Setup: Similar to Web3Forms

### Option 2: EmailJS
- Free tier: 200 emails/month
- Website: [https://www.emailjs.com](https://www.emailjs.com)
- Requires: Service ID, Template ID, and Public Key
- Implementation code is included in `src/services/contactService.ts` (commented out)

To switch to EmailJS:
1. Uncomment the EmailJS code in [`contactService.ts`](src/services/contactService.ts)
2. Add these environment variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Install EmailJS: `npm install @emailjs/browser`
4. Update the Contact component to use `submitContactFormEmailJS`

## 🛡️ Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- For production deployment, add the environment variable to your hosting platform:
  - **Vercel**: Project Settings → Environment Variables
  - **Netlify**: Site Settings → Build & Deploy → Environment
  - **GitHub Pages**: Use GitHub Secrets and build-time injection

## 📝 Customization

You can customize the email format in [`contactService.ts`](src/services/contactService.ts:30):

```typescript
const formPayload = {
  access_key: accessKey,
  name: formData.name,
  email: formData.email,
  message: formData.message,
  subject: `Portfolio Contact from ${formData.name}`, // Customize this
  from_name: "Portfolio Contact Form", // Customize this
};
```

## 🐛 Troubleshooting

### Form not sending?
1. Check that `VITE_WEB3FORMS_ACCESS_KEY` is set in your `.env` file
2. Verify the access key is correct (no extra spaces)
3. Check browser console for errors
4. Ensure you've verified your email with Web3Forms

### Not receiving emails?
1. Check your spam folder
2. Verify your email address with Web3Forms
3. Try submitting a test form from the Web3Forms dashboard

### Environment variable not loading?
1. Restart your development server after adding `.env`
2. Ensure the variable starts with `VITE_` (required for Vite)
3. Check that `.env` is in the project root directory

## 📚 Additional Resources

- [Web3Forms Documentation](https://docs.web3forms.com)
- [Web3Forms API Reference](https://docs.web3forms.com/api-reference)
- [Vite Environment Variables Guide](https://vitejs.dev/guide/env-and-mode.html)

## 💡 Tips

- Web3Forms has no monthly limits on the free tier
- You can use multiple access keys for different projects
- Add custom fields by extending the `formPayload` object
- Enable reCAPTCHA for additional spam protection (optional)

---

**Need help?** Open an issue or check the [Web3Forms FAQ](https://web3forms.com/faq)

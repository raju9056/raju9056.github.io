/**
 * Contact Service using Web3Forms
 * Free service - no backend required
 * Get your access key from: https://web3forms.com
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Submit contact form using Web3Forms API
 * @param formData - The contact form data
 * @returns Promise with success status and message
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  try {
    // Get access key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Web3Forms access key not configured");
      return {
        success: false,
        message: "Contact form is not configured. Please try again later.",
      };
    }

    // Prepare form data for Web3Forms
    const formPayload = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      // Optional: Add these for better email formatting
      subject: `Portfolio Contact from ${formData.name}`,
      from_name: "Portfolio Contact Form",
    };

    // Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formPayload),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Message sent successfully!",
      };
    } else {
      console.error("Web3Forms error:", result);
      return {
        success: false,
        message: result.message || "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}

/**
 * Alternative: EmailJS implementation (commented out)
 * Uncomment and configure if you prefer EmailJS
 * Get your keys from: https://www.emailjs.com
 */
/*
import emailjs from '@emailjs/browser';

export async function submitContactFormEmailJS(
  formData: ContactFormData
): Promise<ContactResponse> {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        message: "Email service not configured",
      };
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      publicKey
    );

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}
*/

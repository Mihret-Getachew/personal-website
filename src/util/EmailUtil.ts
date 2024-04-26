import emailjs from "emailjs-com";

interface emailData {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
}
export const sendEmail = async ({
  message,
  firstName,
  lastName,
  phone,
  subject,
  email,
}: emailData) => {
  const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_APP_EMAILJS_USER_ID;
  try {
    const serviceId = SERVICE_ID;
    const templateId = TEMPLATE_ID;
    const userId = USER_ID;

    const emailParams = {
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    await emailjs.send(serviceId, templateId, emailParams, userId);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    // Handle error (e.g., show an error message to the user)
  }
};

export default sendEmail;

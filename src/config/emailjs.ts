// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ln61nzj', // Your EmailJS service ID
  PUBLIC_KEY: 'mybPsGrE5Y3ybuTLF', // Your EmailJS public key
  TEMPLATES: {
    WELCOME: 'template_x9n7hzx', // Welcome email template for users
    ADMIN_NOTIFICATION: 'template_4ux5kgf' // Admin notification template for you
  }
};

// Initialize EmailJS
import emailjs from '@emailjs/browser';
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY); 
import { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);  // Set loading state when submitting the form

        try {
            // Replace these values with your EmailJS service, template, and user ID
            const response = await emailjs.send(
                'service_6j0ltrq',      // Your EmailJS service ID
                'template_518uiga',     // Your EmailJS template ID
                formData,               // The form data that you send
                'JQzKNrL8YKhwTFRrA'          // Your EmailJS user ID
            )

            if (response.status === 200) {
                alert("Thank you for reaching out! I will get back to you soon.");
            } else {
                alert("Oops! Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("There was an error with the submission. Please try again.");
        }

        setIsSubmitting(false);  // Reset loading state

        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div>
            <h1>Contact me</h1>
            <p>
                Get in Touch with me! I’d love to hear from you! Whether you have questions about my services, 
                are interested in starting a project, or would like to learn more about me, 
                please feel free to reach out.
            </p>

            <ul>Contact Information:</ul>
            <li>Phone number: (408) 304-4333</li>
            <li>Email: Eng.mzamanit@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/mostafazamaniturk/">Mostafa Zamaniturk</a></li>
            <li>GitHub: <a href="https://github.com/Mostafazamanicivil">Profile 1</a></li>
            <li>GitHub: <a href="https://github.com/Mosizamani">Profile 2</a></li>

            <p>You can also fill out the contact form below, and will get back to you as soon as possible.</p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Enter your message"
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <button type="submit">{isSubmitting ? 'Sending...' : 'Submit'}</button>
                </div>
            </form>
        </div>
    );
}

export default Contact

import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., API call)
        console.log("Form submitted:", formData);
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
            <h1>Contact</h1>
            <p>
                Get in Touch with Us! We’d love to hear from you! Whether you have questions about our services, 
                are interested in starting a project, or would like to learn more about Dynamic Green Building Corp, 
                please feel free to reach out.
            </p>

            <ul>Contact Information:</ul>
            <li>CEO Phone number: (778) 985-6453</li>
            <li>Admin Phone number: (778) 985-9078</li>
            <li>Email: info@dynamicgreenbuilding.com</li>
            <li>Office Address: 109 - 230 16th St. East, North Vancouver, BC, Canada V7L 2T1</li>

            <p>You can also fill out the contact form below, and one of our team members will get back to you as soon as possible.</p>

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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact

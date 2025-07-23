import React, { useState } from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';

const ContactMessage = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (event) => {
    setMessage((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const messageErrors = {};

    // VALIDATION
    if (!message.name.trim()) {
      messageErrors.name = "The name is required";
    }
    
    if (!message.email.includes("@")) {
      messageErrors.email = "Invalid Email address";
    }
    
    if (!message.message) {
      messageErrors.message = "A message should not be empty";
    }

    if (Object.keys(messageErrors).length > 0) {
      setErrors(messageErrors);
    } else {
      alert("The message is sent!");
      setMessage({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <Input
          type="text"
          value={message.name}
          onChange={handleChange}
          placeholder="Your name"
          name="name"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name}</p>
        )}
      </div>
   
      <div>
        <Input
          type="email"
          value={message.email}
          onChange={handleChange}
          placeholder="Your email"
          name="email"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <Input
          type="text"
          value={message.subject}
          onChange={handleChange}
          placeholder="Subject"
          name="subject"
        />
      </div>

      <div>
        <Input
          type="text"
          value={message.message}
          onChange={handleChange}
          placeholder="Your message"
          name="message"
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
      </div>
      <Button/>
    </form>
  );
};

export default ContactMessage;
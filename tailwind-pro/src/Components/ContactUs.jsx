import React, { useState } from "react";
import Input from "./Input";
import Contacts from "./Contacts";
import Button from "./Button";
// import {Facebook} from "react-icons/fa"


function ContactUs() {

  const contacts = [
    {
      icon: "src/assets/location.svg",
      heading: "Address",
      value: "Location KG 9 Ave, Kigali",
    },
    {
      icon: "src/assets/email.svg",
      heading: "Email",
      value: "business@info.com",
    },
    {
      icon: "src/assets/call.svg",
      heading: "Phone",
      value: "+250788183828",
    }
  ];

  // ***********

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  }); console.log(message);
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

    if (!message.subject.trim()) {
      messageErrors.subject = "A Subject box should not be empty";
    }
    if (!message.message.trim()) {
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
    } console.log(messageErrors);
  };
  return (
    <div className="relative h-auto flex max-md:flex-col w-full">
      <img
        src="src/assets/globe.jpeg"
        // Always include alt text
        className="w-full h-150 object-cover p-5 opacity-5" // Full height/width
      />
      <div className="absolute inset-0 flex flex-col px-8 md:px-16 lg:px-24">


      {/* Contacts section  */}
      <section className="contacts w-full px-[6%] flex gap-1 py-20  max-md:gap-5">
        <div className="leftSection flex-1 flex flex-col gap-5">
          <div className="header">
            <p className="text-primaryColor-200 font-bold text-[18px]">Contact Us</p>
            <h2 className="text-4xl font-bold">Say Hello</h2>
          </div>
          <div className="flex flex-col gap-10">
            {contacts.map((value, index) => (
              <Contacts
                icon={value.icon}
                heading={value.heading}
                value={value.value}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="rightSection flex-1">
          <div className="header font-bold">
            <p className="text-primaryColor-200">Have a Question?</p>
            <h2 className="text-3xl p-2">Send a message</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <Input
                type="text"
                value={message.name}
                onChange={handleChange}
                placeholder="Your name"
                name="name"
                variant={errors.name ? "danger" : "default"}
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
                variant={errors.email ? "danger" : "default"}
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
                variant={errors.subject ? "danger" : "default"}
              />
              {errors.subject && <p className="text-sm text-red-600">{errors.subject}</p>}
            </div>

            <div>
              <Input
                type="text"
                value={message.message}
                onChange={handleChange}
                placeholder="Your message"
                name="message"
                variant={errors.message ? "danger" : "default"}
              />
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            </div>
            <Button type="submit" value="Send Message" />
          </form>
        </div>
      </section>
      </div>
    </div>
    
  
  );
}

export default ContactUs;

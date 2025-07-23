import React from "react";
import Input from "./Input";
import Contacts from "./Contacts";
import Button from "./Button";


function ContactUs() {
  const contacts = [
    {
      icon: "src/assets/Images/location.svg",
      heading: "Address",
      value: "Location KG 9 Ave, Kigali",
    },
    {
      icon: "src/assets/Images/email.svg",
      heading: "Email",
      value: "business@info.com",
    },
    {
      icon: "src/assets/Images/call.svg",
      heading: "Phone",
      value: "+250788183828",
    },
  ];
  return (
    <div>
      {/* Contacts section  */}
      <section className="contacts w-full px-[6%] flex gap-1 py-20">
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
          <form
            action=""
            className="w-full flex flex-col gap-2 h-auto"
          >
            <Input type={"text"} placeholder={"Name"} />
            <Input type={"text"} placeholder={"Email"} />
            <Input type={"text"} placeholder={"Subject"} />
            <textarea name="" id="" cols="15" className="w-[100%] h-40 resize-none bg-primaryColor-50 p-4 border-2 border-primaryColor-200 rounded-sm" placeholder="Message"></textarea>
            <Button
            value = "Send Message"
            /> 
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-designColor font-semibold tracking-wide">
        What’s Next?
      </p>
      <h2 className="text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-center text-darkText">
      If you have other questions or project collaboration, click below
      </p>
      <div className="flex space-x-4">
  <a href="mailto:radenwahiddd29@gmail.com" className="w-40 h-14 border border-designColor font-semibold text-sm text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center">
  Say Hello
</a>

  <a href="https://wa.me/6288218773247?text=Hello%2C%20I%20would%20like%20to%20collaborate" target="_blank" rel="noopener noreferrer">
  <p className="w-40 h-14 border border-designColor font-semibold text-sm text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center">
    WhatsApp Me
  </p>
</a>


</div>

    </Container>
  );
};

export default Contact;

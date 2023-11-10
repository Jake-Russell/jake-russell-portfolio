import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone Number</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows={10}
        ></textarea>
      </div>
      <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
    </form>
  );
};

export default ContactForm;

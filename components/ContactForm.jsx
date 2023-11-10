import { FormProvider, useForm } from 'react-hook-form';

import React from 'react';
import Input from './Input';

const ContactForm = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div class="grid md:grid-cols-2 gap-4 w-full py-2">
          <Input
            label="name"
            type="text"
            id="name"
            placeholder="Type your name..."
          />
          <Input
            label="phone number"
            type="text"
            id="phone-number"
            placeholder="Type your phone number..."
          />
        </div>

        <Input
          label="email"
          type="email"
          id="email"
          placeholder="Type your email..."
        />

        <Input
          label="subject"
          type="text"
          id="subject"
          placeholder="Type your subject..."
        />

        <Input
          label="name"
          type="text"
          id="name"
          placeholder="Type your name..."
        />
        <Input
          label="message"
          id="message"
          placeholder="Type your message..."
        />

        <button onClick={onSubmit} className="w-full p-4 text-gray-100 mt-4">
          Send Message
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;

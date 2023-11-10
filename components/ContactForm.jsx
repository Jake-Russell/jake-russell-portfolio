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
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <Input
            label="name"
            name="name"
            type="text"
            id="name"
            placeholder="Type your name..."
            validation={{
              required: {
                value: true,
                message: 'Required',
              },
            }}
          />
          <Input
            label="phone number"
            name="phone-number"
            type="tel"
            id="phone-number"
            placeholder="Type your phone number..."
            validation={{
              required: {
                value: true,
                message: 'Required',
              },
              pattern: {
                value: /^\d{11}$/,
                message: 'Invalid phone number',
              },
            }}
          />
        </div>

        <Input
          label="email"
          name="email"
          type="email"
          id="email"
          placeholder="Type your email..."
          validation={{
            required: {
              value: true,
              message: 'Required',
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          }}
        />

        <Input
          label="subject"
          name="subject"
          type="text"
          id="subject"
          placeholder="Type your subject..."
          validation={{
            required: {
              value: true,
              message: 'Required',
            },
          }}
        />

        <Input
          label="message"
          name="message"
          id="message"
          placeholder="Type your message..."
          validation={{
            required: {
              value: true,
              message: 'Required',
            },
          }}
        />

        <button onClick={onSubmit} className="w-full p-4 text-gray-100 mt-4">
          Send Message
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;

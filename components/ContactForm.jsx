import { FormProvider, useForm } from 'react-hook-form';
import {
  name_validation,
  phone_number_validation,
  email_validation,
  subject_validation,
  message_validation,
} from '../utils/inputValidations';

import React, { useState } from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import Input from './Input';

const ContactForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <Input {...name_validation} />
          <Input {...phone_number_validation} />
        </div>
        <Input {...email_validation} />
        <Input {...subject_validation} />
        <Input {...message_validation} />
        {success && (
          <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
            <BsFillCheckSquareFill /> Form has been submitted successfully
          </p>
        )}
        <button
          disabled={!methods.formState.isValid}
          onClick={onSubmit}
          className={`w-full p-4 text-gray-100 mt-4 ${
            !methods.formState.isValid
              ? 'bg-gray-500'
              : 'bg-gradient-to-r from-[#5651e5] to-[#709dff]'
          }`}
        >
          Send Message
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;

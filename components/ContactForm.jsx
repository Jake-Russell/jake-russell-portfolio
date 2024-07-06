import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';
import Input from './Input';
import Button from './Button';
import { isEmail, isNotEmpty } from '../utils/inputValidations';
import { sendContactForm } from '../lib/api';

const ContactForm = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
    handleReset: resetName,
  } = useInput('', (value) => isNotEmpty(value));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    handleReset: resetEmail,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: subjectValue,
    handleInputChange: handleSubjectChange,
    handleInputBlur: handleSubjectBlur,
    hasError: subjectHasError,
    handleReset: resetSubject,
  } = useInput('', (value) => isNotEmpty(value));

  const {
    value: messageValue,
    handleInputChange: handleMessageChange,
    handleInputBlur: handleMessageBlur,
    hasError: messageHasError,
    handleReset: resetMessage,
  } = useInput('', (value) => isNotEmpty(value));

  const isFormValid =
    isNotEmpty(nameValue) &&
    isNotEmpty(emailValue) &&
    isEmail(emailValue) &&
    isNotEmpty(subjectValue) &&
    isNotEmpty(messageValue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitting(true);

    try {
      await sendContactForm({
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      });
      resetName();
      resetEmail();
      resetSubject();
      resetMessage();

      setIsFormSubmitting(false);
    } catch (error) {
      console.error(`Error message: ${error.messageValue}`);
      setIsFormSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <Input
          label={'Name'}
          id={'name'}
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          value={nameValue}
          error={nameHasError && 'Please enter a valid name.'}
        />

        <Input
          label={'Email'}
          id={'email'}
          type="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email address.'}
        />
      </div>

      <Input
        label={'Subject'}
        id={'subject'}
        onBlur={handleSubjectBlur}
        onChange={handleSubjectChange}
        value={subjectValue}
        error={subjectHasError && 'Please enter a valid subject.'}
      />

      <Input
        label={'Message'}
        id={'message'}
        isTextArea
        onBlur={handleMessageBlur}
        onChange={handleMessageChange}
        value={messageValue}
        error={messageHasError && 'Please enter a valid message.'}
      />

      <Button
        isDisabled={!isFormValid}
        onClick={handleSubmit}
        content="Send Message"
        processingText="Submitting..."
        isProcessing={isFormSubmitting}
      />
    </form>
  );
};

export default ContactForm;

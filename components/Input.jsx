import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import React from 'react';

const Input = ({ label, type, id, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  function findInputError(errors, name) {
    const filtered = Object.keys(errors)
      .filter((key) => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] });
      }, {});
    return filtered;
  }

  const isFormInvalid = (err) => {
    if (Object.keys(err).length > 0) return true;
    return false;
  };

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col py-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="uppercase text-sm py-2">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {type ? (
        <input
          id={id}
          type={type}
          className="border-2 rounded-lg p-3 flex border-gray-300"
          placeholder={placeholder}
          {...register(label, {
            required: {
              value: true,
              message: 'required',
            },
          })}
        />
      ) : (
        <textarea
          id={id}
          rows={10}
          className="border-2 rounded-lg p-3 border-gray-300"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;

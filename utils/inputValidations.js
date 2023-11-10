export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Type your name...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
  },
};

export const phone_number_validation = {
  name: 'phone_number',
  label: 'phone number',
  type: 'tel',
  id: 'phone_number',
  placeholder: 'Type your phone number...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^\d{11}$/,
      message: 'Invalid phone number',
    },
  },
};

export const email_validation = {
  name: 'email',
  label: 'email',
  type: 'email',
  id: 'email',
  placeholder: 'Type your email...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Invalid email address',
    },
  },
};

export const subject_validation = {
  name: 'subject',
  label: 'subject',
  type: 'text',
  id: 'subject',
  placeholder: 'Type your subject...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
  },
};

export const message_validation = {
  name: 'message',
  label: 'message',
  id: 'message',
  placeholder: 'Type your message...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
  },
};

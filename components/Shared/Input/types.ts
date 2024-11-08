import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export type InputProps = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
  isTextArea?: boolean;
  error?: string;
};

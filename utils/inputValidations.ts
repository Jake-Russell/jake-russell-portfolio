const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (value: string) => emailRegex.test(value);

export const isNotEmpty = (value: string) => value.trim() !== '';

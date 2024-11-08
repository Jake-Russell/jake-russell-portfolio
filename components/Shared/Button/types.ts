export type ButtonProps = {
  content: string;
  isDisabled?: boolean;
  isProcessing?: boolean;
  processingText?: string;
  onClick?: () => void;
};
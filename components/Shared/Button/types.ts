export type ButtonProps = {
  isDisabled: boolean;
  isProcessing: boolean;
  content: string;
  processingText: string;
  onClick?: () => void;
};
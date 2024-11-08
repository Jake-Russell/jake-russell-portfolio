export type ButtonProps = {
  isDisabled: boolean;
  isProcessing: boolean;
  onClick: () => void;
  content: string;
  processingText: string;
};
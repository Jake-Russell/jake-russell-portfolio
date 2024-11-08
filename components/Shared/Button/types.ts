export type ButtonProps = {
  content: string;
  onClick: () => void;
  isDisabled?: boolean;
  isProcessing?: boolean;
  processingText?: string;
};
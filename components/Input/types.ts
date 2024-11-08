import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
    id: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    isTextArea?: boolean;
    error?: string;
}

// label, id, type = "text", isTextArea, error, ...props
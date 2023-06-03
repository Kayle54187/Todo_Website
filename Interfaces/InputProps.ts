import React, { ChangeEvent } from "react";

export default interface InputProps {
    Placeholder: string,
    value?: string,
    Icon?: React.ElementType,
    is_icon: boolean,
    status?: "Primary" | "Idle" | "Error",
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}
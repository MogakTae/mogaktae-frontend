import React, { type ChangeEvent, type ReactNode } from 'react';

interface Props {
    label: string;
    id: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    readOnly?: boolean;
    type?: string;
    button?: ReactNode;
    className?: string;
}

function FormField({
    label,
    id,
    value,
    onChange,
    placeholder,
    error,
    disabled,
    readOnly,
    type,
    button,
    className,
}: Props) {
    return (
        <div className={`flex flex-col w-full gap-2 ${className ?? ''}`}>
            <label htmlFor={id} className="font-semibold text-sm">
                {label}
            </label>
            <div className={button ? 'flex flex-row gap-3' : undefined}>
                <input
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    type={type}
                    className="flex-grow border border-[#9C9DA8] px-5 py-4 rounded-xl text-base font-medium"
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                />
                {button}
            </div>
            <small
                id={`${id}-error`}
                className={error ? 'text-[#C80000] visible text-sm' : 'invisible text-sm'}
                role="alert"
            >
                {error}
            </small>
        </div>
    );
}

export default FormField;

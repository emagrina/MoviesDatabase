import { useState, useEffect } from 'react';

export const useInputValidation = (initialValue, minLength) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setIsDisabled(inputValue.trim().length < minLength);
    }, [inputValue, minLength]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const setInputValueAndReset = (value) => {
        setInputValue(value);
        setInputValue('');
    };


    return [inputValue, handleChange, isDisabled, setInputValueAndReset];
};

import { useState, useEffect } from 'react';

/**
 * Muestra o oculta las sugerencias si tiene mas de 4 letras o se a enviado el search
 * @param inputValue
 * @param formSubmitted
 * @returns {boolean}
 */
export const useShowSuggestions = (inputValue, formSubmitted) => {
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (inputValue.length > 3 && !formSubmitted) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [inputValue, formSubmitted]);

    return showSuggestions;
};

import { useState, useCallback } from 'react';

const useFlippedStates = (initialCount: number) => {
    const [flippedStates, setFlippedStates] = useState(Array(initialCount).fill(false));

    const resetFlippedStates = useCallback(
        (count: number = initialCount) => setFlippedStates(Array(count).fill(false)),
        [initialCount]
    );

    const handleFlip = useCallback((index: number) => {
            setFlippedStates((prev) => {
                const newStates = [...prev];
                newStates[index] = !newStates[index];
                return newStates;
            })
        }, []);

    return { flippedStates, resetFlippedStates, handleFlip };
};

export default useFlippedStates;
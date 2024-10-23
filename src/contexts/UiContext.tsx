import { createContext, useContext, useState } from 'react';
import { UiState } from '@/types/UiState';
import useFlippedStates from '@/app/hooks/useFlippedStates';

interface UiContextProps {
    uiState: UiState
    setMode: (mode: 'easy' | 'hard') => void;
    toggleHelp: () => void;
    flippedStates: boolean[]
    handleFlip: (index: number) => void;
    resetFlippedStates: (count: number) => void;
}

const UiContext = createContext<UiContextProps | undefined>(undefined);

export const UiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [uiState, setUiState] = useState<UiState>({
        showMobilePopup: false,
        showHelp: false,
        mode: 'easy',
    });

    const setMode = (newMode: 'easy' | 'hard') => {
        setUiState((prevState) => ({
            ...prevState,
            mode: newMode,
        }));
    };

    const toggleHelp = () => {
        setUiState((prevState) => ({
            ...prevState,
            showHelp: !prevState.showHelp,
        }));
    };

    const { flippedStates, resetFlippedStates, handleFlip } = useFlippedStates(0);

    return (
        <UiContext.Provider
            value={{
                uiState,
                setMode,
                toggleHelp,
                flippedStates,
                handleFlip,
                resetFlippedStates
            }}
        >
            {children}
        </UiContext.Provider>
    );
}
    export const useUiContext = () => {
        const context = useContext(UiContext);
        if (!context) {
            throw new Error('useUiContext must be used in a uiProvider');        
    }
    return context; 
};


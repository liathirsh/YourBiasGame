
import { useCallback, useEffect } from "react";
import { useQuizContext } from "@/contexts/QuizContext";
import { useUiContext } from "@/contexts/UiContext";
import ChoiceBox from "./choicebox";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { Choice } from "@/types/choice";

const ChoiceGrid = () => {
   const { currentQuestion, setChoice, state } = useQuizContext();
   const { uiState, flippedStates, handleFlip, resetFlippedStates } = useUiContext();
   const isMobile = useMediaQuery('(max-width: 768px)');

   const selectedChoice = state.selectedChoice;
   const mode = uiState.mode;

   useEffect(()=> {
    resetFlippedStates(currentQuestion.choices.length);
   }, [currentQuestion, resetFlippedStates]);
   
    
    const handleChoiceClick = useCallback(
        (choice: Choice, index: number) => {
        if (uiState.mode === 'hard'){
            setChoice(choice);
            handleFlip(index);
        } else {
            handleFlip(index);
        }
    },
        [uiState.mode, setChoice, handleFlip]
    );

    return (
        <div className="flex flex-col items-center w-full">
            <div className={`grid ${isMobile ? "grid-cols-1": "grid-cols-2"} gap-2 md:gap-4 mt-4 w-full md:w-full md:h-full`}>
                {currentQuestion.choices.map((choice, index) => (
                    <div key={index} className="w-full h-full">
                    <button
                        onClick={() => handleChoiceClick(choice, index)}
                        className={`w-full h-full rounded-md shadow-md transition-transform duration-200 border-4 transform hover:scale-105
                            ${
                                selectedChoice
                                    ?
                                    choice.isCorrect
                                        ? 'bg-success border-success hover:bg-success-hover'
                                        : 'bg-destructive border-destructive hover:bg-destructive-hover'
                                    : 'bg-primary hover:primary hover:bg-primary-hover hover:border-primary-hover'

                            }`}
                            disabled={false}
                    >
                    <div className="w-full h-full p-0 m-0">
                        <ChoiceBox 
                        choice={choice.option}
                        definition={choice.definition}
                        isFlipped={flippedStates[index]}
                        />
                    </div>
                </button>
            </div>
            ))}
        </div>

        {mode === 'easy' && flippedStates.some((isFlipped) => isFlipped) && selectedChoice === null && (
        <button
            onClick={() => {
                const flippedIndex = flippedStates.findIndex((isFlipped) => isFlipped);
                if (flippedIndex !== -1) {
                    setChoice(currentQuestion.choices[flippedIndex]);
                }
            }}
            className="mt-4 bg-primary text-white py-2 px-4 rounded-md z-20"
        >
            Confirm Your Choice
        </button>
        )}
    </div>
    );
};


export default ChoiceGrid;
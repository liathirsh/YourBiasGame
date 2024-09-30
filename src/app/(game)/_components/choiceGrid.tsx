"use client"

import ChoiceBox from "./choicebox";
import data from "../_data/data.json";


interface ChoiceGridProps {
    choices: string[];
    correctAnswer: string;
    selectedChoice: string | null;
    handleClick: (choice: string, index: number) => void;
    flippedStates: boolean[];
    isCorrect: boolean | null;
    currentStep: number;
};


const ChoiceGrid = ({ 
    choices, 
    handleClick, 
    correctAnswer, 
    selectedChoice, 
    flippedStates,
    currentStep
    }: ChoiceGridProps) => {
    
    return (
        <div className="grid grid-cols-2 gap-8 mt-4 h-full w-[400px]">
            {choices.map((choice, index) => (
                <button
                    key={index}
                    onClick={() => {
                        handleClick(choice, index);
                    }}
                    className={`p-4 text-white rounded-md shadow-md transition
                        ${
                            selectedChoice
                                ?
                                choice === correctAnswer
                                    ? 'bg-green-600 border-green-600'
                                    : 'bg-red-600 border-red-600'
                                : 'bg-[#006DAA] hover:bg-[#003559] hover:border-[#003559]'
                        }`}
                        disabled={!!selectedChoice}
                >
                    <ChoiceBox 
                        choice={choice} 
                        description={
                            selectedChoice
                                ? choice === correctAnswer
                                    ? data.test[currentStep].explanation
                                    : choice in data.test[currentStep].wrong_explanations
                                    ? data.test[currentStep].wrong_explanations[choice]
                                    : "No explanation available"
                                : ""
                            }
                        isFlipped={flippedStates[index]}                        
                    />
                </button>
            ))}
        </div>
    );
};

export default ChoiceGrid;
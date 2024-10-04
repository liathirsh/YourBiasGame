
import ChoiceBox from "./choicebox";
import { Choice } from "@/types/choice";

interface ChoiceGridProps {
    choices: Choice[];
    selectedChoice: Choice | null;
    handleClick: (choice: Choice, index: number) => void;
    flippedStates: boolean[];
}

const ChoiceGrid = ({ choices, selectedChoice, handleClick, flippedStates }: ChoiceGridProps) => {    
    return (
        <div className="grid grid-cols-2 gap-2 mt-4 md:w-full md:h-full">
            {choices.map((choice, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(choice, index)}
                    className={`w-full h-full rounded-md shadow-md transition border-4
                        ${
                            selectedChoice
                                ?
                                choice.isCorrect
                                    ? 'bg-green-600 border-green-600'
                                    : 'bg-red-600 border-red-600'
                                : 'bg-[#006DAA] hover:bg-[#003559] hover:border-[#003559]'
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
            ))}
        </div>
    );
};

export default ChoiceGrid;

import ChoiceBox from "./choicebox";
import { Choice } from "@/types/choice";
import useMediaQuery from "@/app/hooks/useMediaQuery";

interface ChoiceGridProps {
    choices: Choice[];
    selectedChoice: Choice | null;
    handleClick: (choice: Choice, index: number) => void;
    flippedStates: boolean[];
}

const ChoiceGrid = ({ choices, selectedChoice, handleClick, flippedStates }: ChoiceGridProps) => {    
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    return (
        <div className={`grid ${isMobile ? "grid-cols-1": "grid-cols-2"} gap-2 md:gap-4 mt-4 w-full md:w-full md:h-full`}>
            {choices.map((choice, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(choice, index)}
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
            ))}
        </div>
    );
};

export default ChoiceGrid;
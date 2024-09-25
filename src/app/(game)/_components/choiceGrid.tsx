
import data from "../_data/data.json";
import ChoiceBox from "./choicebox";

interface ChoiceGridProps {
    choices: string[];
    isCorrect: boolean | null;
    correctAnswer: string;
    selectedChoice: string | null;
    handleClick: (choice: string) => void;
};


const ChoiceGrid = ({ choices, handleClick, isCorrect, correctAnswer, selectedChoice } : ChoiceGridProps) => {
    
    return (
        <div className="grid grid-cols-2 gap-8 mt-4">
            {data.test[0].choices.slice(0, 4).map((choice, index:number) => (
                <button
                    key={index}
                    onClick={() => handleClick(choice)}
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
                    <ChoiceBox choice={choice} />
                </button>
            ))}
        </div>
    );
};

export default ChoiceGrid;
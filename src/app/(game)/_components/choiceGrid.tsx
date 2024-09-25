
import data from "../_data/data.json";
import ChoiceBox from "./choicebox";

interface ChoiceGridProps {
    choices: string[];
    isCorrect: boolean | null;
    handleClick: (choice: string) => void;
};


const ChoiceGrid = ({ choice, handleClick, isCorrect} : ChoiceGridProps) => {
    

    return (
        <div className="grid grid-cols-2 gap-8 mt-4">
            {data.test[0].choices.slice(0, 4).map((choice, index:number) => (
                <button
                    key={index}
                    onClick={() => handleClick(choice)}
                    className="p-4 bg-slate-400 text-white rounded-md shadow-md hover:bg-[#006DAA] transition"
                    >
                    <ChoiceBox choice={choice} />
                </button>
            ))}
        </div>
    );
};

export default ChoiceGrid;
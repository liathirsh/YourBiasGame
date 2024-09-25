"use client"

import { useState } from "react";
import ChoiceGrid from "../_components/choiceGrid";
import QuestionBox from "../_components/questionbox";
import data from "../_data/data.json";

const Play = () => {
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const handleClick = (choice: string) => {
        setSelectedChoice(choice);
        if (choice === data.test[0].answer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div>
            <div className="h-full flex items-center justify-center mt-20">
                <QuestionBox question={data.test[0].question} />
            </div>
            <div>
                <ChoiceGrid 
                    choices={data.test[0].choices}
                    correctAnswer={data.test[0].answer}
                    handleClick={handleClick}
                    isCorrect={isCorrect}
                    selectedChoice={selectedChoice}
                />
            </div>
        </div>
    );   
};

export default Play;


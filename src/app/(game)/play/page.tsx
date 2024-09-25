"use client"

import { useState } from "react";
import ChoiceGrid from "../_components/choiceGrid";
import QuestionBox from "../_components/questionbox";
import { Button } from "@/components/ui/button";
import data from "../_data/data.json";

const Play = () => {
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const handleClick = (choice: string) => {
        if (choice === data.test[0].answer) {
            setIsCorrect(true);
            alert("Correct!");
        } else {
            setIsCorrect(false);
            alert("Incorrect!");
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
                    handleClick={handleClick}
                    isCorrect={isCorrect}
                />
            </div>
        </div>
    );   
};

export default Play;


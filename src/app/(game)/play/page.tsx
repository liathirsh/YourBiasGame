"use client"

import { useState } from "react";
import ChoiceGrid from "../_components/choiceGrid";
import QuestionBox from "../_components/questionbox";
import NextButton from "../_components/nextButton";
import { ProgressBar } from "../_components/progressbar";

import data from "../_data/data.json";

import { Settings, CircleHelp } from "lucide-react";

import { StepInterface } from "@/types/steps";

const Play = () => {
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const [steps, setSteps] = useState<StepInterface[]>(
        data.test.map((_, index) => ({
            name: `Step ${index + 1}`,
            href: `#`,  
            status: "upcoming"
        }))
    );

    const handleNext = () => {
        if (selectedChoice) {
            setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
            setSelectedChoice(null);
            setIsCorrect(null);
        };
    }
    
    const handleClick = (choice: string) => {
        setSelectedChoice(choice);
        const newSteps = [...steps];
        if (choice === data.test[currentStep].answer) {
            newSteps[currentStep].status = "complete";
        } else {
            newSteps[currentStep].status = "incorrect";
        }
        setSteps(newSteps);

    };

    return (
        <div>
            <div className="h-full flex flex-col items-center bg-black">
                <div className="w-full max-w-[420px] mt-4 px-4 flex flex-col items-center">
                    <div className="flex items-center justify-between">
                        <ProgressBar 
                            currentStep={currentStep} 
                            steps={steps} 
                            isCorrect={isCorrect}
                        />
                        <div className="flex items-center">
                            <Settings className="w-6 h-6 text-[#B9D6F2] ml-6 cursor-pointer"/>
                            <CircleHelp className="w-6 h-6 text-[#B9D6F2] ml-2 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            <div className="h-[full] w-[500px] flex items-center justify-center mt-20">
                <QuestionBox question={data.test[currentStep].question} />
            </div>
            <div>
                <ChoiceGrid 
                    choices={data.test[currentStep].choices}
                    correctAnswer={data.test[currentStep].answer}
                    handleClick={handleClick}
                    isCorrect={isCorrect}
                    selectedChoice={selectedChoice}
                />
            </div>
            <div className="w-full max-w-[420px] flex justify-end px-4">
                <NextButton onNext={handleNext} disabled={!selectedChoice}/>
            </div>
        </div>
    </div>
    );   
};

export default Play;


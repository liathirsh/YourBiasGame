"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChoiceGrid from "../_components/choiceGrid";
import QuestionBox from "../_components/questionbox";
import NextButton from "../_components/nextButton";
import { ProgressBar } from "../_components/progressbar";

import data from "../_data/data.json";

import { Settings, CircleHelp } from "lucide-react";
import { StepInterface } from "@/types/steps";
import { Choice } from "@/types/choice";

const Play = () => {
    const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [flippedStates, setFlippedStates] = useState<boolean[]>(Array(4).fill(false));
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);

    const [steps, setSteps] = useState<StepInterface[]>(
        data.biasTest.map((_, index) => ({
          name: `Step ${index + 1}`,
          href: `#`,
          status: "upcoming",
        }))
      );

    const router = useRouter();

    useEffect(() => {
        if (isQuizComplete) {
            router.push(`/results?correct=${correctAnswers}`);
        }
    }, [isQuizComplete, correctAnswers, router]);

    const handleNext = () => {
        if (selectedChoice) {
            if (currentStep === data.biasTest.length-1) {
                setIsQuizComplete(true);
                return;
            }
            if (selectedChoice.isCorrect) {
                setCorrectAnswers((prev) => prev + 1);
            }
            setCurrentStep((prevStep) => Math.min(prevStep + 1, data.biasTest.length - 1));
            setSelectedChoice(null);
            setFlippedStates(Array(4).fill(false));
        };
    };

    const handleClick = (choice: Choice, index: number) => {
        
        const updatedFlippedStates = [...flippedStates]
        updatedFlippedStates[index] = !updatedFlippedStates[index];
        setFlippedStates(updatedFlippedStates);
        
        if (!selectedChoice) {
            setSelectedChoice(choice);

            const newSteps = [...steps];
            if (choice.isCorrect) {
                newSteps[currentStep].status = "complete";
            } else {
                newSteps[currentStep].status = "incorrect";
            }
            setSteps(newSteps);
        }
    };

    const currentQuestion = data.biasTest[currentStep];
    
    return (
        <div>
            <div className="h-screen flex flex-col items-center bg-black">
                <div className="w-full max-w-[420px] mt-4 px-4 flex flex-col items-center">
                    <div className="flex items-center justify-between">
                        <ProgressBar 
                            currentStep={currentStep} 
                            steps={steps}
                        />
                        <div className="flex items-center">
                            <Settings className="w-6 h-6 text-[#B9D6F2] ml-6 cursor-pointer"/>
                            <CircleHelp className="w-6 h-6 text-[#B9D6F2] ml-2 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            <div className="h-[full] w-[500px] flex items-center justify-center mt-6">
                <QuestionBox question={currentQuestion.question} />
            </div>
            <div className="flex-grow w-full flex justify-center">
                <ChoiceGrid 
                    choices={currentQuestion.choices}
                    selectedChoice={selectedChoice}
                    handleClick={handleClick}
                    flippedStates={flippedStates}
                />
            </div>
            <div className="w-full max-w-[420px] flex justify-end mb-4">
                <NextButton onNext={handleNext} disabled={!selectedChoice}/>
            </div>
        </div>
    </div>
    );   
};

export default Play;


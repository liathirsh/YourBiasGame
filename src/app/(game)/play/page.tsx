"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChoiceGrid from "../_components/choiceGrid";
import QuestionBox from "../_components/questionbox";
import NextButton from "../_components/nextButton";
import { ProgressBar } from "../_components/progressbar";

import { Settings, CircleHelp } from "lucide-react";

import data from "../_data/data.json";

import { StepInterface } from "@/types/steps";
import { Choice } from "@/types/choice";
import HelpPopUp from "@/components/ui/helppopup";

const Play = () => {
    const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [flippedStates, setFlippedStates] = useState<boolean[]>(Array(4).fill(false));
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);
    const [showMobilePopup, setShowMobilePopup] = useState<boolean>(false);
    const [showHelp, setShowHelp] = useState<boolean>(false);

    const [steps, setSteps] = useState<StepInterface[]>(
        data.biasTest.map((_, index) => ({
          name: `Step ${index + 1}`,
          href: `#`,
          status: "upcoming",
        }))
      );

    const router = useRouter();

      useEffect(() => {
        if (typeof window !== "undefined") {
            setShowMobilePopup(window.innerWidth < 376);
        }
    }, []);

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
        {showMobilePopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
                <div className="bg-card rounded-lg p-8 max-w-sm text-center border border-border">
                    <h2 className="text-xl font-semibold mb-4 text-primary">Mobile View</h2>
                    <p className="text-neutral-foreground">Mobile is still in progress for some smaller screens. Please switch to a larger screent to play.</p>
                </div>
            </div>
        )}
        {!showMobilePopup && (
        <div>
            <div className="h-screen flex flex-col items-center">
                <div className="w-full responsive-container mt-4 px-4 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full">
                        <ProgressBar 
                            currentStep={currentStep} 
                            steps={steps}
                        />
                        <div className="flex items-center sm:space-x-2 md:space-x-4">
                            <Settings className="w-6 h-6 text-primary ml-6 cursor-pointer"/>
                            <CircleHelp onClick={()=>setShowHelp(prev => !prev)} className="w-6 h-6 text-primary cursor-pointer z-20" />
                            {showHelp && <HelpPopUp show={showHelp} setShow={setShowHelp} />}
                        </div>
                    </div>
                </div>
            <div className="w-full responsive-container flex items-center justify-center mt-6 px-4">
                <QuestionBox question={currentQuestion.question} />
            </div>
            <div className="flex-grow w-full responsive container flex justify-center">
                <ChoiceGrid 
                    choices={currentQuestion.choices}
                    selectedChoice={selectedChoice}
                    handleClick={handleClick}
                    flippedStates={flippedStates}
                />
            </div>
            <div className="w-full responsive-container max-w-[420px] flex justify-end mb-4">
                <NextButton onNext={handleNext} disabled={!selectedChoice}/>
            </div>
        </div>
    </div>
    )}
    </div>
    );   
};

export default Play;


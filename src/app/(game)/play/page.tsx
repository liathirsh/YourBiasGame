"use client"

import useWindowSize from "@/app/hooks/useWindowSize";
import { QuizProvider, useQuizContext } from "@/contexts/QuizContext";
import { UiProvider } from "@/contexts/UiContext";
import ChoiceGrid from "../_components/choiceGrid";
import QuestionBox from "../_components/questionbox";
import NextButton from "../_components/nextButton";
import MobilePopUp from "@/components/ui/mobilepopup";
import ProgressBarNav from "../_components/progressbarnav";

const PlayContext = () => {
    const { width } = useWindowSize();
    const showMobilePopup = width !== undefined && width < 376;

    const { state, nextStep } = useQuizContext();

    if (showMobilePopup) {
        return <MobilePopUp />
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <div className="w-full responsive-container mt-4 px-4 flex flex-col items-center">
                <ProgressBarNav/>
            </div>
        <div className="w-full responsive-container flex items-center justify-center mt-6 px-4">
            <QuestionBox />
        </div>
        <div className="flex-grow w-full responsive container flex justify-center">
            <ChoiceGrid />
        </div>
        <div className="w-full responsive-container max-w-[420px] flex justify-end mb-4">
            <NextButton onNext={nextStep} disabled={!state.selectedChoice}/>
        </div>
    </div>
    );   
}

    const Play = () => {
        return (
            <QuizProvider>
                <UiProvider>
                    <PlayContext />
                </UiProvider>
            </QuizProvider>
        )
    }

export default Play;

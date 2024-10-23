import { useEffect, useReducer, useMemo } from "react";
import { useRouter } from 'next/navigation';
import { quizReducer, initialQuizState } from "@/app/(game)/_reducers/quizReducer"
import data from "@/app/(game)/_data/data.json"
import { Choice } from "@/types/choice";

const useQuiz = () => {
    const [state, dispatch] = useReducer(quizReducer, undefined, initialQuizState);
    const router = useRouter();

    useEffect(() => {
        if (state.isQuizComplete) router.push(`/results?correct=${state.correctAnswers}`);
    }, [state.isQuizComplete, state.correctAnswers, router]);

    const currentQuestion = useMemo(
        ()=> data.biasTest[state.currentStep],
        [state.currentStep]
    );

    const nextStep = () => {
        if (state.selectedChoice) {
            if (state.currentStep === data.biasTest.length -1) {
                dispatch({ type: 'COMPLETE_QUIZ'});
            } else {
                dispatch({ type: 'NEXT_STEP'});
            }
        }
    }

    const setChoice = (choice:Choice) => {
        dispatch({ type: "SET_CHOICE", choice })
    }

    return { state, currentQuestion, nextStep, setChoice}
      
}

export default useQuiz;
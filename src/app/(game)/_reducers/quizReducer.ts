import { QuizAction } from "@/types/quizAction";
import { QuizState } from "@/types/quizState";
import data from "@/app/(game)/_data/data.json";

export const initialQuizState = (): QuizState => ({
    currentStep: 0,
    correctAnswers: 0,
    selectedChoice: null, 
    isQuizComplete: false,
    steps: data.biasTest.map((_, index) => ({
        name: `Step ${index + 1}`, 
        href: "#",
        status: "upcoming",
    })),
});

export function quizReducer(state: QuizState, action:QuizAction): QuizState {
    switch(action.type) {
        case "SET_CHOICE":
            const isCorrect = action.choice.isCorrect;
            const updatedSteps = [...state.steps]
            updatedSteps[state.currentStep].status = isCorrect ? "complete" : "incorrect";

            return {
                ...state,
                selectedChoice: action.choice,
                correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
                steps: updatedSteps,
            };
        
            case "NEXT_STEP":
                const nextStep = state.currentStep + 1;
                return {
                    ...state,
                    currentStep: nextStep,
                    selectedChoice: null,
                    isQuizComplete: nextStep >= state.steps.length,
                };
            
            case "RESET_CHOICE":
                return { ...state, selectedChoice: null };
            
            case "COMPLETE_QUIZ":
                return { ...state, isQuizComplete: true };

            default:
                return state;
    } 
}


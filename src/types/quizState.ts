import { Choice } from "./choice";
import { StepInterface } from "./steps";

export interface QuizState {
    currentStep: number;
    correctAnswers: number;
    selectedChoice: Choice| null;
    steps: StepInterface[];
    isQuizComplete: boolean;
}
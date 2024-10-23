import { createContext, useContext } from 'react';

import useQuiz from "@/app/hooks/useQuiz";

import { QuizState } from '@/types/quizState';
import { Question } from '@/types/question';
import { Choice } from "@/types/choice";


interface QuizContextProps {
    state: QuizState;
    currentQuestion: Question;
    nextStep: () => void;
    setChoice: (choice: Choice) => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const quiz = useQuiz();
    
    return (
        <QuizContext.Provider value={ quiz }>
            {children}
        </QuizContext.Provider>
    )    
};

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if(!context){
        throw new Error('useQuizContext must be used in a QuizProvider');        
    }
    return context;
};


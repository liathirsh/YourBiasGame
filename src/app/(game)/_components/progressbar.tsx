
import  ProgressCircles  from "@/components/ui/progresscircles"


export interface StepInterface {
    name: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming' | 'incorrect'
}


interface ProgressBarProps {
    currentStep: number;
    steps: StepInterface[]
    isCorrect: boolean | null;
}

export const ProgressBar = ({ currentStep, steps, isCorrect }: ProgressBarProps ) => {
    const updatedSteps: StepInterface[] = steps.map((step, index) => {
        if (index < currentStep) return {...step, status: "complete"};
        if (index === currentStep) {
            if (isCorrect === false) return {...step, status: "incorrect"};
            return {...step, status: "current"};
        }
        return { ...step, status: "upcoming" };
    }); 

    return (
        <ProgressCircles steps={updatedSteps}
        />            
    )
}
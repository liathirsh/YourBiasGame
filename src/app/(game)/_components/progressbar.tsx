
import  ProgressCircles  from "@/components/ui/progresscircles"


interface ProgressBarProps {
    currentStep: number;
    steps: { name: string; href: string; status: string }[];
    isCorrect: boolean | null;
}

export const ProgressBar = ({ currentStep, steps, isCorrect }: ProgressBarProps ) => {
    const updatedSteps = steps.map((step, index) => {
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
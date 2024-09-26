
import  ProgressCircles  from "@/components/ui/progresscircles"

import { StepInterface } from "@/types/steps"

interface ProgressBarProps {
    currentStep: number;
    steps: StepInterface[]
    isCorrect: boolean | null;
}

export const ProgressBar = ({ currentStep, steps }: ProgressBarProps ) => {
    const updatedSteps: StepInterface[] = steps.map((step, index) => {
        if (index < currentStep) return step;
        if (index === currentStep) {
            return { ...step, status: "current"}
        }
        return { ...step, status: "upcoming"}
    }); 

    return (
        <ProgressCircles steps={updatedSteps}
        />            
    )
}
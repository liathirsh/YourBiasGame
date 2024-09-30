
import { Card, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface choiceType {
    choice: string;
    description: string;
    isFlipped: boolean;
}

const ChoiceBox = ({ choice, description, isFlipped } : choiceType) => {
    return (
        <div className="relative w-full h-full perspective-1000">
            <div className={cn(
                "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
                isFlipped ? "rotate-y-180" : ""
            )}
            >
                <Card className="w-full h-full backface-hidden p-8">
                    <CardDescription className="w-full px-0 pt-0">
                        {choice}
                    </CardDescription>
                </Card>
                <Card className="absolute w-full h-full backface-hidden border-0 p-8 rotate-y-180">
                    <CardDescription className="w-full px-0 pt-0">
                        {description}
                    </CardDescription>
                </Card>
            </div>
        </div>
    )
}

export default ChoiceBox;

import { Card, CardHeader } from "@/components/ui/card";
import useMediaQuery from "@/app/hooks/useMediaQuery";

interface questionType {
    question: string;
}

const QuestionBox = ({ question } : questionType) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 390px)');

    return (
        <Card className={`border border-border bg-card bg-opacity-100 text-card-foreground z-10 shadow-sm w-full h-full rounded-lg ${isSmallScreen ? "p-4" : isMobile ? "p-6" : "p-8"}
                ${isSmallScreen ? "text-xs" : isMobile ? "text-sm" : "text-base"}`}
        >
            <CardHeader 
                className={`w-full px-0 pt-0 text-center ${
                    isSmallScreen ? "leading-tight" : "leading-normal"} 
                    ${isSmallScreen ? "h-full" : ""}`}
            >
                {question}
            </CardHeader>
        </Card>
    )
}

export default QuestionBox;


import { Card, CardHeader } from "@/components/ui/card";

interface questionType {
    question: string;
}

const QuestionBox = ({ question } : questionType) => {
    return (
        <Card className="border-0 w-full h-full p-8">
            <CardHeader className="w-full px-0 pt-0">
                {question}
            </CardHeader>
        </Card>
    )
}

export default QuestionBox;


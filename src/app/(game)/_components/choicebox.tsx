import { Card, CardDescription } from "@/components/ui/card";

interface choiceType {
    choice: string;
}

const ChoiceBox = ({ choice } : choiceType) => {
    return (
        <Card className="border-0 w-full h-full p-8">
            <CardDescription className="w-full px-0 pt-0">
                {choice}
            </CardDescription>
        </Card>
    )
}

export default ChoiceBox;

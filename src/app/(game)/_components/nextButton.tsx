
import { Button } from "@/components/ui/button";

interface NextButtonProps {
    onNext: () => void;
    disabled: boolean;
}

const NextButton:React.FC<NextButtonProps> = ( { onNext, disabled }) => {
    
    return (
        <Button className="mt-6 p-8 bg-black" type="button"  onClick={onNext} disabled={disabled}> Next </Button>
    );
};

export default NextButton;
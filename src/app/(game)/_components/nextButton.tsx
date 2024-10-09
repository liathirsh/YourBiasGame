
import { Button } from "@/components/ui/button";

interface NextButtonProps {
    onNext: () => void;
    disabled: boolean;
}

const NextButton:React.FC<NextButtonProps> = ( { onNext, disabled }) => {
    
    return (
        <Button 
            className={`mt-6 bg-primary text-primary-foreground hover:bg-primary-hover p-4 rounded-md transition-colors
            ${ disabled ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`} 
            type="button"
            onClick={onNext} 
            disabled={disabled}
        >
            Next 
        </Button>
    );
};

export default NextButton;
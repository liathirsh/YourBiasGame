
import { ProgressBar } from "./progressbar"
import { Settings, CircleHelp } from "lucide-react"


interface NavBarProps {
    currentStep: number;
    steps: { name: string; href: string; status: string }[];
    isCorrect: boolean | null;
}
const Navbar = ({ currentStep, steps, isCorrect }: NavBarProps ) => {

    
}

export default Navbar;
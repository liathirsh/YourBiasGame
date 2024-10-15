'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Settings } from "lucide-react";

interface SettingsButtonProps {
    currentMode: 'easy' | 'hard';
    setMode: (mode: 'easy' | 'hard') => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ currentMode, setMode}) => {
    return(    
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button style={{ zIndex: 10}}
                    className="settings-trigger-button"
                    >
                        <Settings className="w-6 h-6 text-primary ml-6 cursor-pointer" />
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent> 
                    <AlertDialogHeader> Settings </AlertDialogHeader>
                    <AlertDialogDescription> 
                        <strong> Easy Mode: </strong> You can see the definitions of the biases before guessing
                        <strong> Hard Mode: </strong> No peeking until make a choice. 
                        <br></br>
                    </AlertDialogDescription>
                    <AlertDialogDescription>
                        <strong> Choose your difficulty! </strong>                       
                    </AlertDialogDescription>
                    <AlertDialogFooter>                        
                        <AlertDialogAction onClick={() => setMode(currentMode=== 'easy' ? 'hard': 'easy')}> 
                            Switch to {currentMode === 'easy' ? 'Hard': 'Easy'} mode
                        </AlertDialogAction>
                        <AlertDialogCancel> Cancel </AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
        </AlertDialog>
    );
};

export default SettingsButton;
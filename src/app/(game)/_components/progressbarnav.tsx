
import { useQuizContext } from "@/contexts/QuizContext";
import { useUiContext } from "@/contexts/UiContext";
import { ProgressBar } from "./progressbar";
import SettingsButton from "./settingsbutton";
import { CircleHelp } from "lucide-react";
import HelpPopUp from "@/components/ui/helppopup";

const ProgressBarNav = () => {
  const { state } = useQuizContext();
  const { uiState, setMode, toggleHelp } = useUiContext();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <ProgressBar currentStep={state.currentStep} steps={state.steps} />
          <div className="flex items-center sm:space-x-2 md:space-x-4">
            <SettingsButton currentMode={uiState.mode} setMode={setMode} />
            <CircleHelp onClick={toggleHelp} className="w-6 h-6 text-primary cursor-pointer z-20" />
            {uiState.showHelp && <HelpPopUp show={uiState.showHelp} setShow={toggleHelp} />}
          </div>
        </div>
      );
    }

export default ProgressBarNav;
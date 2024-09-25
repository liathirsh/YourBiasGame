import { ProgressBar } from "./_components/progressbar"
import  Play from "./play/page"

import { Settings, CircleHelp } from "lucide-react"
import { Button } from "@/components/ui/button"


const GameLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="h-full flex flex-col items-center justify-start bg-black">
        <div className="w-full max-w-[420px] mt-4 px-4">
          <div className="flex items-center justify-between">
            <ProgressBar />
            <div className="flex items-center">
              <Settings
                className="w-6 h-6 text-[#B9D6F2] ml-6 cursor-pointer"
              />
              <CircleHelp
                className="w-6 h-6 text-[#B9D6F2] ml-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
  
        <div className="w-full max-w-[420px] mt-6 px-4">
          {children}
        </div>
        <Button className="mt-6 p-8" type="button">Next</Button>
      </div>
    );
  }
  
  export default GameLayout;
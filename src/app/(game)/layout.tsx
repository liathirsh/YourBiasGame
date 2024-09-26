
import { useState } from "react";

// import { ProgressBar } from "./_components/progressbar"
// import NextButton from "./_components/nextButton";

// import { Settings, CircleHelp } from "lucide-react"
import Navbar from "./_components/navbar";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
      <div className="h-full flex flex-col items-center justify-start bg-black">
        <div className="w-full max-w-[420px] mt-4 px-4">
          <div className="flex items-center justify-between">
            {/* <ProgressBar currentStep={currentStep} steps={steps}/>
            <div className="flex items-center">
              <Settings
                className="w-6 h-6 text-[#B9D6F2] ml-6 cursor-pointer"
              />
              <CircleHelp
                className="w-6 h-6 text-[#B9D6F2] ml-2 cursor-pointer"
              /> */}
            {/* </div> */}
          </div>
        </div>
  
        <div className="w-full max-w-[420px] mt-6 px-4">
          {children}        
        </div>
      </div>
    );
  }
  
  export default GameLayout;
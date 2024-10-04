
const GameLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
      <div className="h-full flex flex-col items-center justify-start">
        {/* <div className="w-full max-w-[420px] mt-4 px-4">
        </div> */}
        <div className="w-full max-w-[420px] mt-6 px-4">
          {children}        
        </div>
      </div>
    );
  }
  
  export default GameLayout;
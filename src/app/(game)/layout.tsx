
const GameLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
      <div className="h-full flex flex-col items-center md:items-center justify center md:justify-start lg:justify-center">
        <div className="w-full responsive-container mt-6 md:mt-12 lg:mt-16 px-4 md:px-8">
          {children}        
        </div>
      </div>
    );
  }
  
  export default GameLayout;
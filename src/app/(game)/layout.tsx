import Image from 'next/image';
import background from "@/images/background.png"

const GameLayout = ({ children }: { children: React.ReactNode }) => {
    
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center text-foreground">
          <Image 
            src={background}
            alt="Game Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          {children}
        </div>
    );
  }
  
  export default GameLayout;
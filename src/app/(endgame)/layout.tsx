
import background from "@/images/resultsbackground.png"
import Image from 'next/image';


const EndGameLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="relative h-screen w-screen flex items-center justify-center"> 
            <div className="flex flex-col items-center space-y-4">
                    <Image 
                    src={background}
                    alt="Game Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                    />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full bg-background/80 px-12 py-16 m-4 rounded-lg shadow-md">
                {children}
            </div>           
        </div>
    )
}

export default EndGameLayout;

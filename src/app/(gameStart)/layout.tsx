import biasbuster from "@/images/biasbuster.png"
import Image from 'next/image'

const WelcomeLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center px-4 md:px-0 text-primary-foreground relative"> 
            <div className="flex flex-col items-center space-y-4">
                <Image 
                    src={biasbuster}
                    className="absolute inset-0 w-full h-full object-contain sm:object-cover md:object-cover lg:object-cover opacity-20"
                    alt="bias buster logo"            
                />
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WelcomeLayout;
